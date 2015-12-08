'use strict';

var uniqueInOrder = function uniqueInOrder(data) {

  function stringToArray(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charAt(i));
    }
    return result;
  }

  function rmDuplicationsFrom(arr) {
    return arr.filter(function (item, index, array) {
      return item !== array[index - 1];
    });
  }

  if (typeof data === 'string') {
    data = stringToArray(data);
  }

  return rmDuplicationsFrom(data);
};

uniqueInOrder('AAABBBBCIDSEEAA');
uniqueInOrder([1, 1, 3, 4, 4]);
uniqueInOrder(["A", "A", "a", "B", "A"]);

/*Requirememts:
  1. work with empty array
  2. work with one element
  3. reduce duplicates
  4. treat lowercase as different from uppercase
  5. work with int arrays
  6. work with char arrays
*/
"use strict";

/*Задача: 
удалить все повторяющиеся более X раз элементы массива, не меняя его порядок*/

/*Решение 1: работает, но двойной reverse это пиздец! найти решение проще.
*/

function deleteNth(arr, x) {

  function deleleDuplicationsFromStart(item, index, startArray) {
    var matches = [];

    startArray.slice(index).forEach(function (i) {
      if (i === item) {
        matches.push(item);
      }
    });

    return matches.length <= x ? true : false;
  }

  return arr.reverse().filter(deleleDuplicationsFromStart).reverse();
}

/*Решение 2: 
сохранять значения в дополнительный массив,
если встречается в массиве более X раз - удалить*/

function deleteNth(arr, x) {
  var cache = [];
}

deleteNth([1, 2, 3, 1, 2, 3, 1], 3); // [1,1,1,2] 1,1,2
"use strict";

/*
  Create the following functions

  square() must return a copy of the array, containing all values squared, the original array must not be changed
  cube() must return a copy of the array, containing all values cubed, the original array must not be changed
  average() must return the average of all array values, average() on an empty array must return NaN
  sum() must return the sum of all array values
  even() must return an array of all even numbers, the original array must not be changed
  odd() must return an array of all odd numbers, the original array must not be changed
*/

Array.prototype.square = function () {
  return this.map(function (i) {
    return Math.pow(i, 2);
  });
};

Array.prototype.cube = function () {
  return this.map(function (i) {
    return Math.pow(i, 3);
  });
};

Array.prototype.sum = function () {
  return this.reduce(function (a, i) {
    return a + i;
  }, 0);
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.even = function () {
  return this.filter(function (i) {
    return i % 2 === 0;
  });
};

Array.prototype.odd = function () {
  return this.filter(function (i) {
    return i % 2 !== 0;
  });
};

/*Tips:
  
  map, reduce, and filter doesn't mutate the array
  filter mechanism:
    - true? -> add to new array
    - false? -> no addition

  
  Status: exellent (good idea to realize `average` though `sum`)
*/
"use strict";

/*
Your task is to sort a given string.
Each word in the String will contain a single number.
This number is the position the word should have in the result.
*/

function order(str) {
  var pattern = /\d+/;

  return str.split(" ").sort(function (a, b) {
    return a.match(pattern) < b.match(pattern) ? -1 : 1;
  }).join(" ");
}

/*
Tip: you can simply substract a from b
a.match(pattern) - b.match(patterns)
*/

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// console.log(typeof order(""));
"use strict";

/*
Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *    
   ***   
  *****  
 ******* 
*********


Algo:
  - calc the foundation width
  - draw reverted tree
    - draw foundation
    - 
  - reverse array
  - join with \n

  5 white 1 star 5 white
  4 white 3 star 4 white

*/

function christmasTree(height) {
  var base = height * 2 - 1;
  var half = Math.floor(base / 2);
  var result = [];

  for (var i = 0; i < height; i++) {
    var spaceCount = half - i;
    result.push(" ".repeat(spaceCount) + "*".repeat(base - spaceCount * 2) + " ".repeat(spaceCount));
  }

  return result.join("\n");
}

console.log(christmasTree(20));
"use strict";

/*
Implement a function sometimes that takes
another funciton as an argument and returns
a new version of that function that will behave as the following:

// The first 3 tmes we call s it returns add's expected output
// But the 4th time it returns a default message 'hmm, I don't know!

// Each consecutive odd call returns add's expected output
// Each consecutive even call doesn't work and returns 'hmm, I don't know!'


Algo:
  make wrapper
  save count of function call
  check 1 equality (4) => after
  toggle check2 mark to true
  check2 equality

*/

function sometimes(fn) {
  var _this = this;

  var callCount = 0;
  var initStrange = false;
  var phrase = "hmm, I don't know!";

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callCount++;
    if (callCount === 4) {
      initStrange = true;
      return phrase;
    }
    if (callCount % 2 === 0 && initStrange) {
      return phrase;
    }
    return fn.apply(_this, args);
  };
}

var sum = function sum(a, b) {
  return a + b;
};

var sumStrange = sometimes(sum);

// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2)); // hmm, I don't know! (4)
// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2)); // hmm, I don't know! (consequence odd)

/*Tips:
  
  use equality operators strength
  use ternary to shorten
*/

function sometimes1(fn) {
  var i = 0;

  return function () {
    ++i;
    return i < 4 || i % 2 ? fn.apply(undefined, arguments) : "hmm, I don't know!";
  };
}

// let sumStrange1 = sometimes(sum);

// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2)); // hmm, I don't know! (4)
// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2)); // hmm, I don't know! (consequence odd)
"use strict";

/*
  Write function that sums ranges of ranges between its numbers

  summaryRanges([1,2,3,4]) === ['1->4']
  summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 20, 25]) === ["0->7", "20", "25"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
*/

/*
algorhytm:

*/

function summaryRanges(data) {
  var rawResults = [];

  var rmDuplications = function rmDuplications(item, idx) {
    return item !== data[idx + 1];
  };

  var getLinked = function getLinked(current, idx, arr) {
    var prev = arr[idx - 1] || current;
    var diff = current - prev;

    if (diff === 1) {
      rawResults[rawResults.length - 1] += "" + current;
    } else {
      rawResults.push("" + current);
    }
  };

  var collapseLinked = function collapseLinked(item) {
    if (item.length >= 2) {
      return item[0] + "->" + item[item.length - 1];
    } else {
      return item;
    }
  };

  data.filter(rmDuplications).forEach(getLinked);

  return rawResults.map(collapseLinked);
}

// console.log(summaryRanges([]));
// console.log(summaryRanges([1,1,1,1]));
// console.log(summaryRanges([1,2,3,4]));
// console.log(summaryRanges([0, 1, 2, 5, 6, 9]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]));
// console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]));
"use strict";

/*My desicion*/

Array.prototype.all = function (predicate) {
  for (var i = 0; i < this.length; i++) {
    if (!predicate(this[i])) {
      return false;
    }
  }
  return true;
};

Array.prototype.none = function (predicate) {
  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return false;
    }
  }
  return true;
};

Array.prototype.any = function (predicate) {
  for (var i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return true;
    }
  }
  return false;
};

/*Best practices: use filter*/
"use strict";
"use strict";

/*Description:

Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!*/

function factory(x) {
  function multiply(array) {
    return array.map(function (i) {
      return i * x;
    });
  }
  return multiply;
}

var fives = factory(5);
var myArray = [1, 2, 3];
fives(myArray); //[5, 10, 15]
"use strict";

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

function isAnagram(test, orig) {

  function reduceToLetters(str) {
    return str.toLowerCase().replace(/[^a-z0-9]*/g, "").split("").reduce(function (acc, l) {
      // !acc[l] ? acc[l] = 1 : acc[l] += 1  cause to warning
      return acc;
    }, {});
  }

  var testLetters = reduceToLetters(test);
  var origLetters = reduceToLetters(orig);

  if (Object.keys(testLetters).length !== Object.keys(origLetters).length) {
    return false;
  }

  for (var key in origLetters) {
    if (origLetters[key] !== testLetters[key]) {
      return false;
    }
  }
  return true;
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
function isAnagramBetter(test, orig) {

  function normalize(str) {
    return str.replace(/[^\w]*/g, "").toLowerCase().split("").sort().join("");
  }
  return normalize(test) === normalize(orig);
}

// console.log(isAnagramBetter("William Shakespeare","I am a weakish speller"));
// console.log(isAnagramBetter('{;eo]ls ', '{;e!]ls '));
"use strict";

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

function validate(message) {
  var validator = /\bMDZHB\s\d{2}\s\d{3}\s[A-Z]+(\s\d{2}){4}\b/;
  return validator.test(message);
}

console.log(validate("Is this a right message?"));
console.log(validate("MDZHB 85 596 KLASA 81 00 02 91"));
console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32"));
console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54"));

/*Tips:
  use /^pattern$/ - to search from start (^) to end ($) of the string.
  maybe use " " spaces instead of \s ?
*/
'use strict';

String.prototype.capitalize = function () {
   return this.trim().split(' ').map(function (word) {
      return word.replace(/^[a-z]/g, word.charAt(0).toUpperCase());
   }).join(' ');
};

// console.log('test som, string. ect ast arrow!'.capitalize())
"use strict";

function XO(str) {
  function convertToInt(arr) {
    return arr === null ? 0 : arr.length;
  }
  var x = str.match(/[xX]*/g);
  var o = str.match(/[oO]*/g);

  return convertToInt(x) === convertToInt(o) ? true : false;
}
"use strict";

function getCharacters(obj, key, val) {
  return obj.characters.filter(function (item) {
    return item[key] && item[key].toLowerCase() === val.toLowerCase();
  });
}

/*TODO: 
get object, which key equals some val (provided), else return []*/

var characters = { "characters": [{ "name": "Bill Cipher", "age": "Unknown", "speciality": "warp reality" }] };
'use strict';

function removeRotten(bagOfFruits) {
  if (bagOfFruits && bagOfFruits.length) {
    return bagOfFruits.map(function (f) {
      return f.toLowerCase().replace('rotten', '');
    });
  } else {
    return [];
  }
}
'use strict';

function toCurrency(price) {
  var rawPrice = price.toString().split('').reverse().map(function (x, i) {
    return (i + 1) % 3 === 0 ? ',' + x : x;
  }).reverse().join('');
  return rawPrice[0] === ',' ? rawPrice.slice(1) : rawPrice;
}
"use strict";

/* convert list like structure (deep object) to array
Desicion process:
use recursion
inner function need to avoid result overriding
 */

function listToArray(list) {
  var result = [];

  var flatten = function flatten(lst) {
    if (lst.next) {
      flatten(lst.next);
    }
    result.push(lst.value);
  };

  flatten(list);
  return result.reverse();
}

var list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

// console.log(listToArray(list1));
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

//remember that filter returns an array. Not an object!
//can chain array's element call directly to filter

function findEmployeesRole(name) {
  var _name$split = name.split(' ');

  var _name$split2 = _slicedToArray(_name$split, 2);

  providedFirstName = _name$split2[0];
  providedLastName = _name$split2[1];

  var employee = employees.filter(function (e) {
    return e.firstName === providedFirstName && e.lastName === providedLastName;
  })[0];
  return employee ? employee.role : "Does not work here!";
}
"use strict";

/*Create remove_(someIntList, integersToRemove) function with 2 parameters
someIntList - array of integers
integersToRemove - all integers from it's array will be removed from someIntList
*/

Array.prototype.remove_ = function (integer_list, value_list) {
  return integer_list.filter(function (i) {
    return !value_list.some(function (v) {
      return v === i;
    });
  });
};

var l = [];
var integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
var values_list = [1, 3];
// console.log(l.remove_(integer_list, values_list))