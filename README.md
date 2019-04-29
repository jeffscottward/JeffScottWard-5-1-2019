# Jeff Ward - 5/1/2019

## Installation
npm install
npm run dev
# or
yarn
yarn dev

## Security
// List security concerns:
// - that have been addressed
// - that have *not* been addressed

## Improvements
// What could be added to the app / API?

## Libraries
// What external libraries have you used and why?

## API
// Any general observation about the API?
// document each endpoint using the following template: ```

### GET /resources
// Description of the endpoint:
// - what does the endpoint do?
// - what does it return?
// - does it accept specific parameters? ```

---

## Other notes

NEXTJS --- 
The idea behind the example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/b` is requested and `pages/b.js` when the route `/a` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `server.js`.

