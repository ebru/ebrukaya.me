import Hero from "@/components/Hero"
import Postcards from "@/components/Postcards"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({ path: "/" })

export default function Home() {
  return (
    <>
      <Hero />
      <Postcards />
    </>
  )
}
