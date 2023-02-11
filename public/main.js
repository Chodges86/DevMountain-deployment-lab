console.log("Connected")

const button = document.getElementById('button')

function alertMessage() {
    const h1 = document.querySelector('h1')
    axios
    .get("http://localhost:4000/api/message")
    .then((res) => h1.textContent = res.data)
    
}

button.addEventListener('click', alertMessage)