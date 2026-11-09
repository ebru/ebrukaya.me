import { ImageResponse } from "next/og"

import { OG_COLORS, OG_SIZE, ogFonts, portraitDataUrl } from "@/lib/og"

// The link-preview image for every page that has no image of its own.
export const dynamic = "force-static"
export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Ebru Kaya"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 110px 0 100px",
        background: OG_COLORS.bg,
        fontFamily: "Mulish",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            color: OG_COLORS.ink,
          }}
        >
          Hi, I&apos;m Ebru.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 34,
            lineHeight: 1.4,
            color: "#3a3848",
          }}
        >
          <span>Sr. Software Engineer, co-building Stampie</span>
          <span>Founder at Noe Crafts</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 20 }}>
          <span style={{ fontWeight: 800, color: OG_COLORS.ink }}>
            ebrukaya
          </span>
          <span style={{ fontWeight: 800, color: OG_COLORS.accent }}>.</span>
          <span style={{ fontWeight: 800, color: OG_COLORS.ink }}>me</span>
        </div>
      </div>
      <img
        src={portraitDataUrl()}
        width={360}
        height={454}
        style={{ transform: "rotate(2deg)" }}
      />
    </div>,
    { ...size, fonts: ogFonts() }
  )
}
