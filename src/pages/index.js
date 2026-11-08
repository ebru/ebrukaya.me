import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import Hero from "@/components/Hero"
import Postcards from "@/components/Postcards"
import { pages } from "@/config"

const Home = () => (
  <Layout showLogo={false} pageKey={pages.home}>
    <Seo />
    <Hero />
    <Postcards />
  </Layout>
)

export default Home
