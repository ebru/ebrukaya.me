export const config = {
  siteUrl: "https://ebrukaya.me",
  title: "Ebru Kaya – Software, design, life and travels",
  shortTitle: "Ebru Kaya",
  description:
    "A personal space to share thoughts, ideas, experiences about software development, indie making, design concepts, travels and enjoying life along the way.",
  author: "@ebru",
}

// Every page is in the mobile menu; "Home" is left out of the top bar.
export const navLinks = [
  { title: "home", path: "/", inTopNav: false },
  { title: "blog", path: "/blog/", inTopNav: true },
  { title: "journey", path: "/journey/", inTopNav: true },
  { title: "projects", path: "/projects/", inTopNav: true },
  { title: "personal", path: "/personal/", inTopNav: true },
]
