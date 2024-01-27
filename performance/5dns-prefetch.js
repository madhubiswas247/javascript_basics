/*

dns-prefetch
<link rel="dns-prefetch"> asks the browser to perform a DNS resolution
 of a domain in advance. It’s helpful when you know you’ll connect to 
 that domain soon, and you want to speed up the initial connection.
A browser has to perform a DNS resolution when it connects to a new 
third-party domain. (A third-party domain is a domain that’s different
from the one your app is hosted on.) This may happen when your site uses 
a font from Google Fonts, loads React from a CDN, or requests a JSON response 
from your API server.
For each new domain, resolving the DNS record usually takes around 20-120 ms. 
It only affects the first resource downloaded from that domain, but it still matters. 
If you perform a DNS resolution in advance, you’ll save that 
time and load that resource faster.

Example
<link rel="dns-prefetch" href="https://api.my-app.com" />
href points to the domain name you want to resolve. The scheme doesn’t 
matter – both https://api.my-app.com and //api.my-app.com would work fine.

When to use
Use it for domains you’ll need shortly. <link rel="dns-prefetch" /> 
will help you when you have some important resources on third-party 
domains the browser doesn’t know about in advance. For example:
Your app is hosted at my-app.com, and it makes AJAX requests to api.my-app.com
.The browser doesn’t know that you’ll be making requests to that domain – 
because you make them from JS.
Use <link rel="dns-prefetch"> to resolve api.my-app.com and make the first 
data request faster
Your app is hosted at my-app.com, and it uses Google Fonts. Google Fonts load 
fonts in two stages: first, a CSS file is downloaded from fonts.googleapis.com; 
then, that CSS file requests fonts from fonts.gstatic.com.

The browser doesn’t know that you’ll load fonts from fonts.gstatic.com, so use 
<link rel="dns-prefetch"> to resolve it in advance
Use it to slightly speed up some third-party script or style. If you have a 
third-party resource in the page that you really need to load sooner, 
add <link rel="dns-prefetch" /> for that domain. It will instruct the 
browser to schedule DNS resolution for that domain sooner.

Note on <link rel="dns-prefetch" /> and <link rel="preconnect" />. 
Using both of these tags for the same domain is not really useful –
 <link rel="preconnect" /> already includes everything <link rel="dns-prefetch" /> 
 does, and more. However, it can still make sense in two cases:

You want to support older browsers. <link rel="dns-prefetch" /> is supported 
starting from IE10 and Safari 5. <link rel="preconnect" /> has been supported in 
Chrome and Firefox for a while, but was added to Safari only in 11.1, and isn’t 
supported in IE/non-Chromium Edge. If you need to support those browsers, use 
<link rel="dns-prefetch" /> as a fallback for <link rel="preconnect" />.
You want to speed up more than 4-6 domains. It’s not recommended to use 
<link rel="preconnect" /> with more than 4-6 domains, as opening and keeping a 
connection is an expensive operation. <link rel="dns-prefetch" /> is more lightweight, 
so use it for other third-party domains if you want to speed them up too.

*/