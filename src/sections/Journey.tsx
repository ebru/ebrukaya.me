import { SubTitle, ItemList, Item, When, BoldText } from "@/components/ui"
import InlineIcon from "@/components/InlineIcon"
import ExternalLink from "@/components/ExternalLink"
import { PresentList, ItemImage, PresentText } from "@/sections/Journey.styles"

const Journey = () => {
  return (
    <>
      <SubTitle>Present</SubTitle>
      <PresentList>
        <ItemList>
          <Item>
            <InlineIcon name="sparkles" />
            <PresentText>Deep focus on AI learning.</PresentText>
          </Item>
          <Item>
            <InlineIcon name="leaf" />
            <PresentText>
              Running a design and software studio called{" "}
              <ExternalLink targetUrl="https://noecrafts.com">
                Noe Crafts
              </ExternalLink>{" "}
              since June of 2020.
            </PresentText>
          </Item>
          <Item>
            <InlineIcon name="trend" />
            <PresentText>Investing in stocks and startups.</PresentText>
          </Item>
        </ItemList>
        <ExternalLink targetUrl="https://noecrafts.com">
          <ItemImage src="/images/projects/noe.jpg" alt="Noe Crafts" />
        </ExternalLink>
      </PresentList>
      <SubTitle $past>Past</SubTitle>
      <ItemList $past>
        <Item>
          <InlineIcon name="lamp" /> Senior Frontend Engineer at{" "}
          <ExternalLink targetUrl="https://roompricegenie.com/">
            RoomPriceGenie
          </ExternalLink>{" "}
          <When>(Aug 2023 – Jun 2026)</When>
        </Item>
        <Item>
          <InlineIcon name="broccoli" /> Senior Frontend Engineer at{" "}
          <ExternalLink targetUrl="https://cara.care">Cara Care</ExternalLink>.{" "}
          <When>(Nov 2021 – Apr 2023)</When>
        </Item>
        <Item>
          <InlineIcon name="germany" /> Moved to{" "}
          <ExternalLink targetUrl="https://ebrukye.medium.com/moving-to-germany-45b6a401a884">
            Germany
          </ExternalLink>
          . <When>(Jan 2022)</When>
        </Item>
        <Item>
          <InlineIcon name="laptop" /> Took a gap year to focus on personal
          projects and founded{" "}
          <ExternalLink targetUrl="https://noecrafts.com">
            Noe Crafts
          </ExternalLink>
          . <When>(June 2020)</When>
        </Item>
        <Item>
          <InlineIcon name="scooter" /> Frontend Engineer at{" "}
          <ExternalLink targetUrl="https://getir.com/en/">Getir</ExternalLink>.{" "}
          <When>(Dec 2019 – Jun 2020)</When>
        </Item>
        <Item>
          <InlineIcon name="joystick" /> Software Engineer at{" "}
          <ExternalLink targetUrl="https://sony.com/">Sony</ExternalLink>.
        </Item>
        <Item>
          Senior Software Engineer <When>(Oct 2019 – Nov 2019)</When>, Software
          Engineer <When>(Nov 2017 – Oct 2019)</When>
        </Item>
        <Item>
          <InlineIcon name="train" /> Took a{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://youtu.be/CJAKg-wK5Aw?si=VKvmC-U0xsHePJ6R"
            target="_blank"
            rel="noopener noreferrer"
          >
            gap year
          </a>{" "}
          after graduation before starting my professional career.
        </Item>
        <Item>
          <InlineIcon name="cap" /> Graduated from{" "}
          <BoldText>Istanbul University</BoldText> with a degree in Computer
          Engineering. <When>(2016)</When>
        </Item>
        <Item>
          <InlineIcon name="estonia" /> Exchange Student at{" "}
          <BoldText>Tallinn University</BoldText> in Estonia.{" "}
          <When>(2015)</When>
        </Item>
        <Item>
          <InlineIcon name="horseshoe" /> Graduated from{" "}
          <BoldText>Nişantaşı Anadolu Lisesi</BoldText> with high school
          diploma. <When>(2012)</When>
        </Item>
        <Item>
          <InlineIcon name="sprout" /> My interest in software development has
          started in my early ages while trying to design a website from free
          providers and I've built many, many others later on.
        </Item>
      </ItemList>
    </>
  )
}

export default Journey
