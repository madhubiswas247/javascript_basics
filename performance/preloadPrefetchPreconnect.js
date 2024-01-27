/*
There’re lots of ways to improve web performance .
 One of those ways is to preload content you’ll need later in advance.
  Prefetch a CSS file, prerender a full page, or resolve a domain
   ahead of time – and you won’t have to wait for it when it’s actually needed! Sounds cool.

What’s even cooler is that browsers have a simple built-in way to do
 all these things. There’re six <link rel> tags that instruct the browser to preload something:

<link rel="prefetch" href="/style.css" as="style" />
<link rel="preload" href="/style.css" as="style" />
<link rel="preconnect" href="https://example.com" />
<link rel="dns-prefetch" href="https://example.com" />
<link rel="prerender" href="https://example.com/about.html" />
<link rel="modulepreload" href="/script.js" />

preload – when you’re going to need a resource in a few seconds(right after page load)
prefetch – when you need a resource for the next page
preconnect – when you know you’ll need a resource soon, but you don’t know its full url yet
dns-prefetch – when you know you’ll need a resource soon, but you don’t know its full url yet (for older browsers)
prerender – when you’re certain most users will navigate to a specific page, and you want to speed it up
modulepreload – when you’re going to need an ES module script soon
*/