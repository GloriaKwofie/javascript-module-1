const classMates = ['Matthew', 'Rachid', 'Methap', 'Aisha']
const otherClass = ['Vanessa', 'Linda', 'Javi', 'Diego']

const combinedArray = classMates.concat(otherClass)


function ourClassMates(name, array) {
    if (array.includes(name)) {
        return `${name} is at class with ${array.join(', ')}.`    
    } else {
        return `${name} is not at class with ${array.join(', ')}.`
    }
}

console.log(combinedArray.sort());