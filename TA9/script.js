function getOdds(Array) {
    Array.forEach(element => {
        if (element % 2 != 0) {
            console.log(element)
        }
    })
}

getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])