function leapYears(year) {
    if (year % 4 === 0) {
        return true
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true
    }
    return false
}

console.log(leapYears(2000)) // true

console.log(leapYears(2004)) // true

console.log(leapYears(2003)) // false

console.log(leapYears(2005)) // false