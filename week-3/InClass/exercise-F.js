const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function calculateAge(birthYear) {
    return 2022 - birthYear
}




function getCanDrive(ages) {
    const age = calculateAge(birthYear)
    const drivingAge = 17;
    if (ages >= drivingAge) {
        return `Born in ${birthYear} can drive`
    } else {
        return `Born in ${birthYear} can drive in ${drivingAge - age} years`
    }
}

const ages = []

birthYears.forEach((birthYear) => {
    ages.push(getCanDrive(birthYear))
})

const agesMap = birthYears.map(getCanDrive)

console.log(agesMap);
