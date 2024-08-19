function findTheOldest(peopleArray) {
    let person = peopleArray[0];
    for (let i = 1; i < peopleArray.length; i++) {
        if (peopleArray[i].yearOfBirth < person.yearOfBirth) {
            person = peopleArray[i]
        }
    }
    console.log(person)
    return person
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

findTheOldest(people)
