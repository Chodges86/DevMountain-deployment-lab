const express = require('express')
const controller = require('./controller')

const app = express()

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '565a491f405b4f978ed6073d0dc3cef3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get("/api/try", controller.nonExistentFunction)

app.listen(4000, () => console.log("Server up on 4000"))