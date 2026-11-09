"use client"

import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
} from "react"

import InlineIcon, { type IconName } from "@/components/InlineIcon"
import { cn } from "@/lib/cn"

type Postcard = {
  place: string
  country: string
  flag: IconName
  year: string
  note: string
  /** resting angle in degrees */
  tilt: number
  /** centre x, centre y and radius of the colour wash behind the drawing */
  washAt: [number, number, number]
  drawing: ReactElement
}

// A small rack of hand-drawn postcards from places on the journey, in the same
// loose line style as the blog drawings. Hover straightens a card and brings in
// its colour; click (or tap, Enter, Space) flips it over to read the back.

// Berlin first, as it's home; the rest oldest first.
// `tilt` is the resting angle in degrees.
const postcards: Postcard[] = [
  {
    place: "Berlin",
    country: "Germany",
    flag: "germany",
    year: "2015",
    note: "First visit in 2015. Said in a random chat I'd live here one day, forgot about it, then moved here in 2022. Still home.",
    tilt: 3,
    washAt: [60, 38, 16],
    drawing: (
      <>
        <path d="M60 10v20" />
        <path d="M54 38a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
        <path d="M58 44l-2 22M62 44l2 22" />
        <path d="M60 30v2M57 34c2-1 4-1 6 0" />
        <path d="M14 66V54h14v12M28 66V48h12v18M80 66V50h12v16M92 66V56h14v10" />
        <path d="M18 58h6M32 52h4M84 54h4" />
        <path d="M8 66h104" />
      </>
    ),
  },
  {
    place: "Tallinn",
    country: "Estonia",
    flag: "estonia",
    year: "2015",
    note: "Exchange semester. Cold winters, warm friends, the most fun times.",
    tilt: -3,
    washAt: [52, 36, 20],
    drawing: (
      <>
        <path d="M14 66V44l6-12 6 12v22" />
        <path d="M26 66V50h10v16M36 66V40l8-20 8 20v26" />
        <path d="M52 66V48h12v18M64 66V38l6-14 6 14v28" />
        <path d="M76 66V50h14v16M90 66V46l5-10 5 10v20" />
        <path d="M44 20v-6M70 24v-5M20 32v-4" />
        <path d="M40 48h8M68 46h4M40 56h8" />
        <path d="M8 66h104" />
      </>
    ),
  },
  {
    place: "Sri Lanka",
    country: "Sri Lanka",
    flag: "srilanka",
    year: "2017",
    note: "A month and a half volunteering and travelling around the island. A once-in-a-lifetime experience.",
    tilt: 2,
    washAt: [60, 44, 20],
    drawing: (
      <>
        {/* a train crossing an arched bridge in the hills */}
        <path d="M6 44c10-1 20-1 30 0s20 1 30 0 22-1 34 0 10 0 14 0" />
        <path d="M6 50h108" />
        <path d="M12 68V58c0-4 3-7 7-7s7 3 7 7v10M30 68V58c0-4 3-7 7-7s7 3 7 7v10M48 68V58c0-4 3-7 7-7s7 3 7 7v10M66 68V58c0-4 3-7 7-7s7 3 7 7v10M84 68V58c0-4 3-7 7-7s7 3 7 7v10" />
        <path d="M30 44V34c0-2 2-4 4-4h34c4 0 8 4 9 8l2 6" />
        <path d="M38 36h6M52 36h6" />
        <path d="M84 26c4-6 8-8 12-8M96 18c-2 6-2 12-1 18M96 18c4 1 8 4 10 8M96 18c-4-2-9-1-12 2" />
      </>
    ),
  },
  {
    place: "Reykjavík",
    country: "Iceland",
    flag: "iceland",
    year: "2018",
    note: "The best road trip ever. Waterfalls everywhere, and the sun barely set.",
    tilt: -4,
    washAt: [60, 34, 18],
    drawing: (
      <>
        {/* Hallgrímskirkja: a stepped tower with wings on both sides */}
        <path d="M54 66V22l6-12 6 12v44" />
        <path d="M54 66V30h-6v36M48 66V38h-6v28M42 66V46h-6v20" />
        <path d="M66 66V30h6v36M72 66V38h6v28M78 66V46h6v20" />
        <path d="M58 30h4M58 38h4" />
        <path d="M58 66v-8c0-2 4-2 4 0v8" />
        <path d="M14 66h20M86 66h20M8 70c20 2 40-1 60 0s30 1 44-1" />
      </>
    ),
  },
  {
    place: "Machu Picchu",
    country: "Peru",
    flag: "peru",
    year: "2023",
    note: "Finally saw one of the seven wonders I'd dreamed about.",
    tilt: 3,
    washAt: [64, 30, 18],
    drawing: (
      <>
        <path d="M10 66c10-6 18-18 26-30 4 6 6 10 10 12 6-14 12-26 18-34 6 8 10 20 14 30 4-4 8-6 12-4 8 6 14 16 20 26" />
        <path d="M60 30c2 2 6 2 8 0M57 38c4 2 10 2 14 0" />
        <path d="M20 66h80M28 60h22M34 54h12" />
        <path d="M78 40h.1M82 46h.1M74 50h.1" strokeWidth="2.6" />
      </>
    ),
  },
]

type CardProps = {
  card: Postcard
  flipped: boolean
  onToggle: () => void
}

const Card = ({ card, flipped, onToggle }: CardProps) => {
  const id = useId().replace(/:/g, "")
  const [wx, wy, wr] = card.washAt

  return (
    // The hover area (the li) stays still while the card inside moves, so the
    // card never slips out from under the mouse.
    <li
      style={{ "--tilt": `${card.tilt}deg` } as CSSProperties}
      className="group/card @container m-0 perspective-[900px] max-[860px]:shrink-0 max-[860px]:grow-0 max-[860px]:basis-[clamp(150px,42%,210px)] max-[860px]:snap-start"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={flipped}
        aria-label={`Postcard from ${card.place}, ${card.year}. ${card.note}`}
        className={cn(
          "relative block aspect-[4/3] w-full cursor-pointer rounded-[6px] border-0 bg-transparent p-0 text-left text-inherit transform-3d will-change-transform focus-visible:outline-offset-2",
          "[transform:rotate(var(--tilt))] [transition:transform_0.55s_cubic-bezier(0.25,0.8,0.25,1)] motion-reduce:[transition:none]",
          flipped
            ? "z-2 [transform:translateY(-4px)_scale(1.12)_rotateY(180deg)] max-[860px]:[transform:rotateY(180deg)]"
            : "group-hover/card:[transform:translateY(-4px)] max-[860px]:group-hover/card:[transform:none]"
        )}
      >
        <div className={cn(face, flipped && faceLifted)} aria-hidden="true">
          <svg
            viewBox="0 0 120 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="min-h-0 w-full flex-1 overflow-hidden px-2.5 pt-2.5"
          >
            <defs>
              <filter
                id={`pc-wash-${id}`}
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <filter
                id={`pc-ink-${id}`}
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04"
                  numOctaves="2"
                  seed="5"
                />
                <feDisplacementMap in="SourceGraphic" scale="2.4" />
              </filter>
            </defs>
            {/* the colour wash comes in on hover or keyboard focus */}
            <circle
              cx={wx}
              cy={wy}
              r={wr}
              fill="var(--wash)"
              stroke="none"
              filter={`url(#pc-wash-${id})`}
              className="opacity-0 transition-opacity duration-[350ms] ease-[ease] group-hover/card:opacity-100 group-has-[button:focus-visible]/card:opacity-100"
            />
            <g filter={`url(#pc-ink-${id})`}>
              {card.drawing}
              <g opacity="0.5" transform="translate(0.9 0.6) rotate(0.8 60 40)">
                {card.drawing}
              </g>
            </g>
          </svg>
          {/* text and spacing follow the card's own width (cqw = 1% of it) */}
          <div className="flex flex-col px-[7.5cqw] pb-[6cqw] leading-[1.25]">
            <strong className="text-[clamp(13px,8.6cqw,17px)] font-bold text-ink-soft">
              {card.place}
            </strong>
            <span className="text-[clamp(11.5px,7.4cqw,14px)] text-muted tabular-nums">
              {card.country !== card.place && `${card.country}, `}
              {card.year}
            </span>
          </div>
        </div>

        {/* The back can grow taller than the card for longer notes; it hangs
            down over the space below, so nothing else on the page moves. */}
        <div
          className={cn(
            face,
            flipped && faceLifted,
            "inset-[0_0_auto] block min-h-full [transform:rotateY(180deg)] px-[7.5cqw] py-[7cqw]"
          )}
          aria-hidden="true"
        >
          {/* the country's flag in the top right corner; the note wraps around it */}
          <span className="float-right mt-[-1cqw] mr-[-1cqw] mb-[1cqw] ml-[3cqw] text-[15cqw] leading-0">
            <InlineIcon name={card.flag} className="size-[1.3em] align-[0]" />
          </span>
          <p className="m-0 text-[clamp(11.5px,7.6cqw,15px)] leading-[1.36] text-ink-soft italic">
            {card.note}
          </p>
        </div>
      </button>
    </li>
  )
}

// One side of a card. While the card is hovered or turned over, both sides lift
// onto a lighter card with a soft shadow.
const face =
  "absolute inset-0 flex flex-col overflow-hidden rounded-[6px] border border-transparent bg-card text-ill-ink shadow-[0_0_0_rgba(20,18,40,0)] backface-hidden [transition:box-shadow_0.4s_ease,background-color_0.4s_ease] group-hover/card:bg-card-lifted group-hover/card:shadow-[0_10px_24px_-14px_rgba(20,18,40,0.35)]"
const faceLifted =
  "bg-card-lifted shadow-[0_10px_24px_-14px_rgba(20,18,40,0.35)]"

// Only one card is turned over at a time. Opening another one closes the
// previous card; clicking outside the rack or pressing Escape closes it too.
const Postcards = () => {
  const [open, setOpen] = useState<string | null>(null)
  const rackRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (open === null) return undefined
    const onPointerDown = (event: PointerEvent) => {
      if (rackRef.current && !rackRef.current.contains(event.target as Node))
        setOpen(null)
    }
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(null)
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <section aria-labelledby="postcards-intro" className="mt-16">
      <p id="postcards-intro" className="mb-[22px] text-muted">
        A few postcards from places I’ve been.
      </p>
      {/* smaller screens: one row of cards you can swipe through */}
      <ul
        ref={rackRef}
        className="m-0 grid list-none grid-cols-5 gap-[18px] max-[860px]:-mx-3 max-[860px]:-mt-3.5 max-[860px]:mb-0 max-[860px]:flex max-[860px]:snap-x max-[860px]:snap-mandatory max-[860px]:gap-4 max-[860px]:overflow-x-auto max-[860px]:overscroll-x-contain max-[860px]:scroll-px-3 max-[860px]:px-3 max-[860px]:pt-3.5 max-[860px]:pb-5 max-[860px]:[scrollbar-width:none] max-[860px]:[&::-webkit-scrollbar]:hidden"
      >
        {postcards.map((card) => (
          <Card
            key={card.place}
            card={card}
            flipped={open === card.place}
            onToggle={() =>
              setOpen((current) => (current === card.place ? null : card.place))
            }
          />
        ))}
      </ul>
      {/* a quiet link under the cards to the full passport on Stampie */}
      <a
        href="https://stampie.app/@ebru"
        target="_blank"
        rel="noopener noreferrer"
        className="group/more mt-[22px] mr-0 mb-0 ml-auto block w-fit text-muted underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] hover:text-ink hover:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
      >
        my passport{" "}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-[ease] group-hover/more:translate-x-[3px]"
        >
          →
        </span>
      </a>
    </section>
  )
}

export default Postcards
