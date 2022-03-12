const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function calculateAge(birthYear) {
    return 2022 - birthYear
}

const ages = []

birthYear.forEach((birthYear) => {
    ages.push(calculateAge(birthYear))
})

console.log(birthYear);
console.log(ages);





