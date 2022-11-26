import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Box, Dialog, IconButton } from '@mui/material'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CloseIcon from '@mui/icons-material/Close'

import { pages } from '../consts'
import { useResponsive } from '../hooks'

const Header = ({ showLogo = true, pageKey }) => {
  const { isLargerThanMd } = useResponsive()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [{
    title: 'Home',
    path: '/',
    pageKey: pages.home,
    isWeb: false,
    isMobile: true,
  }, {
    title: 'Journey',
    path: '/journey/',
    pageKey: pages.journey,
    isWeb: true,
    isMobile: true,
  }, {
    title: 'Tech Stack',
    path: '/tech-stack/',
    pageKey: pages.techStack,
    isWeb: true,
    isMobile: true,
  }, {
    title: 'Projects',
    path: '/projects/',
    pageKey: pages.projects,
    isWeb: true,
    isMobile: true,
  }, {
    title: 'Personal',
    path: '/personal/',
    pageKey: pages.personal,
    isWeb: true,
    isMobile: true,
    isLast: true,
  }]

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

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
      {isLargerThanMd && (
        <NavLinks>
          {navLinks.filter(link => link.isWeb).map((link, index) => (
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
      )}
      {!isLargerThanMd && (
        <IconButton onClick={handleMobileMenuOpen} style={{
          marginTop: -30
        }}>
          <MenuOutlinedIcon style={{
            fontSize: 32,
            color: '#444'
          }} />
        </IconButton>
      )}
      <Dialog onClose={handleMobileMenuClose} open={mobileMenuOpen} fullScreen>
        <Box onClick={handleMobileMenuClose} style={{
          flex: 1,
          padding: 20,
          textAlign: 'center',
        }}>
          <IconButton style={{ marginBottom: 10 }}>
            <CloseIcon style={{
              fontSize: 35,
              color: '#444'
            }} />
          </IconButton>
          <Box>
            {navLinks.filter(link => link.isMobile).map((link, index) => (
              <Box key={index} style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => {
                navigate(link.path)
                handleMobileMenuClose()
              }}>
                <Box style={{
                  width: '100%',
                  fontWeight: 'bold',
                  fontSize: 26,
                  textDecoration: pageKey === link.pageKey && 'underline'
                }}>
                  {link.title.toLowerCase()}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Dialog>
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