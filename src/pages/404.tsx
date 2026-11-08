import Link from "next/link"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import { PageTitle } from "@/components/ui"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <PageTitle>lost in transit</PageTitle>
    <p>This page doesn&#39;t exist, or it moved somewhere else.</p>
    <p>
      <Link
        href="/"
        style={{ textDecoration: "underline", textUnderlineOffset: 3 }}
      >
        Back to the home page
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
