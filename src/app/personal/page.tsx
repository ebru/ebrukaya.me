import { PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"
import Personal from "@/sections/Personal"

export const metadata = pageMetadata({
  title: "Personal",
  description: "Some personal facts that you can get to know me.",
  path: "/personal/",
})

export default function PersonalPage() {
  return (
    <>
      <PageTitle>personal</PageTitle>
      <Personal />
    </>
  )
}
