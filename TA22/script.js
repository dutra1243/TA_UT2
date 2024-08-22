const p = document.getElementById("parent")



window.addEventListener("resize", changedSize)

function changedSize() {
    p.textContent = window.innerWidth + "x" + window.innerHeight
}