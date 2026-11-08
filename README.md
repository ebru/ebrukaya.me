# ebrukaya.me

[![Netlify Status](https://api.netlify.com/api/v1/badges/50475728-6058-4748-9ccb-b5627560ff68/deploy-status)](https://app.netlify.com/sites/ebru/deploys)

My personal site: a few words about me, my journey, side projects and a blog.

**[ebrukaya.me](https://ebrukaya.me)**

## Stack

- [Next.js](https://nextjs.org) (pages router, static export)
- [styled-components](https://styled-components.com)
- Markdown posts with front matter
- Light and dark mode that follows your system setting
- Hosted on [Netlify](https://netlify.com)

## Run it

```sh
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static site in out/
```

## Structure

```
content/posts/     blog posts (markdown); the file name is the URL: /blog/<name>/
public/            static files, served as-is
src/pages/         routes
src/sections/      page content: journey, projects, personal
src/components/    shared UI
src/lib/           reads and renders the posts
design/            original drawings
```

To write a post, add `content/posts/my-post.md`:

```md
---
title: "my post"
date: "2026-11-08"
description: "One line for search engines and link previews."
icon: pen # controller, dice, book, clapper, map, mountains, hourglass, sailboat, kite
---

Hello.
```

## License

The code is [MIT](LICENSE). The posts in `content/` and the drawings in `design/` and `public/images/` are © Ebru Kaya, all rights reserved.
