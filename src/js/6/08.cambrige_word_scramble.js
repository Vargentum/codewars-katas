/*
Your task is to create a function that can take any string
and randomly jumble the letters within each word 
while leaving the first and last letters of the word in place.

- All punctuation should remain in place
- Words smaller than 3 letters should not change
- Letters must be randomly moved 
    (and so calling the function multiple times with the same string should return different values
- Parameters that are not strings should return undefined


Test Cases:
- check that the string returned is not equal to the string passed 
  (you may have to revalidate the solution if your function randomly returns the same string)
- check that first and last letters of words remain in place
- check that punctuation remains in place
- checks string length remains the same
- checks the function returns undefined for non-strings
- checks that word interiors (the letters between the first and last)
  maintain the same letters, albeit in a different order
- checks that letters are randomly assigned.



Algo: 
  - check input type
  - get each word
  - replace with 
  - loop through letters
  - if not first and not last
  - insert to random position from second to pre-last
  - get random from last

  now: insert random letter from word body
  need: check 

  getRandom while letter is 
*/



function mixWords (str) {
  if (typeof str !== "string") return

  return str.replace(/[a-я]+/ig, (word) => {
    let min = 1
       ,max = word.length - 2
       ,res = []

    word.split("")
        .forEach((x, i) => {
          let rand = Math.floor(Math.random() * (max - min) + min)
          if (i < min || i > max) {
            res.push(x)
            return
          }
          res[rand] ? res.push(x) : res[rand] = x
       })
    return res.join("")
  })
}

// console.log(mixWords("Утверждения из Интернета правы в той своей части, что некоторые слова с переставленными буквами действительно достаточно просты для понимания. Но наши исследования доказали, что перестановки букв в словах влекут за собой изменение значения слова."))
// console.log(mixWords("В этой статье мы приводим результаты исследований, показывающие, что, хотя некоторые варианты предложений с переставленными буквами довольно просты для чтения и восприятия, к иным вариантам это не относится, и что в общем всегда необходимо приложить определенные усилия для чтения текста, содержащего слова с переставленными буквами."))
// console.log(mixWords("Но главный вывод из наших исследований заключается в том, что, хотя перестановка букв позволяет довольно легко читать и воспринимать прочитанное, чтение такого текста всегда требует особых усилий по сравнению с чтением нормального текста."))
