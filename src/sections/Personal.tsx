import Link from "next/link"
import type { ComponentProps } from "react"
import {
  Quote,
  ItalicText,
  BoldText,
  PersonalList,
  Item,
} from "@/components/ui"
import { FaSpotify, FaGoodreadsG } from "react-icons/fa"
import ExternalLink from "@/components/ExternalLink"
import StampieEmbed from "@/components/StampieEmbed"

const BlogLink = (props: ComponentProps<typeof Link>) => (
  <Link
    {...props}
    className="underline decoration-accent underline-offset-[3px]"
  />
)

// Spotify / Goodreads icon in the brand's own colour; it tilts on hover.
const ProfileLink = ({
  brand,
  ...props
}: ComponentProps<"a"> & { brand: string }) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: brand }}
    className="ml-1.5 inline-flex align-middle text-[22px] transition-transform duration-200 ease-[ease] hover:-rotate-8 hover:scale-110"
  />
)

const Personal = () => {
  return (
    <>
      <Quote>
        "It doesn’t interest me what you do for a living. I want to know what
        you ache for – and if you dare to dream of meeting your heart’s longing.
        It doesn’t interest me how old you are. I want to know if you will risk
        looking like a fool – for love – for your dream – for the adventure of
        being alive."{" "}
        <ItalicText className="mt-2.5 block text-[17px] text-muted not-italic">
          – Oriah Mountain Dreamer
        </ItalicText>
      </Quote>
      <PersonalList>
        <Item>
          <BoldText>Personality type:</BoldText>{" "}
          <ExternalLink targetUrl="https://www.16personalities.com/enfp-personality">
            ENFP-T
          </ExternalLink>
        </Item>
        <Item>
          <BoldText>Collections:</BoldText> postcard, flag patch and paper money
        </Item>
        <Item>
          <BoldText>Music:</BoldText> fleetwood mac, dire straits, jungle,
          paradis, sohn... // me on
          <ProfileLink
            href="https://open.spotify.com/user/st943c9lgd92wk98aw3bfxcvb?si=UtRzXiaST-uX2-VJagH6Fw"
            aria-label="Spotify"
            brand="#1db954"
          >
            <FaSpotify />
          </ProfileLink>
        </Item>

        <Item>
          <BoldText>Books:</BoldText> “life holds one great but quite
          commonplace mystery. though shared by each of us and known to all,
          seldom rates a second thought. that mystery, which most of us take for
          granted and never think twice about, is time.
          <br></br>
          <br></br>
          calendars and clocks exist to measure time, but that signifies little
          because we all know that an hour can seem as eternity or pass in a
          flash, according to how we spend it.
          <br></br>
          <br></br>
          time is life itself, and life resides in the human heart.” - momo //
          me on
          <ProfileLink
            href="https://goodreads.com/ebrukaya"
            aria-label="Goodreads"
            brand="#b0855a"
          >
            <FaGoodreadsG />
          </ProfileLink>
        </Item>

        <Item>
          <BoldText>Movies:</BoldText>{" "}
          <BlogLink href="/blog/movies/">the ones</BlogLink> that made me feel
          somehow different than others
        </Item>
        <Item>
          <BoldText>Games:</BoldText> I especially love story-driven games a
          lot! here are <BlogLink href="/blog/games/">some</BlogLink> that I
          enjoyed playing so far
        </Item>
      </PersonalList>

      {/* The embeds carry their own titles and inner padding, so they sit edge to
          edge with the text column (offset by that padding) and stack closely. */}
      <section className="mx-[-21px] mt-6 mb-0 flex flex-col gap-1 max-[600px]:mx-[-12px]">
        <StampieEmbed show="wonders" />
        <StampieEmbed show="map" />
      </section>

      <p className="mt-[18px] text-[15px] text-muted [&_a]:font-bold [&_a]:text-ink [&_a]:underline [&_a]:decoration-accent [&_a]:underline-offset-[3px]">
        My travels are collected as stamps in{" "}
        <a href="https://stampie.app" target="_blank" rel="noopener noreferrer">
          Stampie
        </a>
        , an app I'm building to keep the passport-stamp feeling alive now that
        many countries have stopped stamping passports.
      </p>
    </>
  )
}

export default Personal
