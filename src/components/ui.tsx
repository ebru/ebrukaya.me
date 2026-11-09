import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/cn"

export const PageTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="mb-9 text-[clamp(2.2rem,6vw,2.9rem)] font-extrabold tracking-[-0.045em]">
    {children}
  </h1>
)

// "Present" / "Past" label above a list; past ones are grey.
export const SubTitle = ({
  children,
  past = false,
}: {
  children: ReactNode
  past?: boolean
}) => (
  <span
    className={cn(
      "mb-3.5 inline-block rounded-full bg-surface px-3 py-0.5 text-[15px] font-extrabold",
      past ? "text-ink-soft" : "text-accent"
    )}
  >
    {children}
  </span>
)

// Present / past lists read as a timeline: a hairline with a marker per entry.
// An entry that starts with an icon uses that icon as its marker; others get a
// dot, filled for the first entry. In past lists the dots are grey.
export const ItemList = ({
  children,
  past = false,
}: {
  children: ReactNode
  past?: boolean
}) => (
  <ul
    className={cn(
      "relative mt-[5px] mr-0 mb-[2.2rem] ml-3.5 list-none border-l-2 border-line pl-[30px]",
      // every entry
      "[&>li]:relative [&>li]:mb-[1rem]",
      // the dot
      "[&>li]:before:absolute [&>li]:before:top-[0.62em] [&>li]:before:left-[-35px] [&>li]:before:size-2 [&>li]:before:rounded-full [&>li]:before:border-2 [&>li]:before:border-accent [&>li]:before:bg-bg [&>li]:before:content-['']",
      "[&>li:first-child]:before:bg-accent",
      // an icon replaces the dot
      "[&>li:has(>svg:first-child)]:before:hidden",
      "[&>li>svg:first-child]:absolute [&>li>svg:first-child]:top-px [&>li>svg:first-child]:left-[-46px] [&>li>svg:first-child]:flex [&>li>svg:first-child]:size-[30px] [&>li>svg:first-child]:items-center [&>li>svg:first-child]:justify-center [&>li>svg:first-child]:rounded-full [&>li>svg:first-child]:bg-bg [&>li>svg:first-child]:p-1 [&>li>svg:first-child]:text-ink-soft",
      past && "[&>li]:before:border-muted [&>li:first-child]:before:bg-bg"
    )}
  >
    {children}
  </ul>
)

export const PersonalList = ({ children }: { children: ReactNode }) => (
  <ul className="ml-0 list-none pl-0 leading-normal [&>li]:m-0 [&>li]:border-b [&>li]:border-line [&>li]:py-3.5">
    {children}
  </ul>
)

export const Item = (props: ComponentProps<"li">) => <li {...props} />

// A date or period after an entry, e.g. "(2020)".
export const When = ({ children }: { children: ReactNode }) => (
  <em className="text-[15px] whitespace-nowrap text-muted not-italic tabular-nums">
    {children}
  </em>
)

export const BoldText = ({ children }: { children: ReactNode }) => (
  <span className="font-bold">{children}</span>
)

export const ItalicText = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <span className={cn("italic", className)}>{children}</span>

export const Quote = ({ children }: { children: ReactNode }) => (
  <blockquote className="mx-0 mt-0 mb-[2rem] border-l-[3px] border-accent pl-[1.2rem] text-[21px] leading-[1.55] text-ink-soft italic max-[768px]:text-[18px]">
    {children}
  </blockquote>
)
