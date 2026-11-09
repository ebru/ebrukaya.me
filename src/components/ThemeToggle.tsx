"use client"

import useTheme from "@/hooks/useTheme"
import InlineIcon from "@/components/InlineIcon"

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()
  const label = isDark ? "Switch to light mode" : "Switch to dark mode"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex size-[38px] cursor-pointer items-center justify-center rounded-full border border-line bg-transparent p-0 text-ink [transition:border-color_0.2s_ease,color_0.2s_ease,rotate_0.4s_ease] hover:border-accent hover:text-accent active:rotate-[40deg]"
    >
      {/* keyed by theme, so the new icon pops in each time it changes */}
      <span
        key={isDark ? "moon" : "sun"}
        className="inline-flex animate-pop text-[19px]"
      >
        <InlineIcon
          name={isDark ? "moon" : "sun"}
          className="align-[0] text-inherit"
        />
      </span>
    </button>
  )
}

export default ThemeToggle
