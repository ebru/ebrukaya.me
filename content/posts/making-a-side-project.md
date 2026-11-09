---
title: 'a journey of making a little side project'
date: '2020-03-29'
description: 'I have been looking for new ways to adapt to the technologies that I want to learn and speed up the building process of my side projects which I go mostly full-stack.'
icon: map
topics: [software, building]
---

I have been looking for new ways to adapt to the technologies that I want to learn and speed up the building process of my side projects which I go mostly full-stack. One evening I have come up with this little idea to bring to life, meet **Bucketmap.**

<figure><img alt="" src="/images/posts/making-a-side-project-1.jpg"/></figure>

I knew it is very helpful to practice what you learn on something that you are interested in, and I have been passionate about the idea of bucket lists for a while, visualizing things in general, and maps all the time! That was already enough for me to give this a try and after 52 days of working partially, here is the MVP of Bucketmap and its building process.

This project contains 3 parts;

### 1. client

The client is the web interface you see when you type [bucketmap.netlify.app](https://noecrafts.com/bucketmap). I started with the baby steps and in 24 hours, I have come up with the very first version of it, you can also see it [here](https://first-bucketmap.netlify.app/). There is nothing fancy, I went with the first tools that I found, hardcoded mock JSON data, and tried to apply what I draw on the paper.

The tools I have chosen in the first place are changed in time, for example, I started to use Leaflet for the map but I realized it was getting a bit hard to customize it according to my needs at one point. Therefore I switched to Mapbox, and there are still things to complete on my side but I am happy with the way it has been so far.

Here are the final tools that I am currently using for the client.

**What I used;**

1. [React](https://reactjs.org) for the frontend library
2. [Mapbox](https://mapbox.com) to render the map, marker, and item popups
3. [Netlify](https://netlify.com) to deploy

### 2. panel

The panel is where I add and manage content for the client. It consists of the basic CRUD operations using GraphQL queries and mutations.

<figure><img alt="" src="/images/posts/making-a-side-project-2.jpg"/></figure>

I am a big fan of using GraphQL with Apollo especially on the client-side. I have been using it not for a long time, but I already liked how it is easy to use and maintain in the codebase. It reduces the complexity of the app and I believe it will evolve rapidly in the near future.

**What I used;**

1. [React](https://reactjs.org) for the frontend library
2. [Ant Design](https://ant.design) components for the UI
3. [Netlify](https://netlify.com) to deploy

### 3. service

Although GraphQL reduces complexity on the client-side, it slightly increases the complexity of the backend, but I promise it is for a good cause.

<figure><img alt="" src="/images/posts/making-a-side-project-3.jpg"/></figure>

With that, I have a structured and well-documented API even from the very beginning, and the client can easily request what it exactly needs, nothing less, nothing more. I simply love this approach and I am more than okay to think ahead a bit more while designing the backend.

**What I used;**

1. [GraphQL Yoga](https://github.com/prisma-labs/graphql-yoga) for API server
2. [PostgreSQL](https://postgresql.org) & [Prisma](https://prisma.io) for database and ORM
3. [Prisma Cloud](https://prisma.io/cloud) and [Heroku](https://heroku.com) to deploy

And yes, that is all. I use the panel to create content, it sends a request to the service, and finally, everything is listed on a map on the client. There might be many things to improve, and also there are missing points to add but for an MVP, I thought this workflow would just work.

### what did it cost?

I am currently using the free tiers of all the services that I need, they are limited in some points but it is enough to see how things work together and bring the whole idea online on the internet. I only spent $13 on the custom domain back then, but I would have even not done that while preferring a subdomain of free providers now like Netlify, Heroku, etc.

**Services I use;**

- **Heroku** to serve the service, aka backend and the database.

Heroku is the only option fully integrated with Prisma Cloud at the moment. It has a free tier and the only drawback here is that the server sleeps after 30 minutes of inactivity and takes around 7 seconds to start the service again. It could be avoided while upgrading to the Hobby plan ($7/month per service). [More on pricing](https://heroku.com/pricing).

- **Netlify** to serve static sites like the client and the panel.

I preferred Netlify to Heroku here, because it is easier to have SSL support on the custom domain in my opinion, and you can have this feature even in your free tier. You need to upgrade your account for this on Heroku, but even when you upgrade it, I don’t think it was easy as Netlify.

Having a total upgrade chance for multiple sites is also a plus here with the Pro plan. ($45 /month). I really like Netlify to serve static sites, I am also using it for my personal site in the free tier for a while and I haven’t seen any drawbacks so far. [More on pricing.](https://netlify.com/pricing)

- **Mapbox** for the map and geocoding API.

It offers 50.000 free map loads and 100.000 free requests on the API each month. [More on pricing](https://mapbox.com/pricing).

I might consider switching to premium offers at one point or using other services, but I think all current free offerings are more than enough for a little project to start with. Therefore, I can say that everything could be done for literally $0 to test things out for a while.

### what I have learned?

I feel more confident using React which I started to learn roughly a year ago, I realized the progress in this one and it made me happy a lot. There are still many things to learn and practice, especially with GraphQL but I am keen on going forward.

For the first time, I completed a project in a bit more of a full-stack way. I mean, I never had a proper content management system for any previous projects of mine before. It is a big step for me.

I have seen the importance of starting small. I tried not to do any over-engineering or over-thinking. Okay maybe I might have pushed a bit harder on coding the item preview while creating a new item on the panel, but first, I learned how to manage local state using Apollo, and second, it looked awesome. It is all about balance I believe.

I don’t know how much this can go from here or will continue at all, but the important thing is I really enjoyed developing this little project in my free time, hustling on something that I enjoy that helped me to stay focused and feel productive when I have been unmotivated to do anything earlier.

I think there are many ideas waiting to come alive, especially for the ones who are able to stay home these days, we can just rest and watch Netflix all day long, but in some days we can also find that sparkling time to bring this one little idea to life, even just for fun, learning or who knows what it can bring to you in the long run.

> **#StayHome.** There are lots of things to explore in the world, but not COVID-19. Just dream, be inspired and stay home for a while, for a better world.

---

*Originally published on [Medium](https://ebrukye.medium.com/a-journey-of-making-a-little-side-project-d18088271876).*
