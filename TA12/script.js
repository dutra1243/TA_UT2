function generatePassword(largo) {
    if (largo < 8)
        return generatePasswordAux(8)
    else
        return generatePasswordAux(largo)
}

function generatePasswordAux(largo) {
    let pass = []
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    /*0  ...                  25 26 ....                51 52 ...  61*/
    // console.log(caracteres[0] A
    //     + caracteres[25]      Z
    //     + caracteres[26]      a
    //     + caracteres[51]      z
    //     + caracteres[52]      0
    //     + caracteres[61]      9)

    pass.splice(Math.random(), 0, caracteres[Math.floor(Math.random() * (25 - 0 + 1)) + 0]) // A-Z
    pass.splice(Math.random(), 0, caracteres[Math.floor(Math.random() * (51 - 26 + 1)) + 26]) // a-z
    pass.splice(Math.random(), 0, caracteres[Math.floor(Math.random() * (61 - 52 + 1)) + 52]) // 0-9
    while (pass.length < largo) {
        pass.splice(Math.random(), 0, caracteres[Math.floor(Math.random() * (61 - 0 + 1)) + 0])
    }
    console.log(pass.join(''))
}

generatePassword(15)
