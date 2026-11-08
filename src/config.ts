export const config = {
  siteUrl: "https://ebrukaya.me",
  title: "Ebru Kaya – Software, design, life and travels",
  shortTitle: "Ebru Kaya",
  description:
    "A personal space to share thoughts, ideas, experiences about software development, indie making, design concepts, travels and enjoying life along the way.",
  author: "@ebru",
}

// Keys for the main pages, used to highlight the current link in the header.
export const pages = {
  home: "home",
  journey: "journey",
  projects: "projects",
  blog: "blog",
  personal: "personal",
} as const

export type PageKey = (typeof pages)[keyof typeof pages]
