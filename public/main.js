console.log("Connected")

const button = document.getElementById('button')

const { default: axios } = require('axios')

function alertMessage() {
    const h1 = document.querySelector('h1')
    axios
    .get("/api/message")
    .then((res) => h1.textContent = res)
    
}

button.addEventListener('click', alertMessage)