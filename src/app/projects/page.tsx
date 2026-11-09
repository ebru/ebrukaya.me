import { PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"
import Projects from "@/sections/Projects"

export const metadata = pageMetadata({
  title: "Side Projects",
  description: "Side projects that I completed/am currently working on.",
  path: "/projects/",
})

export default function ProjectsPage() {
  return (
    <>
      <PageTitle>side projects</PageTitle>
      <Projects />
    </>
  )
}
