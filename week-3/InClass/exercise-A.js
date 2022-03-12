const peopleInClass = ['Bob', 'Dela', 'Ali', 'Seth', 'Mary' ]

console.log(peopleInClass);
console.log(peopleInClass.length);

const newName = 'Dela'
peopleInClass.unshift(newName)
peopleInClass.push(newName)

console.log(peopleInClass);
console.log(peopleInClass.length);