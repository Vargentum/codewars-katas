/*
The challenge is to write the function isAnagram 
to return True if the word test is an anagram 
of the word original and False if not.

Algo:
  - reduce test to letters objectA
  - reduce original to objectB
  - compare each objects

  addition:
  - toLowerCase
  - keep only letters: remove whitespaces, punctuation marks, numbers.

  - make extended exsistence check ()
*/

function isAnagram (test, orig) {

  function reduceToLetters (str) {
    return str.toLowerCase()
              .replace(/[^a-z0-9]*/g, "")
              .split("")
              .reduce((acc, l) => {
                 !acc[l] ? acc[l] = 1 : acc[l] += 1
                 return acc
               }, {})
  }
  
  let testLetters = reduceToLetters(test)
  let origLetters = reduceToLetters(orig)

  if (Object.keys(testLetters).length !== Object.keys(origLetters).length) {
    return false
  }

  for (let key in origLetters) {
    if (origLetters[key] !== testLetters[key]) {
      return false
    }
  }
  return true
}
// console.log(isAnagram("William Shakespeare","I am a weakish speller"));
// console.log(isAnagram('{;eo]ls ', '{;e!]ls '));


/*
  Expirience:
    - sort string with Array.prototype.sort() method
    - compare two sorted strings
  minor
    - replace [a-zA-Z0-9] width \w
*/
function isAnagramBetter (test, orig) {
  
  function normalize (str) {
    return str.replace(/[^\w]*/g, "")
              .toLowerCase()
              .split("")
              .sort()
              .join("")
  }
  return normalize(test) === normalize(orig)
}

// console.log(isAnagramBetter("William Shakespeare","I am a weakish speller"));
// console.log(isAnagramBetter('{;eo]ls ', '{;e!]ls '));
