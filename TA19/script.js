const nombre = document.getElementById("nombre")
const errName = document.getElementById("error name")

const passw = document.getElementById("passw")
const errPassw = document.getElementById("error password")

const email = document.getElementById("email")
const errEmail = document.getElementById("error email")

const btn = document.getElementById("submit")

nombre.addEventListener("input", validateName)
passw.addEventListener("input", validatePassword)
email.addEventListener("input", validateEmail)

btn.addEventListener("click", validateForm)

function validateName() {
    if (nombre.value === "") {
        if (errName.lastChild.id === "error empty") {
            return false
        }
        const p = document.createElement("p")
        p.textContent = "*El campo no puede estar vacío"
        p.id = "error empty"
        errName.appendChild(p)
        return false
    }
    for (const child of errName.children) {
        if (child.id.startsWith("error")) {
            errName.removeChild(child)
        }
    }
    return true
}

function validatePassword() {
    if (passw.value.length < 8) {
        if (errPassw.lastChild.id === "error length") {
            return false
        }
        const p = document.createElement("p")
        p.textContent = "*La contraseña debe tener al menos 8 caracteres"
        p.id = "error length"
        errPassw.appendChild(p)
        return false
    }
    for (const child of errPassw.children) {
        if (child.id.startsWith("error")) {
            errPassw.removeChild(child)
        }
    }
    return true
}

function validateEmail() {
    if (email.value === "") {
        if (errEmail.lastChild.id === "error empty") {
            return false
        }
        const p = document.createElement("p")
        p.textContent = "*El campo no puede estar vacío"
        p.id = "error empty"
        errEmail.appendChild(p)
        return false
    }
    for (const child of errEmail.children) {
        if (child.id.startsWith("error")) {
            errEmail.removeChild(child)
        }
    }
    return true
}


function validateForm() {
    if (validateName() & validatePassword() & validateEmail()) {
        prompt("Formulario enviado con éxito")
    }
    else {
        prompt("Formulario no enviado")
    }
}