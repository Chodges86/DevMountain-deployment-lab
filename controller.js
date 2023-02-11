
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '565a491f405b4f978ed6073d0dc3cef3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {

    nonExistentFunction: () => {
        try {
            nonExistentFunction()
        } catch (err) {
            rollbar.error("api/try is an endpoint with a non-existent function")
        }
    }
}