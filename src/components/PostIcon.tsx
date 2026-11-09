import { useId, type ReactElement } from "react"

import { cn } from "@/lib/cn"

// Loose line drawings for posts, like quick pen sketches over a watercolour wash:
// - every line is drawn twice with a tiny offset, the way a pen goes over a line again
// - a soft, blurred wash of the accent colour sits a little off behind the drawing
// - a gentle displacement filter keeps the lines from looking machine-made
// A post picks one with `icon: <name>` in its front matter; unknown names get "pen".

// Irregular watercolour blob around (cx, cy).
const Wash = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => {
  const k = r / 20
  const d = `M${cx - 18 * k} ${cy - 4 * k}c${2 * k} ${-12 * k} ${18 * k} ${
    -18 * k
  } ${29 * k} ${-12 * k}c${10 * k} ${5 * k} ${13 * k} ${18 * k} ${6 * k} ${
    27 * k
  }c${-6 * k} ${8 * k} ${-20 * k} ${10 * k} ${-29 * k} ${4 * k}c${-6 * k} ${
    -4 * k
  } ${-8 * k} ${-12 * k} ${-6 * k} ${-19 * k}z`
  return <path d={d} fill="var(--wash)" stroke="none" />
}

const icons = {
  controller: {
    wash: <Wash cx={56} cy={50} r={22} />,
    ink: (
      <>
        <path d="M22 58c-3 11 7 14 12 6l5-7h18l6 7c5 7 15 4 12-6l-5-17c-2-8-8-10-14-9-7 1-13 1-20 0-6-1-12 2-14 10z" />
        <path d="M32 43v9M27.5 47.5h9" />
        <path d="M61 42.5a1.8 1.8 0 1 0 0.1 0M67.5 49a1.8 1.8 0 1 0 0.1 0" />
        <path d="M48 30c0-6 4-8 8-8s7-3 7-7" />
      </>
    ),
  },
  book: {
    wash: <Wash cx={42} cy={46} r={22} />,
    ink: (
      <>
        <path d="M48 68c-9-6-21-7-31-3l3-32c10-4 21-2 28 6" />
        <path d="M48 68c9-6 20-7 30-4l-2-32c-10-3-21-1-28 7v29" />
        <path d="M24 42c6-2 12-1 17 1M24 50c5-1 10-1 15 1M24 58c4-1 8 0 11 1M55 43c6-2 11-2 16 0M55 51c4-1 8-1 12 0" />
        <path d="M48 26c-2-4-8-3-7 2 1 3 7 6 7 6s6-3 7-6c1-5-5-6-7-2z" />
      </>
    ),
  },
  mountains: {
    wash: <Wash cx={66} cy={30} r={13} />,
    ink: (
      <>
        <path d="M8 70c9-12 17-23 26-36 6 9 12 17 18 24 4-5 8-10 12-14 8 9 14 17 23 26" />
        <path d="M27 44c3 2 5 0 7-2 2 2 5 3 7 1" />
        <path d="M60 62c6-6 12-9 18-8" />
        <path d="M72 25a7 7 0 1 0 0.1 0" />
        <path d="M22 26c2-2 3-2 4 0 1-2 2-2 4 0M36 18c1-1 2-1 3 0 1-1 2-1 3 0" />
        <path d="M6 75c26-2 54-2 84 0" />
      </>
    ),
  },
  dice: {
    wash: <Wash cx={58} cy={52} r={22} />,
    ink: (
      <>
        <path d="M22 44l14-8 15 8-14 8z" />
        <path d="M22 44v17l15 8V52M51 44v17l-14 8" />
        <path d="M36 44h.1M28 55h.1M31 60h.1M44 56h.1" strokeWidth="3.4" />
        <path d="M55 36l13-6 13 7-13 6z" />
        <path d="M55 36v15l13 7V43M81 37v15l-13 6" />
        <path d="M68 37h.1M61 46h.1M74 49h.1" strokeWidth="3.4" />
      </>
    ),
  },
  kite: {
    wash: <Wash cx={58} cy={32} r={18} />,
    ink: (
      <>
        <path d="M58 12c5 6 11 12 16 18-5 7-10 13-16 20-5-7-10-13-15-20 5-6 10-12 15-18z" />
        <path d="M58 13c0 12 1 25 0 37M44 30c10 1 20 1 30 0" />
        <path d="M58 50c-3 7-9 6-12 12-3 6-9 6-13 11-3 4-7 6-11 7" />
        <path d="M46 61l-4-3 1 5zM33 72l-4-2 1 5zM22 80l-4-1 2 4" />
        <path d="M12 30c1-4 6-5 8-2 1-4 8-5 10-1 3 0 5 2 4 4" />
      </>
    ),
  },
  clapper: {
    // a popcorn bucket
    wash: <Wash cx={50} cy={58} r={22} />,
    ink: (
      <>
        <path d="M27 42l7 38h28l7-38" />
        <path d="M25 42c15 1 31 1 46 0" />
        <path d="M38 43l3 37M48 43v37M58 43l-3 37" />
        <path d="M27 41c-3-6 2-11 7-9 0-6 8-8 11-3 3-5 11-4 12 2 5-2 11 2 9 8" />
        <path d="M36 31c1-3 4-4 6-2M52 30c2-2 5-1 6 1" />
      </>
    ),
  },
  map: {
    wash: <Wash cx={60} cy={30} r={16} />,
    ink: (
      <>
        <path d="M14 36l20-7 22 7 22-7-1 40-21 7-22-7-19 7z" />
        <path d="M34 30c1 13 0 25 0 38M56 37c-1 13 0 26 0 39" />
        <path d="M20 62c6-6 12 1 18-5s11 2 15-4" strokeDasharray="1.5 5" />
        <path d="M62 46c-5-6-9-11-8-17 1-5 5-8 10-7 5 1 7 6 5 11-2 5-4 9-7 13z" />
        <path d="M63.5 27a2.5 2.5 0 1 0 0.1 0" />
      </>
    ),
  },
  hourglass: {
    wash: <Wash cx={48} cy={64} r={16} />,
    ink: (
      <>
        <path d="M27 22c14-2 28-1 42-1M27 75c14 1 28 1 42 0" />
        <path d="M33 23c0 14 13 18 15 25 2 7-14 11-14 27M63 22c1 15-13 19-15 26-2 7 14 11 14 27" />
        <path d="M40 34c5 3 11 3 16 0" />
        <path d="M48 52v12" strokeDasharray="0.5 4" />
        <path d="M39 72c3-5 6-7 9-7s6 2 9 7" />
        <path d="M78 34l1-3 1 3 3 1-3 1-1 3-1-3-3-1zM16 56l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" />
      </>
    ),
  },
  sailboat: {
    wash: <Wash cx={66} cy={30} r={15} />,
    ink: (
      <>
        <path d="M70 22a8 8 0 1 0 4 14 7 7 0 1 1-4-14z" />
        <path d="M46 24c-1 13 0 26 0 37" />
        <path d="M48 27c6 10 11 20 16 31-5 1-11 0-16 0M44 33c-5 8-9 16-13 24 4 1 9 0 13 0" />
        <path d="M24 61c14 1 29 1 44 0-3 5-6 8-10 9-9 0-17 1-25 0-4-3-7-6-9-9z" />
        <path d="M8 78c6-4 10-4 15 0s10 4 15 0 10-4 15 0 10 4 15 0 9-3 14-1" />
      </>
    ),
  },
  suitcase: {
    // moving to germany: a packed suitcase, a paper plane already on its way
    wash: <Wash cx={46} cy={56} r={22} />,
    ink: (
      <>
        <path d="M20 42c0-4 3-7 7-7h38c4 0 7 3 7 7v26c0 4-3 7-7 7H27c-4 0-7-3-7-7z" />
        <path d="M38 35v-5c0-3 2-4 4-4h8c2 0 4 1 4 4v5" />
        <path d="M32 36c1 13 0 26 0 38M60 36c-1 13 0 26 0 38" />
        <path d="M46 49a6 6 0 1 0 0.1 0" />
        <path d="M29 79a2 2 0 1 0 0.1 0M63 79a2 2 0 1 0 0.1 0" />
        <path d="M70 12l18 3-13 10z" />
        <path d="M75 25l-1 6 4-4" />
        <path d="M50 26c6-2 12-6 18-11" strokeDasharray="1.5 5" />
      </>
    ),
  },
  hammock: {
    // taking a break from 9–5: a hammock between two trees
    wash: <Wash cx={48} cy={60} r={18} />,
    ink: (
      <>
        <path d="M18 82c1-16 1-32-1-48M78 82c-1-15 0-30 1-44" />
        <path d="M17 34c-6-3-11 0-12 5 4-2 8-2 12-1M17 34c1-6 7-9 12-7-4 1-8 3-10 6M17 34c6 0 10 3 11 8-3-3-7-4-11-4" />
        <path d="M79 38c5-4 11-2 12 2-4-1-8 0-11 2M79 38c-1-6-7-8-11-6 4 1 7 3 9 6M79 38c-5 1-8 5-8 9 2-3 5-5 8-5" />
        <path d="M19 47c10 20 46 22 59-5" />
        <path d="M24 50c11 13 38 14 49-4" />
        <path d="M30 54v6M48 58v7M66 52v6" strokeDasharray="0.5 3" />
        <path d="M8 84c26-2 54-2 80 0" />
        <path d="M48 18a5 5 0 1 0 0.1 0" />
      </>
    ),
  },
  sunrise: {
    // a new chapter of my life: the sun coming up over layered hills, birds heading out
    wash: <Wash cx={46} cy={54} r={20} />,
    ink: (
      <>
        <path d="M28 62c0-10 8-18 18-18s18 8 18 18" />
        <path d="M46 36v-8M32 42l-5-5M60 42l5-5M22 54h-7M70 54h7" />
        <path d="M6 64c14-5 26-6 40-3 14 3 28 1 44-4" />
        <path d="M10 76c12-6 24-7 36-4 12 2 22 1 34-5" />
        <path d="M18 86c18-4 40-4 62-1" />
        <path d="M64 24c2-2 4-2 5 0 1-2 3-2 5 0M76 32c1-1 3-1 4 0 1-1 2-1 3 0" />
      </>
    ),
  },
  laptop: {
    // my first year as a software engineer: a laptop with code, and coffee
    wash: <Wash cx={44} cy={46} r={22} />,
    ink: (
      <>
        <path d="M23 30h42c2 0 3 1 3 3v26H20V33c0-2 1-3 3-3z" />
        <path d="M12 59h64l-4 7H16z" />
        <path d="M36 40l-5 5 5 5M52 40l5 5-5 5M46 38l-4 14" />
        <path d="M78 50h11l-1 12c0 2-2 3-4 3h-1c-2 0-4-1-4-3z" />
        <path d="M88 53c4 0 4 5 0 5" />
        <path d="M81 45c-2-2 2-4 0-6M86 45c-2-2 2-4 0-6" />
      </>
    ),
  },
  pen: {
    // the fallback: a fountain pen leaving a loose line of ink
    wash: <Wash cx={50} cy={46} r={20} />,
    ink: (
      <>
        <path d="M58 22c4-4 10-4 13 0 4 3 4 9 0 13L46 60 36 50z" />
        <path d="M36 50l-9 19 19-9" />
        <path d="M31 65l7-7" />
        <path d="M37.5 56.5a1.5 1.5 0 1 0 0.1 0" />
        <path d="M54 28l12 12" />
        <path d="M12 82c7-5 13 3 20-1s12-6 18-1 12 3 18-1 10-3 14 0" />
      </>
    ),
  },
} satisfies Record<string, { wash: ReactElement; ink: ReactElement }>

type PostIconName = keyof typeof icons

const isIconName = (name: string): name is PostIconName => name in icons

// The drawing's parts on their own (also used for link-preview images).
export const postIconArt = (name: string) =>
  isIconName(name) ? icons[name] : icons.pen

type Props = {
  /** From the post's front matter; unknown names fall back to "pen". */
  name: string
  /** Sizing classes, e.g. "size-[72px]". */
  className?: string
  /** On a post's own page: tilted, like the hovered state in the list, with its colour wash showing. */
  standalone?: boolean
}

const PostIcon = ({ name, className, standalone = false }: Props) => {
  const id = useId().replace(/:/g, "")
  const icon = postIconArt(name)

  return (
    <span
      className={cn(
        "inline-flex size-[72px] shrink-0 text-ill-ink",
        standalone && "-rotate-6",
        className
      )}
    >
      <svg
        viewBox="0 0 96 96"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full overflow-visible"
      >
        <defs>
          <filter
            id={`wash-${id}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
          <filter id={`ink-${id}`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap in="SourceGraphic" scale="1.8" />
          </filter>
        </defs>
        {/* the colour wash shows only while its post is hovered or focused in a list */}
        <g
          filter={`url(#wash-${id})`}
          className={cn(
            "transition-opacity duration-300 ease-[ease]",
            standalone
              ? "opacity-100"
              : "opacity-0 group-hover/post:opacity-100 group-focus-within/post:opacity-100"
          )}
        >
          {icon.wash}
        </g>
        <g filter={`url(#ink-${id})`}>
          {icon.ink}
          {/* second, lighter pass a hair off: the pen going over the line again */}
          <g opacity="0.45" transform="translate(0.7 0.5) rotate(0.6 48 48)">
            {icon.ink}
          </g>
        </g>
      </svg>
    </span>
  )
}

export default PostIcon
