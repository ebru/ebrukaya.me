/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static site: `next build` writes everything to /out, ready for Netlify.
  output: "export",
  // URLs end with a slash (/journey/, /the-time/, ...).
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: { styledComponents: true },
  reactStrictMode: true,
}

export default nextConfig
