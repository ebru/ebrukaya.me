import { useCallback, useEffect, useState } from "react"

const getTheme = () =>
  typeof document !== "undefined" &&
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light"

// Reads and toggles the theme set by the script in src/pages/_document.js.
// Every component using this hook stays in sync, and the site keeps
// following the system setting until the visitor picks a theme themselves.
const useTheme = () => {
  const [theme, setThemeState] = useState("light")

  useEffect(() => {
    setThemeState(getTheme())

    const observer = new MutationObserver(() => setThemeState(getTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onSystemChange = (event) => {
      let saved = null
      try {
        saved = localStorage.getItem("theme")
      } catch (e) {}
      if (!saved) {
        document.documentElement.setAttribute(
          "data-theme",
          event.matches ? "dark" : "light"
        )
      }
    }
    media.addEventListener && media.addEventListener("change", onSystemChange)

    return () => {
      observer.disconnect()
      media.removeEventListener &&
        media.removeEventListener("change", onSystemChange)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch (e) {}
  }, [])

  return { theme, isDark: theme === "dark", toggleTheme }
}

export default useTheme
