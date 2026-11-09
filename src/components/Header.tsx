"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi"

import ThemeToggle from "@/components/ThemeToggle"
import { navLinks } from "@/config"

const menuButton =
  "hidden size-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-[30px] text-ink max-[899px]:inline-flex"

const Header = () => {
  // compared without the trailing slash, however the router reports it
  const pathname = usePathname().replace(/(.)\/$/, "$1")
  const isHome = pathname === "/"
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

  // the blog's later pages and topic pages count as the blog
  const current = (path: string) => {
    const target = path.replace(/(.)\/$/, "$1")
    const onPage =
      pathname === target ||
      (target === "/blog" && /^\/blog\/(page|topic)\//.test(pathname))
    return onPage ? "page" : undefined
  }

  return (
    <header className="-mt-5 mb-11 flex min-h-10 items-center justify-between">
      {isHome ? (
        <span />
      ) : (
        <Link
          href="/"
          className="text-[19px] font-extrabold tracking-[-0.02em]"
        >
          ebrukaya<span className="text-accent">.</span>
        </Link>
      )}

      <div className="flex items-center gap-[18px] max-[899px]:gap-2">
        <nav
          aria-label="Main"
          className="flex gap-1 text-[16px] max-[899px]:hidden"
        >
          {navLinks
            .filter((link) => link.inTopNav)
            .map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={current(link.path)}
                className="rounded-full px-2.5 py-1 text-muted transition-colors duration-200 ease-[ease] hover:text-ink aria-[current=page]:bg-surface aria-[current=page]:font-bold aria-[current=page]:text-ink"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className={menuButton}
        >
          <HiOutlineMenuAlt4 />
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-100 flex flex-col bg-bg px-6 py-5 text-ink"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className={`${menuButton} self-end`}
            autoFocus
          >
            <HiX />
          </button>
          <nav aria-label="Main" className="mt-3 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={current(link.path)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[34px] leading-[1.4] font-extrabold tracking-[-0.03em] aria-[current=page]:text-accent"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
