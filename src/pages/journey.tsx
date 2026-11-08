import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import Journey from "@/sections/Journey"
import { pages } from "@/config"
import { PageTitle } from "@/components/ui"

const JourneyPage = () => {
  return (
    <Layout pageKey={pages.journey}>
      <Seo
        title="Journey"
        description="My educational and professional experience so far."
      />
      <PageTitle>the journey</PageTitle>
      <Journey />
    </Layout>
  )
}

export default JourneyPage
