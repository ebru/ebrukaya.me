"use client"

import { useEffect, useState } from "react"

// A thin accent line at the top of the window that fills as you read.
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{ transform: `scaleX(${progress})` }}
      className="pointer-events-none fixed inset-x-0 top-0 z-10 h-[3px] origin-[0_50%] bg-accent"
    />
  )
}

export default ReadingProgress
