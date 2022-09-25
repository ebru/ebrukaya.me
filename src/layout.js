import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Footer from './components/footer/footer.component'

import './layout.css'

const Layout = ({ children, disablePanelLink = false, disableFooter = false }) => {
  return (
    <>
      <div
        style={{
          margin: `60px auto`,
          maxWidth: 770,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {!disableFooter && <Footer />}
      </div>
      {process.env.NODE_ENV === 'development' && !disablePanelLink && (
        <div
         style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          marginRight: 30,
          marginBottom: 20,
         }}
        >
          <Link to='/panel'>panel</Link>
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
