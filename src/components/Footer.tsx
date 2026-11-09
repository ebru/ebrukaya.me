"use client"

import { useEffect, useState } from "react"

import InlineIcon from "@/components/InlineIcon"

const formatBerlinTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date())

// The address is put together only when someone clicks, so it never sits in
// the page's HTML for spam bots to collect.
const emailAddress = () => atob("ZWJydUBlYnJ1a2F5YS5tZQ==")

const Footer = () => {
  // Rendered only in the browser so the static build never bakes in a stale time.
  const [berlinTime, setBerlinTime] = useState<string | null>(null)

  useEffect(() => {
    setBerlinTime(formatBerlinTime())
    const timer = setInterval(
      () => setBerlinTime(formatBerlinTime()),
      30 * 1000
    )
    return () => clearInterval(timer)
  }, [])

  // "Say hi": copies the address and shows it as a mail link.
  const [email, setEmail] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const revealEmail = async () => {
    const address = emailAddress()
    setEmail(address)
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // clipboard not available: the address is still shown as a link
    }
  }

  return (
    <footer className="mt-14 flex justify-between gap-[5px] border-t border-line pt-[22px] text-ink-soft">
      <div className="text-left text-[15px]">
        Currently in
        <br />
        <InlineIcon name="germany" /> Berlin, Germany
        {berlinTime && (
          <span
            title="Local time in Berlin"
            className="ml-1.5 text-[15px] text-muted tabular-nums"
          >
            · {berlinTime}
          </span>
        )}
      </div>
      <div className="text-right text-[15px]">
        © {new Date().getFullYear() + " "}
        Ebru Kaya
        <br />
        {email ? (
          <span className="inline-flex items-baseline gap-2">
            <a
              href={`mailto:${email}`}
              className="underline decoration-accent underline-offset-4 hover:text-accent"
            >
              {email}
            </a>
            <span aria-live="polite" className="text-[13px] text-muted">
              {copied ? "copied" : ""}
            </span>
          </span>
        ) : (
          // Looks like a text link; the envelope tilts as if being sent.
          <button
            type="button"
            onClick={revealEmail}
            className="group/hi cursor-pointer border-0 bg-transparent p-0 text-inherit underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-200 ease-[ease] hover:decoration-accent focus-visible:decoration-accent"
          >
            Say hi{" "}
            <InlineIcon
              name="envelope"
              className="[transition:translate_0.3s_ease,rotate_0.3s_ease,color_0.2s_ease] group-hover/hi:translate-x-0.5 group-hover/hi:-translate-y-0.5 group-hover/hi:-rotate-12 group-hover/hi:text-accent group-focus-visible/hi:translate-x-0.5 group-focus-visible/hi:-translate-y-0.5 group-focus-visible/hi:-rotate-12 group-focus-visible/hi:text-accent"
            />
          </button>
        )}
      </div>
    </footer>
  )
}

export default Footer
