const express = require('express')
const bootstrap = require('./bootstrap.js')
const routes = require('./routes.js')

const PORT = process.env.PORT || 8080
const app = express()

bootstrap(app)

app.use('/', routes)

app.listen(PORT, err => {
  if (err) console.log(err)
  console.log(`Listening on port ${ PORT }`)
})