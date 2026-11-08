import { useEffect, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi"

import { pages, type PageKey } from "@/config"
import ThemeToggle from "@/components/ThemeToggle"

// Every page is in the mobile menu; "Home" is left out of the top bar.
const navLinks = [
  { title: "Home", path: "/", pageKey: pages.home, inTopNav: false },
  { title: "Blog", path: "/blog/", pageKey: pages.blog, inTopNav: true },
  {
    title: "Journey",
    path: "/journey/",
    pageKey: pages.journey,
    inTopNav: true,
  },
  {
    title: "Projects",
    path: "/projects/",
    pageKey: pages.projects,
    inTopNav: true,
  },
  {
    title: "Personal",
    path: "/personal/",
    pageKey: pages.personal,
    inTopNav: true,
  },
]

type Props = {
  showLogo?: boolean
  pageKey?: PageKey
}

const Header = ({ showLogo = true, pageKey }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setMobileMenuOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <HeaderBar>
      {showLogo ? (
        <Logo href="/">
          ebrukaya<span>.</span>
        </Logo>
      ) : (
        <span />
      )}

      <Actions>
        <NavLinks aria-label="Main">
          {navLinks
            .filter((link) => link.inTopNav)
            .map((link) => (
              <NavLink
                key={link.path}
                href={link.path}
                aria-current={pageKey === link.pageKey ? "page" : undefined}
              >
                {link.title.toLowerCase()}
              </NavLink>
            ))}
        </NavLinks>
        <ThemeToggle />
        <MenuButton
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt4 />
        </MenuButton>
      </Actions>

      {mobileMenuOpen && (
        <MobileMenu role="dialog" aria-modal="true" aria-label="Menu">
          <MenuButton
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ alignSelf: "flex-end" }}
            autoFocus
          >
            <HiX />
          </MenuButton>
          <nav aria-label="Main">
            {navLinks.map((link) => (
              <MobileLink
                key={link.path}
                href={link.path}
                aria-current={pageKey === link.pageKey ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title.toLowerCase()}
              </MobileLink>
            ))}
          </nav>
        </MobileMenu>
      )}
    </HeaderBar>
  )
}

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin-top: -20px;
  margin-bottom: 44px;
`

const Logo = styled(Link)`
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.02em;

  span {
    color: var(--accent);
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 899px) {
    gap: 8px;
  }
`

const NavLinks = styled.nav`
  display: flex;
  gap: 4px;
  font-size: 16px;

  @media (max-width: 899px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  padding: 4px 10px;
  border-radius: 999px;
  color: var(--muted);
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--ink);
  }

  &[aria-current="page"] {
    color: var(--ink);
    font-weight: 700;
    background: var(--surface);
  }
`

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 899px) {
    display: inline-flex;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  background: var(--bg);
  color: var(--ink);

  nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
  }
`

const MobileLink = styled(Link)`
  font-weight: 800;
  font-size: 34px;
  letter-spacing: -0.03em;
  line-height: 1.4;

  &[aria-current="page"] {
    color: var(--accent);
  }
`

export default Header
