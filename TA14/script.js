const button = document.getElementById("button")
const input = document.getElementById("textarea")
const lista = document.getElementById("list")

button.addEventListener("click", addElement)

function addElement() {
    const li = document.createElement("li")
    li.textContent = input.value
    lista.appendChild(li)
    input.value = ""
}