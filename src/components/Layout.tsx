import type { ReactNode } from "react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { PageKey } from "@/config"

type Props = {
  children: ReactNode
  showLogo?: boolean
  pageKey?: PageKey
}

const Layout = ({ children, showLogo, pageKey }: Props) => (
  <div
    style={{
      margin: "60px auto",
      maxWidth: 840,
      padding: "0 1.0875rem 1.45rem",
    }}
  >
    <Header showLogo={showLogo} pageKey={pageKey} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
