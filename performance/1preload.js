/* traditionally (if we don't use preload) browser load
the resources when they actually see the request . if we use preload, the browser 
load all your resources as early as possible (i.e. usually right 
    after document load) all in parallel fashion. 

<link rel="preload"> tells the browser to download and cache a
 resource (like a script or a stylesheet) as soon as possible. It’s 
 helpful when you need that resource a few seconds after loading the page,
  and you want to speed it up.

The browser doesn’t do anything with the resource after downloading it.
 Scripts aren’t executed, stylesheets aren’t applied. It’s just cached –
  so that when something else needs it, it’s available immediately.

Example
<link rel="preload" href="/style.css" as="style" />

href points to the resource you want to download.
as can be anything you can download in a browser:

style- for stylesheets,
script- for scripts,
font- for fonts,
fetch -for resources downloaded with fetch() or XMLHttpRequest,
other values – see the full list on MDN
It’s important to specify the as attribute – 
it helps the browser to prioritize and schedule the download properly.


When to use
Use it when you’ll need a resource soon. <link rel="preload"> will help 
when you know you’ll need a resource soon after loading the page, and you 
want to start loading it earlier. For example:

1. You use custom fonts. The @font-face rule that applies those fonts is in an external CSS file:

<!-- index.html -->
<link rel="stylesheet" href="index.css" />

// index.css 
@font-face {
    src: url('comic-sans.woff2') format('woff2');
}

By default, comic-sans.woff2 will start downloading only when index.css is fetched and 
applied. Instead of waiting for it that long, use <link rel="preload"> to initiate 
the download sooner:

<link rel="preload" href="comic-sans.woff2" as="font" />

2. You split your styles per the Critical CSS approach. With this approach, you’ll 
split your CSS into two parts – critical (required for immediate rendering) and non-critical:

<style>
// Inlined critical styles 
</style>

<script>
 //  Custom JS that starts downloading non-critical styles 
  loadCSS('/app/non-critical.css');
</script>
With this approach, non-critical styles will start downloading only when 
JavaScript starts executing – which can be a few seconds after the first render.
 Instead of waiting for JS to execute, use <link rel="preload"> to
  initiate the download sooner:

<style>
  // Inlined critical styles 
</style>

<link rel="preload" href="/app/non-critical.css" as="style" />

<script>
  //Custom JS that starts downloading non-critical styles 
  loadCSS('/app/non-critical.css');
</script>

Don’t overuse it. Preloading everything won’t magically speed up the site 
– instead, it will likely prevent the browser from scheduling everything smartly.

Don’t confuse with prefetch. Don’t use <link rel="preload">
 if you don’t need a resource immediately after the page loads. 
 If you only need it later – e.g., for a next page – use <link rel="prefetch">
*/