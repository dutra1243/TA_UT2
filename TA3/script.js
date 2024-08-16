function removeFromArray(arr, elem) {
    let index = arr.indexOf(elem)
    arr.splice(index, 1)
    console.log(arr)
}

let array = [1, 2, 3, 4]
removeFromArray(array, 3)