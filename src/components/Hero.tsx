import { BsTwitterX } from "react-icons/bs"
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa"

import ExternalLink from "@/components/ExternalLink"
import InlineIcon from "@/components/InlineIcon"

const socials = [
  {
    href: "https://www.linkedin.com/in/ebrukaya",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  { href: "https://www.github.com/ebru", label: "GitHub", Icon: FaGithub },
  { href: "https://www.medium.com/@ebrukye", label: "Medium", Icon: FaMedium },
  { href: "https://x.com/ebrukye", label: "X", Icon: BsTwitterX },
]

// Stampie / Noe Crafts: hovering underlines the name and colours its icon.
const brandLink =
  "underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] group-hover/brand:text-ink group-hover/brand:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
const brandIcon =
  "transition-colors duration-200 ease-[ease] group-hover/brand:text-accent group-focus-within/brand:text-accent"

const Hero = () => (
  <section className="-mb-5 grid grid-cols-[minmax(0,1fr)_300px] items-start gap-5 max-[640px]:grid-cols-[minmax(0,1fr)] max-[640px]:gap-0">
    <div className="max-[640px]:order-2">
      <h1 className="mb-[1.4rem] text-[clamp(2.5rem,7vw,3.5rem)] leading-none font-extrabold tracking-[-0.045em]">
        Hi, I'm Ebru.
      </h1>
      <h3 className="text-[21px] leading-[1.5em] font-semibold text-ink-soft max-[480px]:text-[20px]">
        Sr. Software Engineer, Co-Building{" "}
        <span className="group/brand whitespace-nowrap">
          <ExternalLink targetUrl="https://stampie.app" className={brandLink}>
            Stampie
          </ExternalLink>{" "}
          <InlineIcon name="stamp" className={brandIcon} />
        </span>
        <br />
        Founder at{" "}
        <span className="group/brand whitespace-nowrap">
          <ExternalLink targetUrl="https://noecrafts.com" className={brandLink}>
            Noe Crafts
          </ExternalLink>{" "}
          <InlineIcon name="leaf" className={brandIcon} />
        </span>
      </h3>
      <p className="max-w-[34em]">
        I have always been so curious about the whole software development
        cycle, from just an idea to the journey of bringing it to life.
        Therefore I enjoy spending my time improving myself in full stack
        development.
      </p>
      <div className="-ml-[5px] flex gap-0.5">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex size-[38px] items-center justify-center rounded-full text-[27px] text-ink transition-colors duration-200 ease-[ease] hover:bg-surface hover:text-accent"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
    {/* The drawing sits slightly tilted inside a sheet of paper. In light mode the
        paper is invisible; in dark mode it shows, so the original ink drawing can be
        used instead of an inverted one (inverted, the face reads as an empty hole).
        Same box in both modes, so nothing jumps when the theme changes.
        --portrait in globals.css picks portrait.svg (light) or portrait-paper.svg (dark);
        the original drawing is design/portrait.svg. */}
    <div className="relative -mt-6 rotate-2 rounded-[6px] px-3.5 pt-3.5 pb-5 dark:bg-(--portrait-paper) dark:shadow-[0_14px_30px_-18px_rgba(0,0,0,0.8)] max-[640px]:mt-1 max-[640px]:mr-0 max-[640px]:mb-7 max-[640px]:ml-1 max-[640px]:w-[180px] max-[640px]:px-2.5 max-[640px]:pt-2.5 max-[640px]:pb-3.5">
      <div
        role="img"
        aria-label="A hand-drawn ink sketch of Ebru"
        className="aspect-[819/1034] w-full bg-(image:--portrait) bg-contain bg-center bg-no-repeat"
      />
    </div>
  </section>
)

export default Hero
