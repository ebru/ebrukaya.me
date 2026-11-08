import Link from "next/link"
import styled from "styled-components"
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

const BlogLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: var(--accent);
  text-underline-offset: 3px;
`

const ProfileLink = styled.a<{ $brand: string }>`
  display: inline-flex;
  vertical-align: middle;
  margin-left: 6px;
  font-size: 22px;
  color: ${(props) => props.$brand};
  transition: transform 0.2s ease;

  &:hover {
    color: ${(props) => props.$brand};
    transform: rotate(-8deg) scale(1.1);
  }
`

// The embeds carry their own titles and inner padding, so they sit edge to
// edge with the text column (offset by that padding) and stack closely.
const EmbedSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 24px -21px 0;

  @media (max-width: 600px) {
    margin-left: -12px;
    margin-right: -12px;
  }
`

const StampieNote = styled.p`
  margin-top: 18px;
  font-size: 15px;
  color: var(--muted);

  a {
    color: var(--ink);
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-underline-offset: 3px;
  }
`

const Personal = () => {
  return (
    <>
      <Quote>
        "It doesn’t interest me what you do for a living. I want to know what
        you ache for – and if you dare to dream of meeting your heart’s longing.
        It doesn’t interest me how old you are. I want to know if you will risk
        looking like a fool – for love – for your dream – for the adventure of
        being alive."{" "}
        <ItalicText
          style={{
            display: "block",
            marginTop: 10,
            fontSize: "17px",
            fontStyle: "normal",
            color: "var(--muted)",
          }}
        >
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            $brand="#1db954"
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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Goodreads"
            $brand="#b0855a"
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

      <EmbedSection>
        <StampieEmbed show="wonders" />
        <StampieEmbed show="map" />
      </EmbedSection>

      <StampieNote>
        My travels are collected as stamps in{" "}
        <a href="https://stampie.app" target="_blank" rel="noopener noreferrer">
          Stampie
        </a>
        , an app I'm building to keep the passport-stamp feeling alive now that
        many countries have stopped stamping passports.
      </StampieNote>
    </>
  )
}

export default Personal
