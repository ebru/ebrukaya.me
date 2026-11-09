import type { ReactNode } from "react"

import ExternalLink from "@/components/ExternalLink"
import type { IconName } from "@/components/InlineIcon"

// What I'm up to these days (a /now page, see nownownow.com). The big picture
// (work, projects, where I live) is on the journey page; this is only what
// changes. To update: edit the list and change the date.

type NowItem = { icon: IconName; text: ReactNode }

export const updated = "November 9th, 2026"

export const items: NowItem[] = [
  {
    icon: "broom",
    text: "Cleaning up years of ADHD-like side projects and the ones that no longer pay off. Going minimal, with deeper focus.",
  },
  {
    icon: "envelope",
    text: "Writing again, bringing my old posts home. Missing the 2010s social era.",
  },
  {
    icon: "home",
    text: "Refactored my personal website with new tech and UI. Already liking it.",
  },
  {
    icon: "book",
    text: (
      <>
        Reading{" "}
        <ExternalLink targetUrl="https://www.goodreads.com/book/show/228818791-careless-people">
          Careless People: A Story of Where I Used to Work
        </ExternalLink>
        .
      </>
    ),
  },
  {
    icon: "tv",
    text: (
      <>
        Watching{" "}
        <ExternalLink targetUrl="https://www.imdb.com/title/tt1844624/">
          American Horror Story
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink targetUrl="https://www.imdb.com/title/tt14586350/">
          Love &amp; Death
        </ExternalLink>
        .
      </>
    ),
  },
]
