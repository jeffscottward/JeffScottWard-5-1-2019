const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// NOTE:
// app.render = SERVER SIDE RENDERING

app.prepare().then(() => {
  const server = express()

  // Serve /pages/a.js with any params attached ?param1=XXX&param2=YYY
  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  // Serve /pages/b.js with any params attached ?param1=XXX&param2=YYY
  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  // Serves all files
  server.get('/docs', (req, res) => {
    // Performs logic to fetch all files
    // res.send(msqlContent)
  })

  // Serves a file of a certian id
  server.get('/docs/:id', (req, res) => {
    // Performs logic to fetch relevant doc by ID
    // *IN NEXTJS*, you can send back blob 
      // res.send(msqlContent)
    //or
    // render a detail view such pages/docs.js
      // return app.render(req, res, '/docs/', req.query)
  })

  // POSTS a file to the /upload endpoint
  server.post('/upload', (req, res) => {
    // Performs logic to persist uploaded doc
    // If ok
      // res.status(200).send('OK') 
  })

  // Fallback request handler
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // Spin up application
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})