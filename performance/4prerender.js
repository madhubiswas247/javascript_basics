/*
prerender
<link rel="prerender"> asks the browser to load a URL and render it in an
 invisible tab. When a user clicks on a link to that URL, the page should 
 be rendered immediately. It’s helpful when you’re really sure a user will 
 visit a specific page next, and you want to render it faster.

Despite (or because of?) its power, in 2019, <link rel="prerender"> has
 bad support in major browsers. See More details for more.

Example
<link rel="prerender" href="https://my-app.com/pricing" />
href points to the URL you want to render in the background.

When to use
When you’re really sure a user will go to some page next. If you have a
 conversion funnel where 70% of visitors go from page A to page B, 
 <link rel="prerender" /> in page A might help to render page B super-quickly.
Don’t overuse it. Pre-rendering a page is extremely costly – both in terms
 of traffic and memory. Don’t use <link rel="prerender" /> for more than one page.

More details
Not mandatory. The browser is not required to follow a <link rel="prerender"> 
instruction. This means it can decide not to perform the prerender – e.g., 
if the memory is low, or the connection is slow.
Chrome doesn’t do a full render. Instead of a full render, Chrome makes a
 NoState Prefetch to save memory. This means Chrome downloads the page 
 and all subsequent resources, but doesn’t render it or execute JavaScript.
Firefox and Safari don’t support this tag at all. This doesn’t break the
 specification, as browsers are not required to act on the tag; but this
  is still quite sad. Firefox has an implementation bug which has been open 
  for 7 years; and there are reports that state Safari doesn’t support it too.
*/