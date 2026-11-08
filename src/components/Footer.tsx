import { useEffect, useState } from "react"

import {
  FooterBar,
  FooterLeftDiv,
  FooterDiv,
  LocalTime,
  SayHiButton,
  Revealed,
} from "@/components/Footer.styles"

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
    <FooterBar>
      <FooterLeftDiv>
        Currently in
        <br />
        <InlineIcon name="germany" /> Berlin, Germany
        {berlinTime && (
          <LocalTime title="Local time in Berlin">· {berlinTime}</LocalTime>
        )}
      </FooterLeftDiv>
      <FooterDiv>
        © {new Date().getFullYear() + " "}
        Ebru Kaya
        <br />
        {email ? (
          <Revealed>
            <a href={`mailto:${email}`}>{email}</a>
            <span aria-live="polite">{copied ? "copied" : ""}</span>
          </Revealed>
        ) : (
          <SayHiButton type="button" onClick={revealEmail}>
            Say hi <InlineIcon name="envelope" />
          </SayHiButton>
        )}
      </FooterDiv>
    </FooterBar>
  )
}

export default Footer
