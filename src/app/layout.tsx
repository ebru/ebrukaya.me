import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import Script from "next/script"

import "@fontsource/mulish/400.css"
import "@fontsource/mulish/400-italic.css"
import "@fontsource/mulish/600.css"
import "@fontsource/mulish/700.css"
import "@fontsource/mulish/800.css"
import "./globals.css"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { config } from "@/config"

const GA_ID = "G-78CL8N7RQ5"

// Sets the theme before the first paint so dark mode never flashes white.
// Uses the saved choice if there is one, otherwise follows the system setting.
const themeScript = `
(function () {
  var theme = 'light';
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
`

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: config.title,
  description: config.description,
  icons: { icon: { url: "/favicon.png", type: "image/png" } },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#16151f" },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-theme is set by the script before React loads, hence the warning opt-out
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="mx-auto my-[60px] max-w-[840px] px-[1.0875rem] pb-[1.45rem]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
