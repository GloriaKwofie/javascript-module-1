const names = ['Daniel', 'Matthew', 'Irina', 'James']

const Name_To_Find = 'James'
function findName(names) {
   if (names.includes(Name_To_Find)){
       return 'Found Me'

   } 
   return 'Havent fount me'
}

console.log(findName(names));
