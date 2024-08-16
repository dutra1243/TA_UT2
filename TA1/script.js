function funcionDelLoro(string, cant) {
    for (let i = 0; i < cant; i++) {
        console.log(string);
    }
}

function funcionDelLoroMejorada(string, cant) {
    console.log((string + "\n").repeat(cant))
}
funcionDelLoro("Hola", 5)

funcionDelLoroMejorada("tchau", 5)