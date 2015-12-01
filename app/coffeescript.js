
/*


In this kata you will create a function
that takes a list of non-negative integers and strings
and returns a new list with the strings filtered out.
 */

(function() {
  var filter_list;

  filter_list = function(arr) {
    return arr.filter(function(i) {
      return typeof i === 'number';
    });
  };

}).call(this);


/*

In this kata you should simply determine, whether a given year
is a leap year or not.
In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are no leap years
but years divisible by 400 are leap years
 */

(function() {
  var isLeapYear, isLeapYearBetter;

  isLeapYear = function(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0 && year % 400 !== 0) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  isLeapYearBetter = function(year) {
    switch (year) {
      case year % 400:
        return true;
      case year % 100:
        return false;
      case year % 4:
        return true;
      default:
        return false;
    }
  };

}).call(this);


/*

You have to write a function pattern which returns
the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern
 */

(function() {
  var pattern;

  pattern = function(n) {
    var result, x, y;
    result = "";
    x = 0;
    while (x < n) {
      x++;
      y = 0;
      while (y < x) {
        y++;
        result += x;
      }
      result += "\n";
    }
    return result.slice(0, -1);
  };

}).call(this);

(function() {
  var sumDigits;

  sumDigits = function(num) {
    var i, j, len, ref, sum;
    sum = 0;
    ref = "" + (Math.abs(num));
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      sum += parseInt(i);
    }
    return sum;
  };

}).call(this);


/*
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

Implement following functions:

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
 */

(function() {
  var head, init, last, lastBetter, tail;

  head = function(arr) {
    return arr[0];
  };

  tail = function(arr) {
    return arr.slice(1);
  };

  init = function(arr) {
    return arr.slice(0, -1);
  };

  last = function(arr) {
    return head(arr.slice(-1));
  };

  lastBetter = function() {
    return arr[arr.length - 1];
  };

}).call(this);

(function() {
  var sortGiftCode;

  sortGiftCode = function(code) {
    return ("" + code).split("").sort().join("");
  };

}).call(this);

(function() {
  var occurrences;

  occurrences = function(str) {
    var reducer;
    reducer = function(a, i) {
      if (!a[i]) {
        a[i] = 1;
      } else {
        a[i] += 1;
      }
      return a;
    };
    return str.toLowerCase().split('').reduce(reducer, {});
  };


  /*
  Experience:
  
  
  1. Primitives copied to another memory cell,
     reference isn't created!
  
  n = a[i]
  unless n then n = 1... -> NOT works when a[i] is primitive!!!
  
  
  
  2. Clever trick to get rid of ternary:
  
  a[i] = (a[i] or 0) + 1
   */

}).call(this);

(function() {
  var buy, buyBetter;

  buy = function(capacity, gifts) {
    var seq;
    seq = [];
    gifts.forEach(function(x, xi) {
      if (seq.length === 0) {
        return gifts.slice(xi + 1).forEach(function(y, yi) {
          var xyi;
          if (seq.length === 0) {
            xyi = xi + yi + 1;
            if (x + y === capacity) {
              return seq.push([xi, xyi]);
            }
          }
        });
      }
    });
    return seq[0] || null;
  };


  /*
  Experience: Concentrate on indices no items!
   */

  buyBetter = function(capacity, gifts) {
    var x, y;
    x = 0;
    while (x < gifts.length) {
      y = x + 1;
      while (y < gifts.length) {
        if (gifts[x] + gifts[y] === capacity) {
          return [x, y];
        }
        y++;
      }
      x++;
    }
    return null;
  };

}).call(this);


/*
[[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]]

Incorrect understanding of requirements:

return full list
 */

(function() {
  var FizzBuzzFactory, fb;

  FizzBuzzFactory = function(instr) {
    var bz, fbz, fizzBuzz, fz;
    fz = instr[0], bz = instr[1], fbz = instr[2];
    fizzBuzz = function(num) {
      var j, results;
      if (!num) {
        return [];
      }
      return (function() {
        results = [];
        for (var j = 1; 1 <= num ? j <= num : j >= num; 1 <= num ? j++ : j--){ results.push(j); }
        return results;
      }).apply(this).map(function(i) {
        if (i % fbz[0] === 0) {
          return i = fbz[1];
        } else if (i % bz[0] === 0) {
          return i = bz[1];
        } else if (i % fz[0] === 0) {
          return i = fz[1];
        } else {
          return i;
        }
      });
    };
    return fizzBuzz;
  };

  fb = FizzBuzzFactory([[2, "Fizz"], [4, "Buzz"], [5, "FizzBuzz"]]);

}).call(this);
