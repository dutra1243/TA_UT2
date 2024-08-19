function getSum(Array) {
    let sum = 0
    Array.forEach(element => {
        sum += element

    })
    console.log(sum)
}

getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55