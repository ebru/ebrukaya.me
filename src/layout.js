import React from 'react'
import PropTypes from 'prop-types'
import Footer from './components/footer/footer.component'

import './layout.css'

const Layout = ({ children }) => {
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
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
