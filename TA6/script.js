function convertToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}

function convertToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

console.log(convertToFahrenheit(31));

console.log(convertToCelsius(212)); // 100