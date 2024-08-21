const button = document.getElementById("toggleShow")
const text = document.getElementById("text")
let state = false

button.addEventListener("click", toggleShow)

function toggleShow() {
    if (state) {
        text.textContent = ""
        state = false
    } else {
        text.textContent = "BOOOO!!!!"
        state = true
    }
}