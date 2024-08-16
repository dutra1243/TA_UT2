function sumAll(fst, scnd) {
    let sum = 0
    for (let i = fst; i <= scnd; i++) {
        sum += i
    }
    console.log(sum)
}

sumAll(1, 3) // 6

sumAll(1, 4) // 10

sumAll(1, 5) // 15

sumAll(1, 6) // 21