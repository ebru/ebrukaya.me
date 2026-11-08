import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
} from "react"
import styled from "styled-components"

import InlineIcon, { type IconName } from "@/components/InlineIcon"

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

// Oldest first. `tilt` is the resting angle in degrees.
const postcards: Postcard[] = [
  {
    place: "Tallinn",
    country: "Estonia",
    flag: "estonia",
    year: "2015",
    note: "Exchange semester. Cold winters, warm friends, the most fun times.",
    tilt: 3,
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
    place: "Berlin",
    country: "Germany",
    flag: "germany",
    year: "2015",
    note: "First visit in 2015. Said in a random chat I'd live here one day, forgot about it, then moved here in 2022. Still home.",
    tilt: -3,
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
    place: "Sri Lanka",
    country: "Sri Lanka",
    flag: "srilanka",
    year: "2017",
    note: "Two months volunteering and travelling around the island. A once-in-a-lifetime experience.",
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
    <Item style={{ "--tilt": `${card.tilt}deg` } as CSSProperties}>
      <Flip
        type="button"
        className={flipped ? "flipped" : undefined}
        onClick={onToggle}
        aria-pressed={flipped}
        aria-label={`Postcard from ${card.place}, ${card.year}. ${card.note}`}
      >
        <Face className="front" aria-hidden="true">
          <svg
            viewBox="0 0 120 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
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
            <circle
              className="wash"
              cx={wx}
              cy={wy}
              r={wr}
              fill="var(--wash)"
              stroke="none"
              filter={`url(#pc-wash-${id})`}
            />
            <g filter={`url(#pc-ink-${id})`}>
              {card.drawing}
              <g opacity="0.5" transform="translate(0.9 0.6) rotate(0.8 60 40)">
                {card.drawing}
              </g>
            </g>
          </svg>
          <Caption>
            <strong>{card.place}</strong>
            <span>
              {card.country !== card.place && `${card.country}, `}
              {card.year}
            </span>
          </Caption>
        </Face>

        <Face className="back" aria-hidden="true">
          <Flag>
            <InlineIcon name={card.flag} />
          </Flag>
          <Note>{card.note}</Note>
        </Face>
      </Flip>
    </Item>
  )
}

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
    <Section aria-labelledby="postcards-intro">
      <Intro id="postcards-intro">A few postcards from places I’ve been.</Intro>
      <Rack ref={rackRef}>
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
      </Rack>
      <More
        href="https://stampie.app/@ebru"
        target="_blank"
        rel="noopener noreferrer"
      >
        my passport <span aria-hidden="true">→</span>
      </More>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 64px;
`

const Intro = styled.p`
  margin-bottom: 22px;
  color: var(--muted);
`

// A quiet link under the cards to the full passport on Stampie.
const More = styled.a`
  display: block;
  width: fit-content;
  margin: 22px 0 0 auto;
  color: var(--muted);
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: text-decoration-color 0.2s ease, color 0.2s ease;

  span {
    display: inline-block;
    transition: transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: var(--ink);
    text-decoration-color: var(--accent);
  }

  &:hover span {
    transform: translateX(3px);
  }
`

const Rack = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;

  /* smaller screens: one row of cards you can swipe through */
  @media (max-width: 860px) {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 12px;
    padding: 14px 12px 20px;
    margin: -14px -12px 0;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > li {
      flex: 0 0 clamp(150px, 42%, 210px);
      scroll-snap-align: start;
    }
  }
`

// The hover area stays still while the card inside moves, so the card never
// slips out from under the mouse.
const Item = styled.li`
  margin: 0;
  perspective: 900px;
  container-type: inline-size;
`

const Flip = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  text-align: left;
  color: inherit;
  cursor: pointer;
  border-radius: 6px;
  transform: rotate(var(--tilt));
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform;

  li:hover > & {
    transform: rotate(0deg) translateY(-4px);
  }

  &.flipped,
  li:hover > &.flipped {
    z-index: 2;
    transform: rotate(0deg) translateY(-4px) scale(1.12) rotateY(180deg);
  }

  @media (max-width: 860px) {
    li:hover > & {
      transform: rotate(0deg);
    }

    &.flipped,
    li:hover > &.flipped {
      transform: rotate(0deg) rotateY(180deg);
    }
  }

  .wash {
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  li:hover > & > div,
  &.flipped > div {
    background: var(--card-lifted);
    box-shadow: 0 10px 24px -14px rgba(20, 18, 40, 0.35);
  }

  li:hover > & .wash,
  &:focus-visible .wash {
    opacity: 1;
  }

  &:focus-visible {
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Face = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: var(--card);
  border: 1px solid var(--card-edge);
  box-shadow: 0 0 0 rgba(20, 18, 40, 0);
  transition: box-shadow 0.4s ease, background-color 0.4s ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  color: var(--ill-ink);
  overflow: hidden;

  svg {
    flex: 1;
    width: 100%;
    min-height: 0;
    padding: 10px 10px 0;
  }

  /* text and spacing follow the card's own width (cqw = 1% of it) */
  /* the back can grow taller than the card for longer notes; it hangs down over
     the space below, so nothing else on the page moves */
  &.back {
    transform: rotateY(180deg);
    display: block;
    inset: 0 0 auto;
    min-height: 100%;
    padding: 7cqw 7.5cqw 7cqw;
  }
`

const Caption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7.5cqw 6cqw;
  line-height: 1.25;

  strong {
    font-size: clamp(13px, 8.6cqw, 17px);
    font-weight: 700;
    color: var(--ink-soft);
  }

  span {
    font-size: clamp(11.5px, 7.4cqw, 14px);
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
`

// The country's flag in the top right corner of the back; the note wraps around it.
const Flag = styled.span`
  float: right;
  margin: -1cqw -1cqw 1cqw 3cqw;
  font-size: 15cqw;
  line-height: 0;

  svg {
    width: 1.3em !important;
    height: 1.3em;
    padding: 0 !important;
    vertical-align: 0;
  }
`

const Note = styled.p`
  margin: 0;
  font-size: clamp(11.5px, 7.6cqw, 15px);
  line-height: 1.36;
  font-style: italic;
  color: var(--ink-soft);
`

export default Postcards
