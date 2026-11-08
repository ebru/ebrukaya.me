import { SubTitle, ItemList, Item, When, BoldText } from "@/components/ui"
import InlineIcon from "@/components/InlineIcon"
import ExternalLink from "@/components/ExternalLink"
import { ItemImage, ItemRow } from "@/sections/Projects.styles"

const Projects = () => {
  return (
    <>
      <SubTitle>Present</SubTitle>
      <ItemList>
        <Item>
          <InlineIcon name="stamp" /> Co-Building{" "}
          <ExternalLink targetUrl="https://stampie.app">
            Stampie 2.0
          </ExternalLink>
          , an improved version of the previous app that turns your travels into
          collectible digital passport stamps. <When>(2026)</When>
        </Item>
      </ItemList>
      <SubTitle $past>Past</SubTitle>
      <ItemList $past>
        <Item>
          <InlineIcon name="passport" /> Built{" "}
          <ExternalLink targetUrl="https://stampie.app">Stampie</ExternalLink>,
          a travel journal app that reimagines passport stamps as collectible
          experiences. <When>(2025)</When>
        </Item>
        <Item>
          <InlineIcon name="coin" /> Built{" "}
          <ExternalLink targetUrl="https://noecrafts.com/infie">
            Infie
          </ExternalLink>
          , a simple and easy-to-use app to track your wealth.{" "}
          <When>(2025)</When>
        </Item>
        <Item>
          <InlineIcon name="barchart" /> Co-Built{" "}
          <ExternalLink targetUrl="https://temettu.app">
            Temettü 2.0
          </ExternalLink>
          , an improved version for both mobile and web of the previous mobile
          app that helps you to follow dividend investments. <When>(2024)</When>
        </Item>
        <Item>
          <InlineIcon name="frame" /> Co-Built{" "}
          <ExternalLink targetUrl="https://mockupgenerator.co">
            Mockup Generator
          </ExternalLink>
          , an online tool that helps you to create product mockups in seconds
          and saves a lot of time with bulk mockup generations.{" "}
          <When>(2023)</When>
        </Item>
        <Item>
          <InlineIcon name="dividend" /> Built{" "}
          <ExternalLink targetUrl="https://temettu.app">Temettü</ExternalLink>,
          a mobile app that helps you to follow the dividend calendar and track
          the dividend payments of your stock investments. <When>(2020)</When>
        </Item>
        <Item>
          <InlineIcon name="leaf" /> Founded{" "}
          <ExternalLink targetUrl="https://noecrafts.com">
            Noe Crafts
          </ExternalLink>
          , a handcrafted design and software studio that focuses on bringing
          product ideas to life. <When>(2020)</When>
        </Item>
        <Item>
          <InlineIcon name="pin" />
          <ItemRow>
            <div>
              Built{" "}
              <ExternalLink targetUrl="https://ebrukye.medium.com/a-journey-of-making-a-little-side-project-d18088271876">
                Bucketmap
              </ExternalLink>
              , a project to map some bucket list ideas to discover around the
              world. Here is{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="https://medium.com/@ebrukye/a-journey-of-making-a-little-side-project-d18088271876"
                target="_blank"
                rel="noopener noreferrer"
              >
                the story
              </a>
              . <When>(2020)</When>
            </div>
            <ExternalLink targetUrl="https://ebrukye.medium.com/a-journey-of-making-a-little-side-project-d18088271876">
              <ItemImage src="/images/projects/bucketmap.jpg" alt="bucketmap" />
            </ExternalLink>
          </ItemRow>
        </Item>
        <Item>
          <InlineIcon name="yarn" /> Co-Founded <BoldText>MUKAVVA</BoldText>, a
          design brand that we created together with my two close friends in a
          very amateur way, an adventure inspired by nature and our travels...{" "}
          <When>(2018)</When>
        </Item>
        <Item>
          <InlineIcon name="balloon" /> Created{" "}
          <ExternalLink targetUrl="https://youtube.com/hayallerimdeben">
            Hayallerimde Ben
          </ExternalLink>
          , a storytelling project that I started to share my experiences
          through my bucket list journey between ages 18 and 25.{" "}
          <When>(2013)</When>
        </Item>
      </ItemList>
    </>
  )
}

export default Projects
