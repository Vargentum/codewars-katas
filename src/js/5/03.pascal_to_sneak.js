/*
Complete the function/method so that it takes 
CamelCase string and returns the string in 
snake_case notation. 

Lowercase characters can be numbers. If method gets number, it should return string


Algo:
  - get all Up chars with regex
  - process each char with regex.eval
  - convert to lower and add underscore if isn't first

*/


function toUnderscore(str) {
  if (typeof str === 'number') return `${str}`

  let upCharsPtrn = /[A-Z]/g
  let occurs
  let result = str.split("")
  
  while ((occurs = upCharsPtrn.exec(str)) !== null) {
    let char = result[occurs.index]
    char = occurs.index === 0 ? char.toLowerCase() : `_${char.toLowerCase()}`
    result.splice(occurs.index, 1, char)
  }
  return result.join("")
}

console.log(toUnderscore('CamelCasedString'))
console.log(toUnderscore('CamelCasedString'))
console.log(toUnderscore('CamelCasedString'))
console.log(toUnderscore('CamelCasedString'))
console.log(toUnderscore('coFAFdfs134'))
console.log(toUnderscore(12))


/*Enlighten:

  - use to lowercase for all string
  - use pattern ?= to find all letters except first one
*/
function toUnderscoreBetter(str) {
  return str.toString().split(/(?=[A-Z])/).join('_').toLowerCase()
}