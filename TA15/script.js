const button = document.getElementById("button")
const remove = document.getElementById("remove")
const input = document.getElementById("textarea")
const lista = document.getElementById("list")

button.addEventListener("click", addElement)
remove.addEventListener("click", removeElement)

function removeElement() {
    lista.removeChild(lista.lastChild)
}

function addElement() {
    const li = document.createElement("li")
    li.textContent = input.value
    lista.appendChild(li)
    input.value = ""
}