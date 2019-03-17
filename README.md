# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The first thing that happens when you type in "https://www.techtonic.com/" is that your browser (Chrome, Firefox, Edge, etc...) will check to see if it's been there before, and if it has the url's corresponding IP address - sort of like checking your contacts list to see if you have the phone number for somone; it's easier to remember their name than their specific number. IP addresses are to URLs as phone numbers are to people.
If your browser doesn't have the IP address stored in its cache, the browser will check if it's in the OS's cache.
If not, the browser checks to see if the IP address is stored on your router.
If all of that searching turns up nothing, the browser will then contact the internet service provider's DNS server (domain naming system -- the system that assigns IP addresses to domain names like techtonic.com). If it doesn't have it stored, the ISP's DNS server will search the leveled domain servers for the IP address for "techtonic.com".
When the IP address is finally retrieved, the browser initiates contact with the server at that IP address (176.34.241.253) using the Transmission Control Protocol. Your browser then sends a request to the web server, and your browser will receive a response from the web server, which is all the data that makes the techtonic.com page display and function.


## From start to finish, how does data reach you to be rendered in the browser?

When the request is sent from the client, the server responds with the data that's needed to render the page in the browser: the HTML, CSS, and JavaScript. However, it doesn't come in as HTML, CSS, & JS code; the client receives the information in bytes. The browser can then interpret those bytes as characters.
Depending on the file extension (.html, .css, etc.), the browser will then parse the resulting characters into "tokens", which enable the browser to interpret the file as meaningful instruction. For HTML, the tokens represent nodes within the DOM (Document Object Model), which contains all the information for what type of nodes we're dealing with and the parent-child relationship between nodes (e.g., a table element `<table>` with table row `<tr>`  children elements, each with their own child table data `<td>` elements).
If the page you're requesting only has HTML to deliver, then the process of rendering is done once the DOM makes it to the screen with browser engine-defined styling, and you'll be looking at a very plain page. However, most pages will be styled with a separate CSS file, which has been through the same bytes-to-characters-to-tokens-to-nodes-to-object model (CSSOM). In this case, as the browser is creating the DOM from the HTML, it looks for a <link> tag to search for the CSS file, which defines the style applied to all those HTML nodes rendered on the screen. The browser then puts the DOM and CSSOM models together to create the "render tree", which is what the browser actually puts up on the screen.
Most pages will have some additional JavaScript. Within an HTML file, a `<script>` tag will contain JavaScript code that will be executed by the browser (which has the ability to modify the DOM and the CSSOM). But the when the browser encounters a `<script>` tag,  it will _not_ continue to create the DOM from the HTML, but execute the code within the script tag _before_ continuing to create the DOM. So, the placement of `<script>` tags within HTML **will** have consequences on the performance of the page. 



## What code is rendered in the browser?

HTML is rendered in the browser, with styling instructions from CSS, and potential modifications of both content and style with JavaScript.

## What is the server-side code’s main function?

The server-side code's main function is to interpret client requests, process them, and send the appropriate information as a response. It can act as a mediary between the client and private information the client can see the _results_ of, but not the entire _content_ of, like databases, or proprietary algorithms.

## What is the client-side code’s main function?

Client-side code's main function is to present styled data (HTML + CSS), provide functionality to the pages' components (JS), accept user input, and make requests to, and interpret responses from, the server.

## What is runtime?

Runtime is a compound word made from "run" and "time" -- basically, the "time" in which a program is being "run". A program in runtime is currently being executed. 

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

It really depends: The browser tries to cache static assets to spead up load time and reduce network traffic; on the first visit, everything will be created once. On subsequent visits, the response from the server is checked for any changes, and if there are, those new assets are also created locally, once. 
If you clear your cache, then the next time you hit that url, the browser will be creating the assets from scratch again.

## How many instances of the server-side code are available at any given time?

However many servers are operating with that code. Larger, heavier-traffic sites will need multiple servers to handle the amount of requests. A small site may only have one.

## How many instances of the databases connected to the server application are created?
If the server connects to a database at all, then at least one schema + database is instantiated. Backup databases can be configured, in which case there could be multiple database instances. 
