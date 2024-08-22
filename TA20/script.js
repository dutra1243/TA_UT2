const notSpooky = document.getElementById('notSpooky')
const rutaBuena = notSpooky.getAttribute("src")
console.log(rutaBuena)

notSpooky.addEventListener("mouseenter", SCARE)
notSpooky.addEventListener("mouseleave", NOTSCARE)

function SCARE() {
    notSpooky.setAttribute("src", "spread_the_word_by_freshdecimate_dfewmd8-375w.jpg")
}

function NOTSCARE() {
    notSpooky.setAttribute("src", rutaBuena)
}

