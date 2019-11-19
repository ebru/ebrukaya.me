import React from 'react'

import Layout from './../components/layout'
import SEO from './../components/seo'
import SnippetCard from './../components/snippet-card/snippet-card.component'
import SideProjectsCard from './../components/side-projects-card/side-projects-card.component'
import JourneyCard from './../components/journey-card/journey-card.component'
import SkillsCard from './../components/skills-card/skills-card.component'
import PersonalCard from './../components/personal-card/personal-card.component'
import Footer from './../components/footer/footer.component'

export default () => {
  return (
    <Layout>
      <SEO />
      <div>
        <SnippetCard />
        <SideProjectsCard />
        <JourneyCard />
        <SkillsCard />
        <PersonalCard />
        <Footer />
      </div>
    </Layout>
  )
}