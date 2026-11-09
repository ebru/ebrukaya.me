"use client"

import { useEffect, useRef, useState } from "react"

import useTheme, { type Theme } from "@/hooks/useTheme"
import { cn } from "@/lib/cn"

const SCRIPT_SRC = "https://stampie.app/embed.js"
const STAMPIE_ORIGIN = "https://stampie.app"

// Colour for visited countries: a lighter tint of the site accent, so the map isn't too heavy.
const ACCENT: Record<Theme, string> = { light: "#6e72ec", dark: "#a3a5ff" }

type Props = {
  user?: string
  /** which Stampie widget to show */
  show: "map" | "wonders"
}

// Stampie's embed script scans the page once when it loads. Next.js switches
// pages without a reload, so the script is added again each time an embed
// appears (or the theme changes). Embeds already mounted are skipped by the script.
// A skeleton in the same shape shows until the embed has loaded and sized itself.
const StampieEmbed = ({ user = "ebru", show }: Props) => {
  const { theme } = useTheme()
  const holderRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
    const holder = holderRef.current
    let frame: HTMLIFrameElement | null = null
    let fallback: ReturnType<typeof setTimeout> | undefined

    const markReady = () => setReady(true)
    const onMessage = (event: MessageEvent) => {
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
    <div className="relative [&_iframe]:block [&_iframe]:w-full [&_iframe]:border-0">
      {!ready && (show === "map" ? <MapSkeleton /> : <WondersSkeleton />)}
      {/* While loading, the embed sits invisibly on top of the skeleton (it has to be
          on screen, or the lazy-loaded iframe never starts loading). */}
      <div
        ref={holderRef}
        aria-busy={!ready}
        className={cn(
          "transition-opacity duration-300 ease-[ease]",
          !ready &&
            "pointer-events-none absolute inset-0 overflow-hidden opacity-0"
        )}
      >
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
    </div>
  )
}

const Bone = ({ className }: { className?: string }) => (
  <div
    className={cn("h-4 animate-pulse-soft rounded-[6px] bg-surface", className)}
  />
)

const WondersSkeleton = () => (
  <div aria-hidden="true" className="px-[21px] py-[19px]">
    <div className="mb-3.5 flex justify-between">
      <Bone className="w-[110px]" />
      <Bone className="w-[70px]" />
    </div>
    <Bone className="mb-4 h-[5px]" />
    <div className="grid grid-cols-7 gap-2.5">
      {Array.from({ length: 7 }, (_, i) => (
        <Bone key={i} className="aspect-square h-auto rounded-[10px]" />
      ))}
    </div>
  </div>
)

const MapSkeleton = () => (
  <div aria-hidden="true" className="px-[21px] py-[19px]">
    <div className="mb-3.5 flex justify-between">
      <Bone className="w-[200px]" />
    </div>
    <Bone className="aspect-[1010/666] h-auto rounded-[12px]" />
  </div>
)

export default StampieEmbed
