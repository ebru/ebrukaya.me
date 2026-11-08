import type { AppProps } from "next/app"
import Script from "next/script"

import "@fontsource/mulish/400.css"
import "@fontsource/mulish/400-italic.css"
import "@fontsource/mulish/600.css"
import "@fontsource/mulish/700.css"
import "@fontsource/mulish/800.css"
import "@/styles/globals.css"

const GA_ID = "G-78CL8N7RQ5"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  )
}
