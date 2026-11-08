import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import Personal from "@/sections/Personal"
import { pages } from "@/config"
import { PageTitle } from "@/components/ui"

const PersonalPage = () => {
  return (
    <Layout pageKey={pages.personal}>
      <Seo
        title="Personal"
        description="Some personal facts that you can get to know me."
      />
      <PageTitle>personal</PageTitle>
      <Personal />
    </Layout>
  )
}

export default PersonalPage
