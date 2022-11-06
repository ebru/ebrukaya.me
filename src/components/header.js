import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box } from '@mui/system'
import { pages } from '../consts'

const Header = ({ showLogo = true, pageKey }) => {
  const navLinks = [{
    title: 'Journey',
    path: '/journey/',
    pageKey: pages.journey,
  }, {
    title: 'Tech Stack',
    path: '/tech-stack/',
    pageKey: pages.techStack,
  }, {
    title: 'Projects',
    path: '/projects/',
    pageKey: pages.projects,
  }, {
    title: 'Personal',
    path: '/personal/',
    pageKey: pages.personal,
    isLast: true,
  }]

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -20,
      marginBottom: 30,
    }}>
      {showLogo ? (
        <p style={{ fontWeight: '600', height: 30 }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            ebrukaya.
          </Link>
        </p>
      ) : <p style={{ height: 30 }}></p>}
      <NavLinks>
        {navLinks.map((link, index) => (
          <Box key={index}>
            <Link to={link.path} style={{
              textDecoration: pageKey === link.pageKey ? 'underline' : 'none',
              fontWeight: pageKey === link.pageKey && '600',
            }}>
              {link.title.toLowerCase()}
            </Link>
            {!link.isLast && <Divider>·</Divider>}
          </Box>
        ))}
      </NavLinks>
    </Box>
  )
}

const NavLinks = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 17px;
`

const Divider = styled.span`
  padding-left: 7px;
  padding-right: 7px;
`

export default Header