const express = require('express')
const next = require('next')
const fs = require('fs');

const formidable = require('formidable')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/posts/:id', (req, res) => {
  //   return app.render(req, res, '/posts', { id: req.params.id })
  // })

  server.post('/upload', (req, res) => {
    console.log(req)
    console.log(res)

    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file) {
      file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file) {
      console.log('Uploaded ' + file.name);
    });

    return handle(req, res)

    // let fileContent;
    
    // fs.readFile('./SampleState.json', function read(err, data) {
    //   if (err) {throw err;}
    
    //   fileContent = data;
    //   // console.log(fileContent);
    
    //   return handle(req, fileContent, '/', )
    // });
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
