console.log("Connected")

const button = document.getElementById('button')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '565a491f405b4f978ed6073d0dc3cef3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

function alertMessage() {
    const h1 = document.querySelector('h1')
    h1.textContent = "Bite My Shiny Metal Ass!"
    rollbar.info("Somebody clicked the button! HAHA!")
}

button.addEventListener('click', alertMessage)