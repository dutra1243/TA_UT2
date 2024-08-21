const button = document.getElementById("clicker")
const text = document.getElementById("cant")
let cant = 0

button.addEventListener("click", changeValue)

function changeValue() {
    cant++
    text.textContent = cant
}

