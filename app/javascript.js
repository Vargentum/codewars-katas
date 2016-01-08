'use strict';

/*
Given an n x n array, 
return the array elements arranged from outermost elements
to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]


Algo:
  helper: get x elems

*/
function task401() {

  function taskSnailSort() {

    var snail = function snail(table) {
      var dim = table.length;

      var collectSnailed = function collectSnailed(i) {
        var type = 'top';

        return function (j) {
          switch (type) {
            case 'top':
              type = 'right';
              return table[i];
            case 'right':
              type = 'bottom';
              return table.map(function (row) {
                return row[table.length - 1 - i];
              });
            case 'bottom':
              type = 'left';
              return table.return;
          }
        };
      };

      for (var i = 0; i < Math.ceil(table.length / 2); i--) {
        var s = collectSnailed(i);
        for (var j = table.length; j > 0; j--) {
          s(j - i);
        };
      };
    };

    var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(snail(a));
  }
  taskSnailSort();
}
// task401()
'use strict';

/*
Write a function defaultArguments. 
It takes a function as an argument, along with an object containing
default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults. (PROBLEM WITH THIS)

*/
function task402() {

  var defaultArguments = function defaultArguments(func, params) {
    var defaults = func.toString().match(/\((.*?)\)/)[1].split(', ').map(function (n) {
      return params[n];
    });

    return function () {
      var args = [];
      for (var i = 0; i < defaults.length; i++) {
        args.push(arguments[i] || defaults[i]);
      };
      return func.apply(this, args);
    };
  };

  var add = function add(a, b) {
    return a + b;
  };

  var add_ = defaultArguments(add, { b: 9 });
  console.log(add_(10)); // returns 19
  console.log(add_(10, 7)); // returns 17
  console.log(add_()); // returns NaN

  add_ = defaultArguments(add_, { b: 3, a: 2 });
  console.log(add_(10)); // returns 13 now
  console.log(add_()); // returns 5
}
// task402()
"use strict";

/*

Complete the solution so that it strips all text 
that follows any of a set of comment markers passed in. 

Any whitespace at the end of the line should also be stripped out.



Algo:
  - construct dynamic Regexp


Enlightment:
  - use RegExp Constructor to make dynamic regex
  - use \ to escape user input characters inside alteration (\$\!) 
    - if in constructor, also use \\
  - use \\ to escape `special characters` in Constructor (\s => \\s)
 
*/

function task403() {

  var solution = function solution(input, markers) {
    var markersStr = markers.reduce(function (str, mk) {
      return str += "|\\" + mk;
    }, "").substring(1);
    var ptrn = new RegExp("\\s*?(" + markersStr + ")[^\n]*", 'g');
    return input.replace(ptrn, "");
  };

  console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
}
// task403()
"use strict";

/*

Write a function that, given a depth (n), returns a 
single-dimensional array representing Pascal's Triangle to the n-th level.

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Algo

  generate n arrays (levels)
  for each NOT first integer in array:
    compare with prev array corresponding value
    if no - return 1
    if yes - plus with prev of corresponding


*/

function task404() {

  var pascalsTriangle = function pascalsTriangle(n) {
    var array = [];

    var createLvl = function createLvl(i) {
      var prev = array[i - 1];

      return _(new Array(i + 1)).map(function (char, idx) {
        if (!(prev && prev[idx] && prev[idx - 1])) return 1;
        return prev[idx] + prev[idx - 1];
      }).value();
    };

    _.times(n, function (i) {
      array.push(createLvl(i));
    });

    return _.flatten(array);
  };

  console.log(pascalsTriangle(4));
  console.log(pascalsTriangle(10));
}
// task404()
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

Implement class User

A user starts at rank -8 and can progress all the way to 8.
There is no 0 (zero) rank. The next rank after -1 is 1.
Users will complete activities. These activities also have ranks.
Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank

The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
A user cannot progress beyond rank 8.
The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.

The progress is scored like so:

Completing an activity that is ranked the same as that of the user's will be worth 3 points
Completing an activity that is ranked one ranking lower than the user's will be worth 1 point

Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored

Completing an activity ranked higher than the current user's rank will accelerate the rank progression. 

The greater the difference between rankings the more the progression will be increased. 
The formula is 10 d d where d equals the difference in ranking between the activity and the user.

var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
*/

function task405() {
  var User = (function () {
    function User() {
      _classCallCheck(this, User);

      this.rank = -8;
      this.progress = 0;
    }

    _createClass(User, [{
      key: '_incRank',
      value: function _incRank() {
        switch (this.rank) {
          case -1:
            this.rank += 2;
            break;
          default:
            this.rank++;
            break;
        }
      }
    }, {
      key: '_calcActivityWeight',
      value: function _calcActivityWeight(activityRank) {
        var diff = activityRank - this.rank;

        // remove `zero` rank
        if (activityRank > 0 && this.rank < 0) diff--;else if (activityRank < 0 && this.rank > 0) diff++;

        // increased points
        if (activityRank > this.rank) {
          return 10 * Math.pow(Math.abs(diff), 2);
        }

        //default points
        switch (diff) {
          case -1:
            return 1;
          case 0:
            return 3;
          default:
            return 0;
        }
      }
    }, {
      key: '_validateRank',
      value: function _validateRank(rank) {
        if (!(rank < User.rank.min || rank === 0 || rank > User.rank.max)) return;
        throw new Error('Incorrect Rank ' + rank);
      }
    }, {
      key: 'incProgress',
      value: function incProgress(activityRank) {
        this._validateRank(activityRank);
        var progress = this.progress + this._calcActivityWeight(activityRank);
        while (progress >= User.rank.capacity) {
          if (this.rank === User.rank.max) {
            progress = 0;
            break;
          }
          this._incRank();
          progress -= User.rank.capacity;
        }
        this.progress = this.rank === User.rank.max ? 0 : progress;
        console.log('task: ' + activityRank + ', rank: ' + this.rank + ', weight: ' + this._calcActivityWeight(activityRank) + ', progress: ' + this.progress);
      }
    }]);

    return User;
  })();

  Object.defineProperty(User, 'rank', {
    value: {
      capacity: 100,
      min: -8,
      max: 8
    },
    writable: false
  });

  var user = new User();

  user.incProgress(8);
  user.incProgress(8);
  user.incProgress(8);
  user.incProgress(8);

  /*
     After applying rank of -8 the progress was expected to be 3, but was actually 99
    After applying rank of -7 the progress was expected to be 10, but was actually 99
    After applying rank of -6 the progress was expected to be 40, but was actually 99
    After applying rank of -5 the progress was expected to be 90, but was actually 99
    After applying rank of -4 the progress was expected to be 60, but was actually 99
    After applying rank of -8 the progress was expected to be 3, but was actually 99
    After applying rank of 1 the progress was expected to be 40, but was actually 99
    After applying rank of 1 the progress was expected to be 80, but was actually 0
    After applying rank of 1 the progress was expected to be 20, but was actually 0
    After applying rank of 1 the progress was expected to be 30, but was actually 0
    After applying rank of 1 the progress was expected to be 40, but was actually 0
    After applying rank of 2 the progress was expected to be 80, but was actually 0
    After applying rank of 2 the progress was expected to be 20, but was actually 0
    After applying rank of -1 the progress was expected to be 21, but was actually 0
    After applying rank of 3 the progress was expected to be 61, but was actually 0
    After applying rank of 8 the progress was expected to be 51, but was actually 0
    After applying rank of 8 the progress was expected to be 91, but was actually 0
    After applying rank of 8 the progress was expected to be 31, but was actually 0
    After applying rank of 8 the progress was expected to be 41, but was actually 0
    After applying rank of 8 the progress was expected to be 51, but was actually 0
    After applying rank of 8 the progress was expected to be 61, but was actually 0
    After applying rank of 8 the progress was expected to be 71, but was actually 0
    After applying rank of 8 the progress was expected to be 81, but was actually 0
    After applying rank of 8 the progress was expected to be 91, but was actually 0
  */
}
task405();
'use strict';

/*
Your mission: write a function nouveau 
(that's French for "new") which takes
one function parameter (the constructor), 
plus an unknown number of additional parameters 
of any type (arguments for the constructor).

When invoked, nouveau should do everything new does
and return the same object new would evaluate to, as specified above.


What does `new` operator do?

1. creates an empty object (instance) which prototypally inherits
   from Constructor.prototype

2. Binds Constructor to instnce (this is instance) and invokes 
constructor with it arguments

3. If Constructor returned value is an object, evaluate result to it object.
4. If no - Evalueate to instance
*/

function nouveau(Constructor) {
  // let inst = {}
  // inst.__proto__ = Constructor.prototype
  var inst = Object.create(Constructor.prototype);

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var rInst = Constructor.apply(inst, args);
  return _.isObject(rInst) ? rInst : inst;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  return 'test';
}
Person.prototype.introduce = function () {
  return 'My name is ' + this.name + ' and I am ' + this.age;
};

var jack = new Person('Jack', 40);
var john = nouveau(Person, 'John', 30); // same result as above

// console.log( jack.introduce() ); // My name is Jack and I am 40
// console.log( john.introduce() ); // My name is John and I am 30
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells,
each of which is in one of two possible states, alive or dead. 

Every cell interacts with its eight neighbours, which are the cells that are horizontally, 
vertically, or diagonally adjacent. At each step in time, the following transitions occur:

  - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  - Any live cell with two or three live neighbours lives on to the next generation.
  - Any live cell with more than three live neighbours dies, as if by overcrowding.
  - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.



..implement your own method which will take the
initial state as an NxM array of 0's (dead cell) and 1's (living cell)
and return an equally sized array representing the next generation.
Cells outside the array must be considered dead.

Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).

N.B.: for illustration purposes, 0 and 1 will 
be represented as ░ and ▓ blocks respectively.

You can take advantage of the 'htmlize' function to get a text representation of the universe:
eg:



Implement: 
  getNeibours method
  rules:
    dead rule 1
    dead rule 2
    live rule
    resurrect rule

  apply rule for each cell
    - check neibours
*/

var Universe = (function () {
  _createClass(Universe, [{
    key: "_mapCells",
    value: function _mapCells(fn) {
      return _.map(this.fields, function (row, rowIndex) {
        return _.map(row, function (cell, cellIndex) {
          return fn(rowIndex, cellIndex, cell);
        });
      });
    }
  }, {
    key: "_getNeiboursOf",
    value: function _getNeiboursOf(ri, ci) {
      var topNeibours = _.slice(this.fields[ri - 1], ci - 1, ci + 1);
      var btmNeibours = _.slice(this.fields[ri + 1], ci - 1, ci + 1);
      var crtNeibours = [this.fields[ri][ci - 1], this.fields[ri][ci + 1]];

      return _([]).push(topNeibours, crtNeibours, btmNeibours).flatten().compact().value();
    }
  }, {
    key: "_startGen",
    value: function _startGen(size) {
      return _.map(new Array(size), function () {
        return _.map(new Array(size), function () {
          return _.random(0, 1);
        });
      });
    }
  }]);

  function Universe(size) {
    _classCallCheck(this, Universe);

    this.fields = this._startGen(size);
    console.log(this);
  }

  _createClass(Universe, [{
    key: "toString",
    value: function toString() {
      return _(this.fields).map(function (f) {
        return f.join(" ");
      }).join('\n');
    }
  }, {
    key: "nextGen",
    value: function nextGen() {
      var _this = this;

      this.fields = this._mapCells(function (ri, ci, cell) {
        var aliveNeibours = _this._getNeiboursOf(ri, ci).length;
        switch (cell) {
          case 1:
            return aliveNeibours === 3 || aliveNeibours === 2 ? 1 : 0;
          case 0:
            return aliveNeibours === 3 ? 1 : 0;
        }
      });
      return this;
    }
  }]);

  return Universe;
})();

// let a = new Universe(20)
// console.log(a.toString())
// for (let i = 0; i < 10; i++) {
//   console.log(`------- generation: ${i+1}`)
//   console.log(a.nextGen().toString())
// };
"use strict";

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
  if (typeof str === 'number') return "" + str;

  var upCharsPtrn = /[A-Z]/g;
  var occurs = undefined;
  var result = str.split("");

  while ((occurs = upCharsPtrn.exec(str)) !== null) {
    var char = result[occurs.index];
    char = occurs.index === 0 ? char.toLowerCase() : "_" + char.toLowerCase();
    result.splice(occurs.index, 1, char);
  }
  return result.join("");
}

// console.log(toUnderscore('CamelCasedString'))
// console.log(toUnderscore('CamelCasedString'))
// console.log(toUnderscore('CamelCasedString'))
// console.log(toUnderscore('CamelCasedString'))
// console.log(toUnderscore('coFAFdfs134'))
// console.log(toUnderscore(12))

/*Enlighten:

  - use to lowercase for all string
  - use pattern ?= to find all letters except first one
*/
function toUnderscoreBetter(str) {
  return str.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
}
"use strict";

/*Replicate these methods*/

Math.floor = function (number) {
  return ~ ~number;
};

Math.ceil = function (number) {
  if (number % 1 === 0) return number;
  return number > 0 ? ~ ~number + 1 : ~ ~number - 1;
};

Math.round = function (number) {
  var nearest = number.toString().match(/\.(\d)/);
  if (!nearest) return number;
  return parseFloat(nearest[1]) >= 5 ? Math.ceil(number) : Math.floor(number);
};

// console.log(Math.round(5.444449))
// console.log(Math.round(5.944443))
// console.log(Math.round(-5.444449))
// console.log(Math.round(-5.944443))
// console.log(Math.round(5))
// console.log(Math.round(6))
// console.log(Math.round(-5))
// console.log(Math.round(-6))

/*
Find a better way with parseInt()

*/
"use strict";

/*

Functional programming thrives from the reuse of functions.
One core feature to extend the reuse is the concatenation of functions.


Build a function pipe to achieve this with JS. An example use could be:

  must return a function (to concating work) (1)
  return a result (2)


  Enlightment: return function (1) that return a result (2) !!!
*/

function task() {
  var addOne = function addOne(e) {
    return e + 1;
  };
  var square = function square(e) {
    return e * e;
  };

  Function.prototype.pipe = function (fn) {
    var _this = this;

    return function (arg) {
      return fn(_this(arg));
    };
  };

  var result = [1, 2, 3, 4, 5].map(addOne.pipe(addOne).pipe(addOne).pipe(addOne));
  console.log(result);
}
// task()

/*
  Tips:

    - use arrow function as in decision
    - or `bind` wrapper function to pass correct `this`
*/
"use strict";

/*
Create a function method that allow you to wrap an existing function.
The method signature would look something like this:
*/

function task506() {

   Function.prototype.wrap = function (wrapper) {
      return wrapper.bind(this, this);
   };

   function speak(name) {
      return "Hello " + name;
   }
   console.log(speak("Mary"));

   speak = speak.wrap(function (original, yourName, myName) {
      greeting = original(yourName);
      return greeting + ", my name is " + myName;
   });
   var greeting = speak("Mary", "Kate");
   console.log(greeting);
}
// task506()
"use strict";

/*
or this kata, implement a spyOn function which takes any function func as a parameter 
and returns a spy for func. The returned spy must be callable in the same manner 
as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was called with val, else returns false.
.returned(val) — returns true if spy returned val, else returns false

Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false


Algo: 
  return constructor?
         object?
         function? +

*/

function task507() {

  function spyOn(func) {
    var count = 0;
    var spyArgs = [];
    var result = undefined;

    var spied = function spied() {
      count++;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      spyArgs.push.apply(spyArgs, args);
      result = func.apply(this, args);
      return result;
    };
    spied.callCount = function () {
      return count;
    };
    spied.wasCalledWith = function (arg) {
      return spyArgs.some(function (a) {
        return arg === a;
      });
    };
    spied.returned = function (res) {
      return result === res;
    };
    return spied;
  }

  function adder(n1, n2) {
    return n1 + n2;
  }
  var adderSpy = spyOn(adder);

  console.log(adderSpy(2, 4)); // returns 6
  console.log(adderSpy(3, 5)); // returns 8
  console.log(adderSpy.callCount()); // returns 2
  console.log(adderSpy.wasCalledWith(4)); // true
  console.log(adderSpy.wasCalledWith(0)); // false
  console.log(adderSpy.returned(8)); // true
  console.log(adderSpy.returned(0)); // false
}
// task507()
"use strict";

/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <=) sequence u.

*/

function task508() {
  function dblLinear(n) {
    var seq = [1];

    var takeRight = function takeRight(arr, n) {
      return Array.apply(null, Array(n)).map(function (_, idx) {
        return arr[arr.length - 1 - idx];
      });
    };

    var genSeq = function genSeq(items) {
      if (seq.length >= n) return;
      items.forEach(function (i) {
        seq.push(2 * i + 1, 3 * i + 1);
      });
      genSeq(_.takeRight(seq, 2));
    };
    genSeq(_.takeRight(seq, 1));
    seq.sort(function (a, b) {
      return a - b;
    });
    return seq[n];
  }
  console.log(dblLinear(10));
  console.log(dblLinear(20));
  console.log(dblLinear(30));
}
task508();
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

function summaryRanges(nums)
that given a sorted array of numbers, returns the summary of its ranges.
For example:

summaryRanges([1,2,3,4]) === ['1->4']
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
summaryRanges([1,1,1,1,1]) === ['1']


Algo: extract array ranges 


*/

function Range(start, end) {
  var _this = this;

  var rng = [start];

  while (start <= end) {
    rng.push(start);
    start++;
  }

  this.add = function () {
    var last = rng[rng.length - 1];
    rng.push(last + 1);
    return _this;
  };

  this.toString = function () {
    if (rng.length > 1) {
      return rng[0] + "->" + rng[rng.length - 1];
    } else {
      return "" + rng[0];
    }
  };
}

function summaryRanges(range) {
  var res = [];

  range.forEach(function (crt, idx) {
    var prev = range[idx - 1];
    var diff = crt - prev;

    if (prev === undefined || diff > 1) {
      res.push(new Range(crt));
    } else if (diff === 1) {
      res[res.length - 1].add();
    }
  });

  return res.map(function (i) {
    return i.toString();
  });
}

// console.log(summaryRanges([0, 1, 2, 5, 6, 9]))
// console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]))

/*
Enlightment: 
  
  use OOP appropach: create your own objects, and define it's behavior

  procedural? approach can be too complicated
*/

/*
OLD: too complicated, cant handle nn and nn+ integers length (weakest part)

function summaryRanges (data) {
  let rawResults = []  
  
  let rmDuplications = (item, idx) => item !== data[idx + 1]

  let getLinked = (current, idx, arr) => {
    let prev = arr[idx - 1] || current
    let diff = current - prev

    if (diff === 1) {
      rawResults[rawResults.length - 1] += `${current}`
    } else {
      rawResults.push(`${current}`)
   }
  }

  let collapseLinked = (item) => {
    if (item.length >= 2) {
      return `${item[0]}->${item[item.length - 1]}`
    } else {
      return item
    }
  }

  data.filter(rmDuplications)
     .forEach(getLinked);

  return rawResults.map(collapseLinked)
}
*/
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

function christmasTreeWithoutRepeat(height) {
  var base = height * 2 - 1;
  var half = Math.floor(base / 2);
  var result = [];
  var repeat = function repeat(char, n) {
    return new Array(n + 1).join(char);
  };

  for (var i = 0; i < height; i++) {
    var spaceCount = half - i;
    result.push(repeat(" ", spaceCount) + repeat("*", base - spaceCount * 2) + repeat(" ", spaceCount));
  }

  return result.join("\n");
}

// console.log(christmasTree(5))
// console.log('------------')
// console.log(christmasTreeWithoutRepeat(5))
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

function mixWords(str) {
  if (typeof str !== "string") return;

  return str.replace(/[a-я]+/ig, function (word) {
    var min = 1,
        max = word.length - 2,
        res = [];

    word.split("").forEach(function (x, i) {
      var rand = Math.floor(Math.random() * (max - min) + min);
      if (i < min || i > max) {
        res.push(x);
        return;
      }
      res[rand] ? res.push(x) : res[rand] = x;
    });
    return res.join("");
  });
}

// console.log(mixWords("Утверждения из Интернета правы в той своей части, что некоторые слова с переставленными буквами действительно достаточно просты для понимания. Но наши исследования доказали, что перестановки букв в словах влекут за собой изменение значения слова."))
// console.log(mixWords("В этой статье мы приводим результаты исследований, показывающие, что, хотя некоторые варианты предложений с переставленными буквами довольно просты для чтения и восприятия, к иным вариантам это не относится, и что в общем всегда необходимо приложить определенные усилия для чтения текста, содержащего слова с переставленными буквами."))
// console.log(mixWords("Но главный вывод из наших исследований заключается в том, что, хотя перестановка букв позволяет довольно легко читать и воспринимать прочитанное, чтение такого текста всегда требует особых усилий по сравнению с чтением нормального текста."))
"use strict";

/*
Write a function which takes one parameter
representing the dimensions of a checkered board. 
The board will always be square, so 5 means you will need a 5x5 board.

checkeredBoard(5)

■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
*/

function checkeredBoard(dim) {
  var res = "";
  for (var i = 1; i <= dim * dim; i++) {
    i % 2 === 0 ? res += "□ " : res += "■ ";
    i % dim === 0 ? res += "\n" : "";
  }
  return res;
}

// console.log(checkeredBoard(11));
'use strict';

/*
Write a generator sequence_gen ( sequenceGen in JavaScript)
that, given the first terms of a sequence will generate a (potentially)
infinite amount of terms, where each subsequent term is the sum 
of the previous x terms where x is the amount of initial arguments 
(examples of such sequences are the Fibonacci, Tribonacci and Lucas number sequences).


fib = sequenceGen(0, 1)
fib.next().value = 0 // first term (provided)
fib.next().value = 1 // second term (provided)
fib.next().value = 1 // third term (sum of first and second terms)
fib.next().value = 2 // fourth term (sum of second and third terms)
fib.next().value = 3 // fifth term (sum of third and fourth terms)
fib.next().value = 5 // sixth term (sum of fourth and fifth terms)
fib.next().value = 8 // seventh term (sum of fifth and sixth terms)

*/

function sequenceGen() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 0;
  var seq = [];

  function pushPrevSum() {
    var next = 0;
    for (var j = args.length; j > 0; j--) {
      next += seq[i - j];
    };
    seq.push(next);
  }

  return {
    next: function next() {
      typeof args[i] === 'number' ? seq.push(args[i]) : pushPrevSum();
      i++;
      return {
        value: seq[seq.length - 1]
      };
    }
  };
}

/*Expirience:

  if you need to return an iterator - return `this` in [Symbol.iterator] method
*/

var fib = sequenceGen(0, 1);
// console.log(fib.next().value) // 0
// console.log(fib.next().value) // 1
// console.log(fib.next().value) // 1
// console.log(fib.next().value) // 2
// console.log(fib.next().value) // 3
// console.log(fib.next().value) // 5
// console.log(fib.next().value) // 8

var trib = sequenceGen(0, 1, 1);
// console.log(trib.next().value) // 0
// console.log(trib.next().value) // 1
// console.log(trib.next().value) // 1
// console.log(trib.next().value) // 2
// console.log(trib.next().value) // 4
// console.log(trib.next().value) // 7
// console.log(trib.next().value) // ?
// console.log(trib.next().value) // ?
"use strict";

/*
You're a support engineer and you have to write a regex that captures the following information from our log files:

the date
the log level (ERROR, INFO or DEBUG),
the user
the main function
the sub function
the logged message

You asked your supervisor about the rules defining all the logs. He told you that: 
  the sub function may or may not be here,
  if no sub-function return undefined, 
    the log level can only be one of the 3 presented,
  the logged message contains any kind of character, 
  all fields are separated by arbitrary spaces (but at least one).

Unfortunately he's not exactly sure about the rest,
  "use your common sense, there is not trick" he said.
*/

var logparser = /^(\d{4}(?:-\d{2}){2}\s*\d{2}(?::\d{2}){2},\d{3})\s*(ERROR|INFO|DEBUG)\s*\[(\w+?):(\w+?)(?::(\w+?))?\]\s*([\s\S]+)$/;

// console.log(logparser.test("2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem,"))
// console.log(logparser.test("2003-07-08 16:49:46,896 INFO [user1:mainfunction] We don't have a problem"))
// console.log("2003-07-08 16:49:46,896 INFO [user1:mainfunction:subfunction] We don't have a problem".match(logparser))
"use strict";

/*
In this kata, you will get an array of unique numbers, paired with strings, like

[(3, "Fizz"), (5, "Buzz"), (15, "FizzBuzz")]


Depending on the language, 
that's either a list/array of tuples or an array of arrays. It's always sorted.

Your job is to return another function,
that—given a number n—returns the appropriate string.
How do you know the correct string? 
Well, it's the one paired with the largest key that still divides the number n!


var myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
myFizz(3)  === "Fizz"
myFizz(4)  === "4"
myFizz(5)  === "Buzz"
myFizz(15) === "FizzBuzz"

*/

function fizzBuzzFactory(instr) {

  return function (int) {

    for (var i = instr.length - 1; i >= 0; i--) {
      if (int % instr[i][0] === 0) return instr[i][1];
    };
    return "" + int;
  };
}
"use strict";

/*
Implement Archiver constructor with following behavior:

//new Date() == '2013-09-24...Z'
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]


Hint: Use get/set functions
*/

function Archiver() {

  var archive = [];

  Object.defineProperty(this, "temperature", {
    set: function set(t) {
      archive.push({
        date: new Date(),
        val: t
      });
    },
    get: function get() {
      return archive[archive.length - 1].val;
    }
  });

  this.getArchive = function () {
    return archive;
  };
}

var a = new Archiver();

// a.temperature = 20
// a.temperature = 30
// console.log(a.temperature)
// console.log(a.getArchive())

/*
  From others decisions: 
    you can store `temperature` value in additional variable,
    assign it in setter to setted value
    return it in getter
*/
"use strict";

/*
Add a groupBy method to Array.prototype 
so that elements in an array could be grouped by the result of evaluating a function on each eleme

The method should return an object, in which for each different value returned by the function 
there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken


Algo:
  use reduce

  find keys with acc[fn(x)]
  filter duplicated keys

  find values associated with keys:
    filter array for each value through `fn` equal `

*/

Array.prototype.groupBy = function (fn) {
  var _this = this;

  if (!fn) return this.groupBy(function (x) {
    return x;
  });

  return this.reduce(function (acc, x) {
    if (acc[fn(x)]) return acc;

    acc[fn(x)] = _this.filter(function (i) {
      return fn(x) === fn(i);
    });
    return acc;
  }, {});
};

// console.log([1,2,3,2,4,1,5,1,6].groupBy())
// console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ))

/*Enlightment:
  

*/
'use strict';

/*
Find a way to group anagrams in provided array

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]

map, then compare x
  add x to sub-array
  rearrange x, compare with all others from array (rearranged to)
  if true - remove corresponding item from array
            add to x sub-array
*/

function groupAnagrams(words) {
  var equalize = function equalize(i) {
    return i.toLowerCase().split('').sort().join();
  };
  var res = [];

  while (words.length > 0) {
    res.push(_.remove(words, function (y) {
      return equalize(words[0]) === equalize(y);
    }));
  }
  return res;
}

// console.log(groupAnagrams(["rat", "tar", "star"]))
// console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
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

// console.log(validate("Is this a right message?"))
// console.log(validate("MDZHB 85 596 KLASA 81 00 02 91"))
// console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32"))
// console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54"))

/*Tips:
  use /^pattern$/ - to search from start (^) to end ($) of the string.
  maybe use " " spaces instead of \s ?
*/
'use strict';

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"
*/

var accum = function accum(str) {
  return str.split('').map(function (c, i) {
    return c.toUpperCase() + _.repeat(c.toLowerCase(), i);
  }).join('-');
};
// console.log(accum('aBcD'))

var accum1 = function accum1(str) {
  return str.split('').map(function (char, i) {
    var res = char.toUpperCase();
    while (i > 0) {
      res += char.toLowerCase();
      i--;
    }
    return res;
  }).join('-');
};
// console.log(accum1('aBcD'))

/*
Tip: use Array(n+1).join(char) to create string repeating char n-times! 

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