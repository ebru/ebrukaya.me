import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Footer from './components/footer/footer.component'

import './layout.css'
import Header from './components/header'

const Layout = ({
  children,
  panelLink = true,
  header = true,
  footer = true,
  showLogo,
  maxWidth = 770,
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
      {process.env.NODE_ENV === 'development' && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            marginRight: 30,
            marginBottom: 20,
          }}
        >
          <Link to={panelLink ? '/panel' : '/'}>{panelLink ? 'panel' : 'home'}</Link>
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
