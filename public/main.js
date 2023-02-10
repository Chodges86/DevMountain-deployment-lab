console.log("Connected")

const button = document.getElementById('button')

function alertMessage() {
    const h1 = document.querySelector('h1')
    h1.textContent = "Bite My Shiny Metal Ass!"
}

button.addEventListener('click', alertMessage)