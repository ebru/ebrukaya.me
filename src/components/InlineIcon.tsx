import { useId, type ReactElement } from "react"
import { cn } from "@/lib/cn"

// Small line icons that sit inside a line of text, drawn in the same sketchy
// style as the post drawings and postcards (a slight wobble and a second,
// lighter pass of the pen), in the ink colour of the text.

const icons = {
  // a perforated postage stamp with a little globe, like Stampie's icon
  // Stampie: a stamp with a softly waved edge and a simple globe, after its logo
  stamp: (
    <g transform="rotate(8 12 12)">
      <path d="M5.00 3.50L5.39 3.23L5.78 3.02L6.17 2.95L6.56 3.02L6.94 3.23L7.33 3.50L7.72 3.77L8.11 3.98L8.50 4.05L8.89 3.98L9.28 3.77L9.67 3.50L10.06 3.23L10.44 3.02L10.83 2.95L11.22 3.02L11.61 3.22L12.00 3.50L12.39 3.78L12.78 3.98L13.17 4.05L13.56 3.98L13.94 3.78L14.33 3.50L14.72 3.23L15.11 3.02L15.50 2.95L15.89 3.02L16.28 3.23L16.67 3.50L17.06 3.77L17.44 3.98L17.83 4.05L18.22 3.98L18.61 3.77L19.00 3.50L19.35 3.97L19.54 4.44L19.48 4.92L19.19 5.39L18.81 5.86L18.52 6.33L18.46 6.81L18.65 7.28L19.00 7.75L19.35 8.22L19.54 8.69L19.48 9.17L19.19 9.64L18.81 10.11L18.52 10.58L18.46 11.06L18.65 11.53L19.00 12.00L19.35 12.47L19.54 12.94L19.48 13.42L19.19 13.89L18.81 14.36L18.52 14.83L18.46 15.31L18.65 15.78L19.00 16.25L19.35 16.72L19.54 17.19L19.48 17.67L19.19 18.14L18.81 18.61L18.52 19.08L18.46 19.56L18.65 20.03L19.00 20.50L18.61 20.77L18.22 20.98L17.83 21.05L17.44 20.98L17.06 20.77L16.67 20.50L16.28 20.23L15.89 20.02L15.50 19.95L15.11 20.02L14.72 20.23L14.33 20.50L13.94 20.77L13.56 20.98L13.17 21.05L12.78 20.98L12.39 20.78L12.00 20.50L11.61 20.22L11.22 20.02L10.83 19.95L10.44 20.02L10.06 20.22L9.67 20.50L9.28 20.77L8.89 20.98L8.50 21.05L8.11 20.98L7.72 20.77L7.33 20.50L6.94 20.23L6.56 20.02L6.17 19.95L5.78 20.02L5.39 20.23L5.00 20.50L4.65 20.03L4.46 19.56L4.52 19.08L4.81 18.61L5.19 18.14L5.48 17.67L5.54 17.19L5.35 16.72L5.00 16.25L4.65 15.78L4.46 15.31L4.52 14.83L4.81 14.36L5.19 13.89L5.48 13.42L5.54 12.94L5.35 12.47L5.00 12.00L4.65 11.53L4.46 11.06L4.52 10.58L4.81 10.11L5.19 9.64L5.48 9.17L5.54 8.69L5.35 8.22L5.00 7.75L4.65 7.28L4.46 6.81L4.52 6.33L4.81 5.86L5.19 5.39L5.48 4.92L5.54 4.44L5.35 3.97z" />
      <circle cx="12" cy="12" r="4.6" />
      <ellipse cx="12" cy="12" rx="2" ry="4.6" />
      <path d="M7.4 12h9.2" />
    </g>
  ),
  // a small stack of coins with one coin standing beside it
  coin: (
    <>
      <ellipse cx="9" cy="16.5" rx="5" ry="1.8" />
      <path d="M4 16.5v2c0 1 2.2 1.8 5 1.8s5-.8 5-1.8v-2" />
      <path d="M4 12.8c0 1 2.2 1.8 5 1.8s5-.8 5-1.8M4 12.8v3.7M14 12.8v3.7" />
      <ellipse cx="9" cy="12.8" rx="5" ry="1.8" />
      <circle cx="17.5" cy="8.5" r="3.8" />
      <path d="M17.5 6.8v3.4" />
    </>
  ),
  barchart: <path d="M4.5 19.5h15M7.5 19.5v-5M12 19.5V7.5M16.5 19.5v-8.5" />,
  frame: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <path d="M4 9h16M6.5 7h.1M8.5 7h.1M7 16.5l3-3 2 2 3-3.5 2.5 4.5" />
    </>
  ),
  trend: <path d="M4 19.5h16M4 19.5V5M7 15l3.5-4 3 2.5 5-6M15 7.5h3.5V11" />,
  pin: (
    <>
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  yarn: (
    <>
      <circle cx="12" cy="11.5" r="7.2" />
      <path d="M6 8.5c4 0 8 2 11 6M5.3 12.6c3-1 7 0 9.4 4.4M9.2 4.9c3 2 5 5 5.4 9.2" />
      <path d="M16.8 17c2 .8 3.2 2 3.7 3.5" />
    </>
  ),
  lamp: (
    <>
      <path d="M5 13c0 3 3 4.5 7 4.5s7-1.5 7-4.5z" />
      <path d="M19 13c1.6 0 2.6-1 3-2.6M5 13c-1.6-.4-2.6-2-2-3.4 1-.4 2 .4 2 1.4M9.5 13c0-1.7 1.1-2.8 2.5-2.8s2.5 1.1 2.5 2.8M9 17.5l-1 2h8l-1-2" />
      <path d="M12 10.2c0-1.5 1-2 .5-3.5s.5-2.5 1.5-3" />
    </>
  ),
  // a broccoli: bumpy floret crown on a branching stalk
  broccoli: (
    <>
      <path d="M7.2 12.5c-2.2.2-3.7-1.5-3.2-3.4.4-1.4 1.6-2.1 2.8-2 .2-1.9 1.9-3.3 3.8-3 1-1.3 2.9-1.6 4.3-.6 1.2-.3 2.5.3 3.1 1.4 1.7.2 2.8 1.8 2.4 3.4-.3 1.6-1.6 2.6-3.1 2.4" />
      <path d="M7.2 12.5c1.3.8 2.6.8 3.6 0 1 .9 2.4.9 3.5 0 .9.7 2.2.8 3.1.2" />
      <path d="M10 21c.6-2.6.9-4.8.8-8.4M14 21c-.6-2.6-.9-4.8-.8-8.4M10 21h4" />
      <path d="M11 16.5l-2.2-3.3M13 16.5l2.2-3.3" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="5.5" width="14" height="9.5" rx="1" />
      <path d="M3 18.5h18l-1.6-3.5H4.6z" />
    </>
  ),
  scooter: (
    <>
      <circle cx="6.5" cy="17" r="2.2" />
      <circle cx="17.5" cy="17" r="2.2" />
      <path d="M8.7 17h6.6l1.6-5.5M16.9 11.5L15.5 6.5H13.5M5.5 13h5.5" />
    </>
  ),
  joystick: (
    <>
      <path d="M5 16h14v3.5H5z" />
      <path d="M12 16V9.5" />
      <circle cx="12" cy="7" r="2.5" />
      <path d="M7.5 16v-1.4h2.2V16" />
    </>
  ),
  // a little train passing in front of mountains
  train: (
    <>
      <path d="M2.5 13l5.5-8 3.5 5 2.5-3 7.5 6" />
      <rect x="4.5" y="13" width="15" height="5.5" rx="2" />
      <path d="M8 15.6h.1M12 15.6h.1M16 15.6h.1" strokeWidth="2.6" />
      <path d="M2.5 21h19" />
    </>
  ),
  cap: (
    <>
      <path d="M12 5l9 4-9 4-9-4z" />
      <path d="M7 11v4c0 1.5 2.5 2.6 5 2.6s5-1.1 5-2.6v-4M21 9v5" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-7.5M12 12.5c0-4-3-6-7-6 0 4 3 6 7 6zM12 10.5c0-3.5 2.5-5.5 6.5-5.5 0 3.5-2.5 5.5-6.5 5.5z" />
      <path d="M7 20h10" />
    </>
  ),
  envelope: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="1.5" />
      <path d="M4.2 7l7.8 6 7.8-6" />
    </>
  ),
  // a small flat German flag in black, red and gold
  germany: (
    <>
      <path d="M2.5 5.6h19v4.2h-19z" fill="#2a2838" stroke="none" />
      <path d="M2.5 9.8h19v4.2h-19z" fill="#d6463a" stroke="none" />
      <path d="M2.5 14h19v4.4h-19z" fill="#f0c341" stroke="none" />
      <rect
        x="2.5"
        y="5.6"
        width="19"
        height="12.8"
        rx="1.3"
        strokeWidth="1.1"
        stroke="#2a2838"
      />
    </>
  ),
  // the Estonian flag in the same flat style: blue, black, white
  estonia: (
    <>
      <path d="M2.5 5.6h19v4.2h-19z" fill="#0072ce" stroke="none" />
      <path d="M2.5 9.8h19v4.2h-19z" fill="#1f1d2b" stroke="none" />
      <path d="M2.5 14h19v4.4h-19z" fill="#ffffff" stroke="none" />
      <rect
        x="2.5"
        y="5.6"
        width="19"
        height="12.8"
        rx="1.3"
        strokeWidth="1.1"
        stroke="#2a2838"
      />
    </>
  ),
  // AI: a big sparkle and a small one
  sparkles: (
    <>
      <path d="M11 3.5c.8 4.2 2.8 6.2 7 7-4.2.8-6.2 2.8-7 7-.8-4.2-2.8-6.2-7-7 4.2-.8 6.2-2.8 7-7z" />
      <path d="M18.5 15c.3 1.6 1 2.3 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
    </>
  ),
  moon: <path d="M19.5 14.8A8 8 0 0 1 9.2 4.5a8 8 0 1 0 10.3 10.3z" />,
  // a horseshoe, open end up, with its nail holes
  horseshoe: (
    <>
      <path d="M6.5 4.5C4.5 7 4 10 4.6 13c.9 4.3 4 6.8 7.4 6.8s6.5-2.5 7.4-6.8c.6-3 .1-6-1.9-8.5" />
      <path d="M9.6 4.5c-1.3 2-1.6 4.4-1.1 6.8.6 3 1.9 4.5 3.5 4.5s2.9-1.5 3.5-4.5c.5-2.4.2-4.8-1.1-6.8" />
      <path d="M6.5 4.5h3.1M14.4 4.5h3.1" />
      <path
        d="M6.6 9.5h.1M6.5 13h.1M8.5 16.6h.1M17.4 9.5h.1M17.5 13h.1M15.5 16.6h.1"
        strokeWidth="2"
      />
    </>
  ),
  // a hot air balloon: dreaming of far-off places
  balloon: (
    <g transform="rotate(10 12 12)">
      <path d="M12 2.5c-4 0-6.8 3-6.8 6.6 0 3.2 2.4 5.5 4.6 7.4h4.4c2.2-1.9 4.6-4.2 4.6-7.4 0-3.6-2.8-6.6-6.8-6.6z" />
      <path d="M12 2.5c-1.8 1.7-2.6 4-2.6 6.6 0 2.8.6 5.2.4 7.4M12 2.5c1.8 1.7 2.6 4 2.6 6.6 0 2.8-.6 5.2-.4 7.4" />
      <path d="M9.8 16.5l.6 2.3M14.2 16.5l-.6 2.3" />
      <rect x="10" y="18.8" width="4" height="2.8" rx=".6" />
    </g>
  ),
  // Temettü: a dividend calendar with a coin dropping onto pay day
  dividend: (
    <>
      <path d="M13 19.5H5.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
      <path d="M3.5 9.5h15M7.5 3.5v3.5M14.5 3.5v3.5" />
      <path d="M7 13h.1M10.5 13h.1M7 16.3h.1" strokeWidth="2.2" />
      <circle cx="17.2" cy="16.8" r="4" />
      <path d="M17.2 14.8v4" />
    </>
  ),
  // Iceland: blue with a white-edged red Nordic cross
  iceland: (
    <>
      <path d="M2.5 5.6h19v12.8h-19z" fill="#02529c" stroke="none" />
      <path
        d="M2.5 10.4h6v-4.8h4v4.8h9v3.2h-9v4.8h-4v-4.8h-6z"
        fill="#ffffff"
        stroke="none"
      />
      <path
        d="M2.5 11.2h6.8v-5.6h2.4v5.6h9.8v1.6h-9.8v5.6H9.3v-5.6H2.5z"
        fill="#dc1e35"
        stroke="none"
      />
      <rect
        x="2.5"
        y="5.6"
        width="19"
        height="12.8"
        rx="1.3"
        strokeWidth="1.1"
        stroke="#2a2838"
      />
    </>
  ),
  // Peru: red, white, red
  peru: (
    <>
      <path d="M2.5 5.6h6.4v12.8H2.5z" fill="#d91023" stroke="none" />
      <path d="M8.9 5.6h6.2v12.8H8.9z" fill="#ffffff" stroke="none" />
      <path d="M15.1 5.6h6.4v12.8h-6.4z" fill="#d91023" stroke="none" />
      <rect
        x="2.5"
        y="5.6"
        width="19"
        height="12.8"
        rx="1.3"
        strokeWidth="1.1"
        stroke="#2a2838"
      />
    </>
  ),
  // Sri Lanka, simplified: green and orange bands, maroon field with a gold edge
  srilanka: (
    <>
      <path d="M2.5 5.6h19v12.8h-19z" fill="#ffbe29" stroke="none" />
      <path d="M3.6 6.7h2.4v10.6H3.6z" fill="#00534e" stroke="none" />
      <path d="M6 6.7h2.4v10.6H6z" fill="#eb7400" stroke="none" />
      <path d="M9.4 6.7h11v10.6h-11z" fill="#8d153a" stroke="none" />
      <path
        d="M12.2 14.6c.6-1.8 1.8-2.9 3.2-3.3l.3-1.4 1 .8c1.2-.2 2 .6 1.9 1.6l-1 .4.6 1.9z"
        fill="#ffbe29"
        stroke="none"
      />
      <rect
        x="2.5"
        y="5.6"
        width="19"
        height="12.8"
        rx="1.3"
        strokeWidth="1.1"
        stroke="#2a2838"
      />
    </>
  ),
  // a passport booklet with the globe emblem on its cover
  passport: (
    <>
      <rect x="5.5" y="3" width="13" height="18" rx="1.8" />
      <path d="M8 3v18" />
      <path d="M11 8.5h4.6M11.5 11h3.6M11 16.8h4.6" />
    </>
  ),
  // a single leaf on a short stem, with its middle vein
  leaf: (
    <>
      <path d="M5 19.5C5 11 10 5.5 19.5 4.5 19 13 14 18.5 5 19.5z" />
      <path d="M5 19.5c3.5-4.5 7-8.5 11-11.5" />
      <path d="M9.5 14.5l-.3-3.4M12.5 11.5l-.2-3M10 15.2l3.4.2M13 12.2l3 .2" />
    </>
  ),
} satisfies Record<string, ReactElement>

export type IconName = keyof typeof icons

type Props = {
  name: IconName
  /** Read out by screen readers; leave empty for decorative icons. */
  label?: string
  className?: string
}

// A small hand-drawn line icon that sits in a line of text, in the text colour
// unless a class says otherwise.
const InlineIcon = ({ name, label, className }: Props) => {
  const id = useId().replace(/:/g, "")

  return (
    <svg
      viewBox="0 0 24 24"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "inline-block h-[1.3em] w-[1.3em] overflow-visible align-[-0.28em] text-ink",
        className
      )}
    >
      <defs>
        <filter id={`ii-${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.18"
            numOctaves="2"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="0.4" />
        </filter>
      </defs>
      <g filter={`url(#ii-${id})`}>
        {icons[name]}
        <g opacity="0.45" transform="translate(0.25 0.2)">
          {icons[name]}
        </g>
      </g>
    </svg>
  )
}

export default InlineIcon
