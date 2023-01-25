Documentation is based on this website: 
- https://hendrixer.github.io/nextjs-course/intro

NextJS official documentation:
- https://nextjs.org/docs
- https://github.com/Hendrixer/nextjs-course-app/tree/master

# What is Next.js

Next.js is a complete full-stack framework for modern apps that was created by the brilliant team at [Vercel](https://vercel.com/). *React is used as the view library of choice.* 

Here are some of the highlights that you get for free:

- Dev build system
- Production build system
- Pre-rendering
	- Server side rendering
	- Build time
	- Static
- Routing
- API routes

## When to use next.JS

#### Do you only need a single page app?

Use Create React App

#### Do you need a static site, like a blog, that's also a SPA?

Use Next.js or Gatsby.

#### Need SSR, an API, and all the above?

Use Next.js

# Getting Started

## First way

You can use `creat-next-app` to get started very quickly.

**npm**

```shell
npx create-next-app
```

**yarn**

```shell
yarn create next-app
```

This will install a boilerplate app and all of its dependencies. The project's `package.json` will have all the needed scripts ready for you as well.

## Second way

**npm**

```shell
npm i next react react-dom --save
```

**yarn**

```shell
yarn add next react react-dom
```

Next, we need to add some helpful scripts to our `package.json`

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

So what do these commands do?

`next` Will start Next.js in dev mode with hot reloading.

`next build` Will build your project and ready it for production.

`next start` Will start your built app, used in production.

> 🧠  **remember**: Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js


# Routing with Pages

In Next.js, routing is handled by the file system and the pages directory. Each file in the pages directory represents a route in your application. The file name corresponds to the path of the route and the file exports a React component that will be rendered for that route.

Now let's create an index route by creating a file: `/pages/index.jsx`.

Next, let's create a component and export it:

```jsx
// inside pages/index.jsx
import React from 'react'

export default () => <h1>Index Page</h1>
```

Start your dev server:

**npm**

```shell
npm run dev
```

**yarn**

```shell
yarn dev
```

## Folders and routes

To create a path like `/notes/1`  where `1` is a parameter? We can use folders in our `/pages` directory. For our note taking app, we need the following routes for now:

```text
index => /
all notes => /notes
one note => /notes/:id
```

We already created the index route; let's create the all notes route:

```text
pages
  notes
    index.jsx
```

By adding an `index` page in a folder, we're telling Next.js that we want this component to be the index route for this path. So in this case, navigating to `/notes` will render the `pages/notes/index.jsx` component.

```jsx
// inside pages/notes/index.jsx
import React from 'react'

export default () => <h1>Notes</h1>
```

## Dynamic Routes

Next.js makes it easy to create dynamic routes. Depending on if and how you want those pages to be prerendered will determine how you set them up. We're going to focus on creating dynamic routes that will not be built at build time but instead at run time on the server.

So to create a dynamic route, we can create a file that looks like this:

```text
[id].jsx
```

Where `id` is the name of the parameter. You can name it whatever you want. Those brackets are not a typo or a placeholder; that's the syntax to create a dynamic route using file name conventions in the pages directory. So let's create our note route:

```text
pages
  notes
    index.jsx
    [id].jsx
```


![200](../Attachments/Pasted%20image%2020230124172105.png)

We can access the `id` param inside our page component using the `useRouter` hook from the `next/route` module. This comes for free with Next.js.

```jsx
// inside pages/notes/[id].jsx
import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}
```

## Catch-all-routes
What's a catch-all route, you say? Think of a glob.

```text
this/folder/**
```

We can do the same with our dynamic routes! All we need is to create a file in our pages directory like this:

```text
docs/[...param].jsx
```

>So the ellipsis `...` is used in this example to same that this file will represent and route that matches `/docs/a` or `docs/a/b` or `docs/a/b/c/d/a/b`. You get the point. You can then access all the params the same way you do with a single route param. The only difference is the value will be an array of the params in order.

```jsx
// inside pages/notes/[...params].jsx
import React from 'react'
import { useRouter } from 'next/router'

export default () =%3E {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
        %3Ch1>Catch all: {params} </h1>
    )
}
```

If you want to include the parent path in your catch-all route, you can use an **optional catch-all route**.

```text
docs/[[...param]].jsx
```

>So when would you use catch-all routes? I find them useful for when you have a bunch of pages that have pretty similar if not identical layouts and style but have different content and need their own URL. Such things like docs and wikis are a perfect use case.

## Non-pages

So pages are special, but what about when you just need a component? Next.js doesn't have any conventions or opinions about that. The community usually creates a `/src/components` folder where all the components live.

# Navigation

Next.js has a few tricks up its sleeve to help us navigate between pages.

## Link component

Similar to an `<a>` tag, we can use the `Link` component from then `next/link` module.

```jsx
<Link href="/settings">
  <a>settings</a>
</Link>
```

There Link component allows you to do **client-side** routing. This is important because if you don't want that or are linking to another site, then you should just use an `a` tag instead.

