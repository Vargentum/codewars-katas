/*
In Russia, there is an army-purposed station named UVB-76 or "Buzzer" 
Transmitted messages have always the same format like this:

MDZHB 01 213 SKIF 38 87 23 95
or:
MDZHB 80 516 GANOMATIT 21 23 86 25

Message format consists of following parts:

Initial keyword "MDZHB";
Two groups of digits, 2 digits in first and 3 in second ones;
Some keyword of arbitrary length consisting only of uppercase letters;
Final 4 groups of digits with 2 digits in each group.
*/

function validate (message) {
  let validator = /\bMDZHB\s\d{2}\s\d{3}\s[A-Z]+(\s\d{2}){4}\b/
  return validator.test(message)
}

// console.log(validate("Is this a right message?"))
// console.log(validate("MDZHB 85 596 KLASA 81 00 02 91"))
// console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32"))
// console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54"))


/*Tips:
  use /^pattern$/ - to search from start (^) to end ($) of the string.
  maybe use " " spaces instead of \s ?
*/