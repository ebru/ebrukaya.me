import { BsTwitterX } from "react-icons/bs"
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa"

import {
  Title,
  Snippet,
  Description,
  SocialIcons,
  MainContainer,
  ImageContainer,
} from "@/components/Hero.styles"

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

const Hero = () => {
  return (
    <MainContainer>
      <div>
        <Title>Hi, I'm Ebru.</Title>
        <Snippet>
          Sr. Software Engineer, Co-Building{" "}
          <span className="nowrap">
            <ExternalLink targetUrl="https://stampie.app">Stampie</ExternalLink>{" "}
            <InlineIcon name="stamp" />
          </span>
          <br />
          Founder at{" "}
          <span className="nowrap">
            <ExternalLink targetUrl="https://noecrafts.com">
              Noe Crafts
            </ExternalLink>{" "}
            <InlineIcon name="leaf" />
          </span>
        </Snippet>
        <Description>
          I have always been so curious about the whole software development
          cycle, from just an idea to the journey of bringing it to life.
          Therefore I enjoy spending my time improving myself in full stack
          development.
        </Description>
        <SocialIcons>
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </SocialIcons>
      </div>
      <ImageContainer>
        {/* Drawn from --portrait in globals.css: portrait.svg (light) or portrait-dark.svg (dark).
				    The originals live in design/. */}
        <div
          className="portrait"
          role="img"
          aria-label="A hand-drawn ink sketch of Ebru"
        />
      </ImageContainer>
    </MainContainer>
  )
}

export default Hero
