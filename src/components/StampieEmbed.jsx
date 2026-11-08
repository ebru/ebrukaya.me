import { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"

import useTheme from "@/hooks/useTheme"

const SCRIPT_SRC = "https://stampie.app/embed.js"
const STAMPIE_ORIGIN = "https://stampie.app"

// Colour for visited countries: a lighter tint of the site accent, so the map isn't too heavy.
const ACCENT = { light: "#6e72ec", dark: "#a3a5ff" }

// Stampie's embed script scans the page once when it loads. Next.js switches
// pages without a reload, so the script is added again each time an embed
// appears (or the theme changes). Embeds already mounted are skipped by the script.
// A skeleton in the same shape shows until the embed has loaded and sized itself.
const StampieEmbed = ({ user = "ebru", show }) => {
  const { theme } = useTheme()
  const holderRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
    const holder = holderRef.current
    let frame = null
    let fallback = null

    const markReady = () => setReady(true)
    const onMessage = (event) => {
      if (
        frame &&
        event.origin === STAMPIE_ORIGIN &&
        event.source === frame.contentWindow &&
        event.data?.type === "stampie-embed-height"
      ) {
        markReady()
      }
    }

    // The script inserts the iframe; wait for it, then wait for it to load.
    const watchFrame = () => {
      if (frame || !holder) return
      frame = holder.querySelector("iframe")
      if (!frame) return
      frame.addEventListener("load", () => {
        // Give the embed a moment to report its real height before revealing it.
        fallback = setTimeout(markReady, 400)
      })
    }
    const observer = new MutationObserver(watchFrame)
    if (holder) observer.observe(holder, { childList: true, subtree: true })
    window.addEventListener("message", onMessage)

    const script = document.createElement("script")
    script.src = SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      window.removeEventListener("message", onMessage)
      clearTimeout(fallback)
      script.remove()
    }
  }, [theme])

  return (
    <Frame $ready={ready}>
      {!ready && (show === "map" ? <MapSkeleton /> : <WondersSkeleton />)}
      <div className="holder" ref={holderRef} aria-busy={!ready}>
        {/* key: a new element per theme, so the embed re-mounts in the new colours */}
        <div
          key={theme}
          className="stampie-embed"
          data-user={user}
          data-show={show}
          data-transparent="1"
          data-color={ACCENT[theme]}
          data-theme={theme}
          data-paper={theme === "dark" ? "grey" : undefined}
        />
      </div>
    </Frame>
  )
}

const WondersSkeleton = () => (
  <Skeleton aria-hidden="true">
    <div className="head">
      <Bone style={{ width: 110 }} />
      <Bone style={{ width: 70 }} />
    </div>
    <Bone style={{ height: 5, marginBottom: 16 }} />
    <div className="stamps">
      {Array.from({ length: 7 }, (_, i) => (
        <Bone key={i} className="stamp" />
      ))}
    </div>
  </Skeleton>
)

const MapSkeleton = () => (
  <Skeleton aria-hidden="true">
    <div className="head">
      <Bone style={{ width: 200 }} />
    </div>
    <Bone className="map" />
  </Skeleton>
)

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`

const Frame = styled.div`
  position: relative;

  /* While loading, the embed sits invisibly on top of the skeleton (it has to be
     on screen, or the lazy-loaded iframe never starts loading). */
  .holder {
    ${(p) =>
      p.$ready
        ? ""
        : "position: absolute; inset: 0; opacity: 0; pointer-events: none; overflow: hidden;"}
    transition: opacity 0.3s ease;
  }

  iframe {
    display: block;
    width: 100%;
    border: 0;
  }
`

const Skeleton = styled.div`
  padding: 19px 21px;

  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .stamps {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px;
  }

  .stamp {
    aspect-ratio: 1;
    height: auto;
    border-radius: 10px;
  }

  .map {
    aspect-ratio: 1010 / 666;
    height: auto;
    border-radius: 12px;
  }
`

const Bone = styled.div`
  height: 16px;
  border-radius: 6px;
  background: var(--surface);
  animation: ${pulse} 1.4s ease-in-out infinite;
`

export default StampieEmbed
