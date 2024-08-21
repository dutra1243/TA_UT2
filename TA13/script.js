let cant = 0
function updateText() {
    p.textContent = "Texto Cambiado " + cant
    cant++
}
const p = document.getElementById("changeText")
const button = document.getElementById("button")

button.addEventListener("click", updateText)
