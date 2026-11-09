import fs from "fs"
import path from "path"
import { isValidElement, type ReactNode } from "react"

import { postIconArt } from "@/components/PostIcon"

// Helpers for the link-preview images (app/**/opengraph-image.tsx), which are
// drawn at build time with next/og.

export const OG_SIZE = { width: 1200, height: 630 }

export const OG_COLORS = {
  bg: "#fbfbfc",
  ink: "#1f1d2b",
  muted: "#6c697d",
  accent: "#5458d8",
  wash: "rgba(84, 88, 216, 0.22)",
  illInk: "#2a2838",
}

const font = (weight: number) =>
  fs.readFileSync(
    path.join(
      process.cwd(),
      `node_modules/@fontsource/mulish/files/mulish-latin-${weight}-normal.woff`
    )
  )

export const ogFonts = () => [
  {
    name: "Mulish",
    data: font(400),
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Mulish",
    data: font(800),
    weight: 800 as const,
    style: "normal" as const,
  },
]

// Turns the drawing's JSX into plain SVG markup, so it can be used as an image.
const attr = (key: string) =>
  key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)

const toMarkup = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean")
    return ""
  if (Array.isArray(node)) return node.map(toMarkup).join("")
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (!isValidElement(node)) return ""
  const { children, ...props } = node.props as Record<string, unknown> & {
    children?: ReactNode
  }
  if (typeof node.type === "function") {
    return toMarkup((node.type as (p: unknown) => ReactNode)(node.props))
  }
  if (typeof node.type !== "string") return toMarkup(children) // fragments
  const attrs = Object.entries(props)
    .map(([k, v]) => ` ${attr(k)}="${String(v).replace(/"/g, "&quot;")}"`)
    .join("")
  return `<${node.type}${attrs}>${toMarkup(children)}</${node.type}>`
}

// A post's drawing as an SVG data URL, with the same wash, wobble and second pass.
export const postIconDataUrl = (name: string) => {
  const art = postIconArt(name)
  const ink = toMarkup(art.ink)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 112 112" width="560" height="560" fill="none" stroke="${OG_COLORS.illInk}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
<defs>
<filter id="wash" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter>
<filter id="ink" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="1.8"/></filter>
</defs>
<g filter="url(#wash)">${toMarkup(art.wash).replace(/var\(--wash\)/g, OG_COLORS.wash)}</g>
<g filter="url(#ink)">${ink}<g opacity="0.45" transform="translate(0.7 0.5) rotate(0.6 48 48)">${ink}</g></g>
</svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}

export const portraitDataUrl = () =>
  `data:image/svg+xml;base64,${fs
    .readFileSync(path.join(process.cwd(), "public/images/portrait.svg"))
    .toString("base64")}`
