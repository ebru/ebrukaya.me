import { ImageResponse } from "next/og"

import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { OG_COLORS, OG_SIZE, ogFonts, postIconDataUrl } from "@/lib/og"

// The link-preview image for a post: its drawing, its title and the site name.
export const dynamic = "force-static"
export const size = OG_SIZE
export const contentType = "image/png"
export const alt = "Post preview"

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getPostBySlug((await params).slug)

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: "0 90px 0 60px",
        background: OG_COLORS.bg,
        fontFamily: "Mulish",
      }}
    >
      <img
        src={postIconDataUrl(post.icon)}
        width={380}
        height={380}
        style={{ transform: "rotate(-6deg)", flexShrink: 0 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          width: 620,
        }}
      >
        <div
          style={{
            fontSize: post.title.length > 40 ? 58 : 72,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: OG_COLORS.ink,
          }}
        >
          {post.title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: OG_COLORS.muted }}>
          <span style={{ fontWeight: 800, color: OG_COLORS.ink }}>
            ebrukaya
          </span>
          <span style={{ fontWeight: 800, color: OG_COLORS.accent }}>.</span>
          <span style={{ marginLeft: 18 }}>{post.readingMinutes} min read</span>
        </div>
      </div>
    </div>,
    { ...size, fonts: ogFonts() }
  )
}
