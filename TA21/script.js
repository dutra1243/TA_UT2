const input = document.getElementById("input")

input.addEventListener("focusin", focused)
input.addEventListener("focusout", unfocused)
const previous = input.style.border

function focused() {
    input.style.border = "5px solid black"

}

function unfocused() {
    input.style.border = previous

}