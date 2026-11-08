import Head from "next/head"
import { useRouter } from "next/router"

import { config } from "@/config"

const Seo = ({ description, title, noIndex = false }) => {
  const { asPath } = useRouter()
  const metaDescription = description || config.description
  const metaTitle = title ? `${title} – ${config.shortTitle}` : config.title
  const url = `${config.siteUrl}${asPath.split(/[?#]/)[0]}`

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  )
}

export default Seo
