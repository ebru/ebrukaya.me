import Link from "next/link"

import { PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"

// Next.js marks this page noindex by itself.
export const metadata = pageMetadata({ title: "404: Not found", path: "/404/" })

export default function NotFound() {
  return (
    <>
      <PageTitle>lost in transit</PageTitle>
      <p>This page doesn&#39;t exist, or it moved somewhere else.</p>
      <p>
        <Link href="/" className="underline underline-offset-[3px]">
          Back to the home page
        </Link>
      </p>
    </>
  )
}
