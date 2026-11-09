# ebrukaya.me

[![Netlify Status](https://api.netlify.com/api/v1/badges/50475728-6058-4748-9ccb-b5627560ff68/deploy-status)](https://app.netlify.com/sites/ebru/deploys)

My personal site: a few words about me, my journey, side projects and a blog.

**[ebrukaya.me](https://ebrukaya.me)**

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Markdown posts with front matter
- Light and dark mode that follows your system setting
- RSS feed (`/feed.xml`), link-preview images and `/llms.txt`, all generated at build time
- Hosted on [Netlify](https://netlify.com)

## Run it

```sh
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static site in out/
pnpm typecheck # check types
```

## Structure

```
content/posts/     blog posts (markdown); the file name is the URL: /blog/<name>/
public/            static files, served as-is
src/app/           routes, layout and global styles
src/sections/      page content: journey, projects, personal
src/components/    shared UI
src/lib/           reads and renders the posts
design/            the original drawing
```

To write a post, add `content/posts/my-post.md`:

```md
---
title: "my post"
date: "2026-11-08"
description: "One line for search engines and link previews."
draft: true # optional: only shows with pnpm dev, until you remove it
icon: pen # controller, dice, book, clapper, map, mountains, hourglass, sailboat, kite, suitcase, hammock, sunrise, laptop
topics: [software] # software, design, building, life, travel, watch, read, listen, play
---

Hello.
```

## License

The code is [MIT](LICENSE). The posts in `content/` and the drawings in `design/` and `public/images/` are © Ebru Kaya, all rights reserved.
