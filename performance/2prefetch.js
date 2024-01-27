/*
prefetch
<link rel="prefetch"> asks the browser to download and cache a resource
 (like, a script or a stylesheet) in the background. The download happens 
 with a low priority, so it doesn’t interfere with more important resources.
  It’s helpful when you know you’ll need that resource on a subsequent page, 
  and you want to cache it ahead of time.

The browser doesn’t do anything with the resource after downloading it. 
Scripts aren’t executed, stylesheets aren’t applied. It’s just cached – so that 
when something else needs it, it’s available immediately.

Example
<link rel="prefetch" href="/style.css" as="style" />
href points to the resource you want to download.

as can be anything you can download in a browser:

style for stylesheets,
script for scripts,
font for fonts,
fetch for resources downloaded with fetch() or XMLHttpRequest,
other values – see the full list on MDN
It’s important to specify the as attribute – it helps the browser to
 prioritize and schedule the download properly.

 WHEN TO USE:-

Use it for resources from other pages. <link rel="prefetch"> will help if you
 need a resource on a different page, and you want to preload it and speed up 
 rendering of that page. For example:

You have an e-commerce site, and 40% of your users go from the home page to a 
product page. Use <link rel="prefetch"> to download CSS and JS files responsible
 for rendering product pages.You have a single-page app, and you code-split it so that
  different pages load different bundles. When a user visits some page, ask your router
   what other pages it links to, and use <link rel="prefetch"> to preload bundles 
   for those pages
It’s probably safe to use it as much as you want. Browsers usually schedule
 prefetches with the lowest priority, so they don’t interfere with other resources
 . This means it’s probably safe to prefetch a lot of stuff. Keep in mind though
  that this will still use the user’s data – and there’s a chance that’ll cost them money!

Don’t use for urgent resources. Don’t use <link rel="prefetch"> when you’ll
 need a resource in a few seconds. In this case, use <link rel="preload"> instead.


 More details:-

Not mandatory. The browser is not required to follow the <link rel="prefetch">
 instruction. This means it can decide not to fetch the resource – e.g. 
 if the connection is slow.
Priorities in Chrome. In Chrome, <link rel="prefetch"> downloads are usually
 prioritized with the lowest priority (full table of priorities). This means 
 they are usually scheduled after everything else got loaded.

<link rel="next"> in Firefox. In Firefox, <link rel="next"> behaves just 
like <link rel="prefetch" as="document"> – it prefetches the linked HTML document.
 This is somewhat weird, and there’s a bug from 2002 arguing that this 
 should be disabled to avoid unnecessary server requests. Thankfully, there’s a
  way to disable this on a per-page basis. 
  (Thanks to Mike Harris for letting me know about this!)
*/