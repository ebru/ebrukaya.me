import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Plain static site: `next build` writes everything to /out, ready for Netlify.
  output: "export",
  // URLs end with a slash (/journey/, /the-time/, ...).
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
