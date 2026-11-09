import { PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"
import Journey from "@/sections/Journey"

export const metadata = pageMetadata({
  title: "Journey",
  description: "My educational and professional experience so far.",
  path: "/journey/",
})

export default function JourneyPage() {
  return (
    <>
      <PageTitle>the journey</PageTitle>
      <Journey />
    </>
  )
}
