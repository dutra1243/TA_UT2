const input = document.getElementById("input")
const lista = document.getElementById("lista")

const people = [
    `Carlos`,
    `Juan`,
    `Pedro`,
    `Maria`,
    `Jose`,
    `Jorge`,
    `Luis`,
    `Manuel`,
    `Ana`,
    `Rosa`,
    `Charlie`,
    `Miguel`,
    `Pablo`,
    `Lucas`
]

for (const person of people) {
    const li = document.createElement("li")
    li.textContent = person
    lista.appendChild(li)
}

input.addEventListener("input", filter)

function filter() {
    const value = input.value.toLowerCase()

    for (const elem of lista.children) {
        if (elem.textContent.toLowerCase().startsWith(value)) {
            elem.style.display = "list-item"
        }
        else {
            elem.style.display = "none"
        }

    }

}


