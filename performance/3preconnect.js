/*
preconnect
<link rel="preconnect"> asks the browser to perform a connection to a domain in advance
. It’s helpful when you know you’ll download something from that domain soon, but you 
don’t know what exactly, and you want to speed up the initial connection.
A browser has to set up a connection when it retrieves something from a new 
third-party domain. (A third-party domain is a domain that’s different from the 
    one your app is hosted on.) This may happen when a site uses a font from Google Fonts,
     loads React from a CDN, or requests a JSON response from an API server.

Setting up a new connection typically takes several hundred milliseconds.
 It’s only needed once per domain, but it still takes time. If you set up a connection 
 in advance, you’ll save that time and load resources from that domain faster.

Example
<link rel="preconnect" href="https://api.my-app.com" />
href points to the server you want to connect to.

WHEN TO USE:-
Use it for domains you’ll need shortly. <link rel="preconnect" />
 will help you when you have an important style, script, or image on a third-party domain,
  but you don’t know the resource URL yet. For example:

Your app is hosted at my-app.com, and it makes AJAX requests to api.my-app.com. 
You don’t know what specific requests you’ll be making to that domain – because
 you make them dynamically from JS.
Use <link rel="preconnect"> to connect to api.my-app.com in advance and make the 
first data request faster

Your app is hosted at my-app.com, and it uses Google Fonts. Google Fonts load fonts
 in two stages: first, a CSS file is downloaded from fonts.googleapis.com; 
 then, that CSS file requests fonts from fonts.gstatic.com.
You can’t know what specific font files from fonts.gstatic.com you’ll need
 until you download the CSS file from fonts.googleapis.com. Use <link rel="preconnect">
  to set up a connection in advance

Use it to slightly speed up some third-party script or style. If you have a 
third-party resource in the page that you really need to load sooner, 
add <link rel="preconnect" /> for that domain. It will instruct the browser
 to setup connection for that domain sooner.

Don’t overuse it. Setting up and keeping a connection open is costly –
 both for a client and a server. The simple rule of thumb is:
  use this tag for 4-6 domains at most.

More details
Not mandatory. The browser is not required to follow a <link rel="preconnect">
 instruction. This means it can decide not to set up a new connection – e.g., 
 if there’re already a lot of connections set up, or in some other case.

What the connection process includes. To connect to each site, a browser 
has to perform the following steps:

DNS resolution. Find a server’s IP address (216.58.215.78) for a specified domain name (google.com)
TCP handshake. Perform a roundtrip (a message goes client → server → client) to initiate a 
               TCP connection to a server
TLS handshake (only for HTTPS sites). Perform two roundtrips (a message goes 
    client → server → client → server → client) to initiate a secure TLS session
Note: this will change with HTTP/3 as it’s going to improve and speed up the
 connection mechanism. That’s still far ahead though.
*/