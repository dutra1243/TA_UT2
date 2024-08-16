function reverseString(string) {
    let s = string.split('')
    let reverse = s.reverse().join('')
    // let palabra = ""
    // for (const str in reverse) {
    //     palabra += str
    // }
    console.log(reverse)
}

reverseString("Hola")