import Footer from "@/components/Footer"
import Header from "@/components/Header"

const Layout = ({
  children,
  header = true,
  footer = true,
  showLogo,
  maxWidth = 840,
  pageKey,
}) => {
  return (
    <>
      <div
        style={{
          margin: `60px auto`,
          maxWidth,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {header && <Header showLogo={showLogo} pageKey={pageKey} />}
        <main>{children}</main>
        {footer && <Footer />}
      </div>
    </>
  )
}

export default Layout
