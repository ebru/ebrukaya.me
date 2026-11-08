import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import Projects from "@/sections/Projects"
import { pages } from "@/config"
import { PageTitle } from "@/components/ui"

const ProjectsPage = () => {
  return (
    <Layout pageKey={pages.projects}>
      <Seo
        title="Side Projects"
        description="Side projects that I completed/am currently working on."
      />
      <PageTitle>side projects</PageTitle>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
