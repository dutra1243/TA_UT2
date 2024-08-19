function duplicates(Array) {
    let duplicates = []
    let cant = 0
    Array.forEach(element => {
        if (duplicates.includes(element)) {
            cant += 1
        }
        else {
            duplicates.push(element)
        }
    })
    console.log(cant)
}
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]

duplicates(Array) // 4