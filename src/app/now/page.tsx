import Link from "next/link"

import InlineIcon from "@/components/InlineIcon"
import { Item, ItemList, PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"

import { items, updated } from "./updates"

// What I'm up to these days (see nownownow.com). The content lives in updates.tsx.

export const metadata = pageMetadata({
  title: "Now",
  description: "What I'm up to these days.",
  path: "/now/",
})

export default function NowPage() {
  return (
    <>
      <PageTitle>now</PageTitle>
      <p className="-mt-5 mb-10 text-muted">
        What I&#39;m up to these days. Updated {updated}.
      </p>

      <ItemList>
        {items.map((item, i) => (
          <Item key={i}>
            <InlineIcon name={item.icon} /> {item.text}
          </Item>
        ))}
      </ItemList>

      <p className="text-muted">
        For the bigger picture, see{" "}
        <Link
          href="/journey/"
          className="underline decoration-accent underline-offset-[3px]"
        >
          the journey
        </Link>
        .
      </p>
    </>
  )
}
