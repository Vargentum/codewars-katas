
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzAxLmxpc3RfZmlsdGVyaW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0FBQUE7QUFBQSxNQUFBOztFQVFBLFdBQUEsR0FBYyxTQUFDLEdBQUQ7V0FDWixHQUFHLENBQUMsTUFBSixDQUFXLFNBQUMsQ0FBRDthQUNULE9BQU8sQ0FBUCxLQUFZO0lBREgsQ0FBWDtFQURZO0FBUmQiLCJmaWxlIjoiY29mZmVlLzcvMDEubGlzdF9maWx0ZXJpbmcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcblxuXG5JbiB0aGlzIGthdGEgeW91IHdpbGwgY3JlYXRlIGEgZnVuY3Rpb25cbnRoYXQgdGFrZXMgYSBsaXN0IG9mIG5vbi1uZWdhdGl2ZSBpbnRlZ2VycyBhbmQgc3RyaW5nc1xuYW5kIHJldHVybnMgYSBuZXcgbGlzdCB3aXRoIHRoZSBzdHJpbmdzIGZpbHRlcmVkIG91dC5cbiMjI1xuXG5maWx0ZXJfbGlzdCA9IChhcnIpIC0+XG4gIGFyci5maWx0ZXIgKGkpIC0+XG4gICAgdHlwZW9mIGkgPT0gJ251bWJlcidcbiAgXG4gIFxuIyBjb25zb2xlLmxvZyBmaWx0ZXJfbGlzdChbMSwyLCdhJywnYiddKVxuIyBjb25zb2xlLmxvZyBmaWx0ZXJfbGlzdChbMSwyLCdhJywnYiddKVxuIyBjb25zb2xlLmxvZyBmaWx0ZXJfbGlzdChbMSwnYScsJ2InLDAsMTVdKVxuIyBjb25zb2xlLmxvZyBmaWx0ZXJfbGlzdChbMSwyLCdhYXNmJywnMScsJzEyMycsMTIzXSlcblxuXG5cbiJdfQ==


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzAyLmxlYXBfeWVhci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7OztBQUFBO0FBQUEsTUFBQTs7RUFlQSxVQUFBLEdBQWEsU0FBQyxJQUFEO0lBQ1gsSUFBRyxJQUFBLEdBQU8sQ0FBUCxLQUFZLENBQWY7TUFDRSxJQUFnQixJQUFBLEdBQU8sR0FBUCxLQUFjLENBQWQsSUFBb0IsSUFBQSxHQUFPLEdBQVAsS0FBZ0IsQ0FBcEQ7QUFBQSxlQUFPLE1BQVA7O2FBQ0EsS0FGRjtLQUFBLE1BQUE7YUFHSyxNQUhMOztFQURXOztFQVViLGdCQUFBLEdBQW1CLFNBQUMsSUFBRDtBQUNqQixZQUFPLElBQVA7QUFBQSxXQUNPLElBQUEsR0FBTyxHQURkO2VBQ3VCO0FBRHZCLFdBRU8sSUFBQSxHQUFPLEdBRmQ7ZUFFdUI7QUFGdkIsV0FHTyxJQUFBLEdBQU8sQ0FIZDtlQUdxQjtBQUhyQjtlQUlPO0FBSlA7RUFEaUI7QUF6Qm5CIiwiZmlsZSI6ImNvZmZlZS83LzAyLmxlYXBfeWVhci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuXG5JbiB0aGlzIGthdGEgeW91IHNob3VsZCBzaW1wbHkgZGV0ZXJtaW5lLCB3aGV0aGVyIGEgZ2l2ZW4geWVhclxuaXMgYSBsZWFwIHllYXIgb3Igbm90LlxuSW4gY2FzZSB5b3UgZG9uJ3Qga25vdyB0aGUgcnVsZXMsIGhlcmUgdGhleSBhcmU6XG5cbnllYXJzIGRpdmlzaWJsZSBieSA0IGFyZSBsZWFwIHllYXJzXG5idXQgeWVhcnMgZGl2aXNpYmxlIGJ5IDEwMCBhcmUgbm8gbGVhcCB5ZWFyc1xuYnV0IHllYXJzIGRpdmlzaWJsZSBieSA0MDAgYXJlIGxlYXAgeWVhcnNcblxuIyMjXG5cblxuIyBGcm9tIGNvbW1vbiB0byByYXJlc3QgLSBkaWZpY3VsdCBsb2dpYyFcblxuaXNMZWFwWWVhciA9ICh5ZWFyKSAtPlxuICBpZiB5ZWFyICUgNCBpcyAwXG4gICAgcmV0dXJuIGZhbHNlIGlmIHllYXIgJSAxMDAgaXMgMCBhbmQgeWVhciAlIDQwMCBpc250IDBcbiAgICB0cnVlXG4gIGVsc2UgZmFsc2VcblxuXG4jIEZyb20gcmFyZXN0IHRvIGNvbW1vbiAtIHNpbXBsZSBsb2dpYyFcbiMgRm9yIHNpbmdsZSB2YWx1ZSwgc3dpdGNoIGlzIGJldHRlclxuXG5pc0xlYXBZZWFyQmV0dGVyID0gKHllYXIpIC0+XG4gIHN3aXRjaCB5ZWFyXG4gICAgd2hlbiB5ZWFyICUgNDAwIHRoZW4geWVzXG4gICAgd2hlbiB5ZWFyICUgMTAwIHRoZW4gbm9cbiAgICB3aGVuIHllYXIgJSA0IHRoZW4geWVzXG4gICAgZWxzZSBub1xuXG5cbiJdfQ==


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzAzLnBhdHRlcm4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxNQUFBOztFQWFBLE9BQUEsR0FBVSxTQUFDLENBQUQ7QUFDUixRQUFBO0lBQUEsTUFBQSxHQUFTO0lBQ1QsQ0FBQSxHQUFJO0FBRUosV0FBTSxDQUFBLEdBQUksQ0FBVjtNQUNFLENBQUE7TUFDQSxDQUFBLEdBQUk7QUFDSixhQUFNLENBQUEsR0FBSSxDQUFWO1FBQ0UsQ0FBQTtRQUNBLE1BQUEsSUFBVztNQUZiO01BR0EsTUFBQSxJQUFVO0lBTlo7QUFRQSxXQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsQ0FBYixFQUFlLENBQUMsQ0FBaEI7RUFaQztBQWJWIiwiZmlsZSI6ImNvZmZlZS83LzAzLnBhdHRlcm4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcblxuWW91IGhhdmUgdG8gd3JpdGUgYSBmdW5jdGlvbiBwYXR0ZXJuIHdoaWNoIHJldHVybnNcbnRoZSBmb2xsb3dpbmcgUGF0dGVybihTZWUgUGF0dGVybiAmIEV4YW1wbGVzKSB1cHRvIG4gbnVtYmVyIG9mIHJvd3MuXG5cbk5vdGU6UmV0dXJuaW5nIHRoZSBwYXR0ZXJuIGlzIG5vdCB0aGUgc2FtZSBhcyBQcmludGluZyB0aGUgcGF0dGVybi5cblJ1bGVzL05vdGU6XG5cbklmIG4gPCAxIHRoZW4gaXQgc2hvdWxkIHJldHVybiBcIlwiIGkuZS4gZW1wdHkgc3RyaW5nLlxuVGhlcmUgYXJlIG5vIHdoaXRlc3BhY2VzIGluIHRoZSBwYXR0ZXJuXG5cbiMjI1xuXG5wYXR0ZXJuID0gKG4pIC0+XG4gIHJlc3VsdCA9IFwiXCJcbiAgeCA9IDBcblxuICB3aGlsZSB4IDwgblxuICAgIHgrK1xuICAgIHkgPSAwXG4gICAgd2hpbGUgeSA8IHhcbiAgICAgIHkrK1xuICAgICAgcmVzdWx0ICs9ICh4KVxuICAgIHJlc3VsdCArPSBcIlxcblwiXG5cbiAgcmV0dXJuIHJlc3VsdC5zbGljZSgwLC0xKSAjcmVtb3ZlIGxhc3QgXFxuXG5cbiMgY29uc29sZS5sb2cgcGF0dGVybiAwXG4jIGNvbnNvbGUubG9nIHBhdHRlcm4gMVxuIyBjb25zb2xlLmxvZyBwYXR0ZXJuIDNcblxuXG4iXX0=

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzA0LnN1bV9kaWdpdHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxTQUFBLEdBQVksU0FBQyxHQUFEO0FBQ1YsUUFBQTtJQUFBLEdBQUEsR0FBTTtBQUNOO0FBQUEsU0FBQSxxQ0FBQTs7TUFBQSxHQUFBLElBQU8sUUFBQSxDQUFTLENBQVQ7QUFBUDtXQUNBO0VBSFU7QUFBWiIsImZpbGUiOiJjb2ZmZWUvNy8wNC5zdW1fZGlnaXRzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsic3VtRGlnaXRzID0gKG51bSkgLT5cbiAgc3VtID0gMFxuICBzdW0gKz0gcGFyc2VJbnQgaSBmb3IgaSBpbiBcIiN7TWF0aC5hYnMobnVtKX1cIlxuICBzdW0gIyBhZGQgZXhwbGljaXQgcmV0dXJuIHRvIHByZXZlbnQgcHVzaCB0byAncmVzdWx0cycgdmFyaWFibGVcblxuIyBjb25zb2xlLmxvZyBzdW1EaWdpdHMgMTIzXG4jIGNvbnNvbGUubG9nIHN1bURpZ2l0cyAtMTIzXG4jIGNvbnNvbGUubG9nIHN1bURpZ2l0cyAwXG4jIGNvbnNvbGUubG9nIHN1bURpZ2l0cyA1NVxuICAiXX0=


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzA1LmhlYWRfdGFpbF9pbml0X2xhc3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsTUFBQTs7RUFjQSxJQUFBLEdBQU8sU0FBQyxHQUFEO1dBQVMsR0FBSSxDQUFBLENBQUE7RUFBYjs7RUFDUCxJQUFBLEdBQU8sU0FBQyxHQUFEO1dBQVMsR0FBSTtFQUFiOztFQUNQLElBQUEsR0FBTyxTQUFDLEdBQUQ7V0FBUyxHQUFJO0VBQWI7O0VBQ1AsSUFBQSxHQUFPLFNBQUMsR0FBRDtXQUFTLElBQUEsQ0FBSyxHQUFJLFVBQVQ7RUFBVDs7RUFDUCxVQUFBLEdBQWEsU0FBQTtXQUFNLEdBQUksQ0FBQSxHQUFHLENBQUMsTUFBSixHQUFhLENBQWI7RUFBVjtBQWxCYiIsImZpbGUiOiJjb2ZmZWUvNy8wNS5oZWFkX3RhaWxfaW5pdF9sYXN0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG58IEhFQUQgfCA8LS0tLS0tLS0tLS0gVEFJTCAtLS0tLS0tLS0tLS0+IHxcblsgIDEsICAyLCAgMywgIDQsICA1LCAgNiwgIDcsICA4LCAgOSwgIDEwXVxufCA8LS0tLS0tLS0tLS0gSU5JVCAtLS0tLS0tLS0tLS0+IHwgTEFTVCB8XG5cbkltcGxlbWVudCBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuXG5oZWFkIFt4XSA9IHhcbnRhaWwgW3hdID0gW11cbmluaXQgW3hdID0gW11cbmxhc3QgW3hdID0geFxuXG4jIyNcblxuaGVhZCA9IChhcnIpIC0+IGFyclswXVxudGFpbCA9IChhcnIpIC0+IGFyclsxLi5dXG5pbml0ID0gKGFycikgLT4gYXJyWy4uLi0xXVxubGFzdCA9IChhcnIpIC0+IGhlYWQgYXJyWy0xLi4uXVxubGFzdEJldHRlciA9ICgpIC0+IGFyclthcnIubGVuZ3RoIC0gMV1cblxuIyBhID0gWzEsMiwyLDIsMiwyLDNdXG5cbiMgY29uc29sZS5sb2cgaGVhZCBhXG4jIGNvbnNvbGUubG9nIHRhaWwgYVxuIyBjb25zb2xlLmxvZyBpbml0IGFcbiMgY29uc29sZS5sb2cgbGFzdCBhXG4jIGNvbnNvbGUubG9nIGxhc3RCZXR0ZXIgYVxuIl19

(function() {
  var sortGiftCode;

  sortGiftCode = function(code) {
    return ("" + code).split("").sort().join("");
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzA2LnNvcnRfbGV0dGVyc19ieV9hbHBoYWJldC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFlBQUEsR0FBZSxTQUFDLElBQUQ7V0FDYixDQUFBLEVBQUEsR0FBRyxJQUFILENBQVMsQ0FBQyxLQUFWLENBQWdCLEVBQWhCLENBQ1MsQ0FBQyxJQURWLENBQUEsQ0FFUyxDQUFDLElBRlYsQ0FFZSxFQUZmO0VBRGE7QUFBZiIsImZpbGUiOiJjb2ZmZWUvNy8wNi5zb3J0X2xldHRlcnNfYnlfYWxwaGFiZXQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJzb3J0R2lmdENvZGUgPSAoY29kZSkgLT5cbiAgXCIje2NvZGV9XCIuc3BsaXQoXCJcIilcbiAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAuam9pbihcIlwiKVxuICBcbiAgXG5cbiJdfQ==

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzA3Lm9jY3VycmVuY2VzX2luX3N0cmluZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFdBQUEsR0FBYyxTQUFDLEdBQUQ7QUFFWixRQUFBO0lBQUEsT0FBQSxHQUFVLFNBQUMsQ0FBRCxFQUFJLENBQUo7TUFDUixJQUFBLENBQU8sQ0FBRSxDQUFBLENBQUEsQ0FBVDtRQUFpQixDQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sRUFBeEI7T0FBQSxNQUFBO1FBQStCLENBQUUsQ0FBQSxDQUFBLENBQUYsSUFBUSxFQUF2Qzs7YUFDQTtJQUZRO1dBSVYsR0FBRyxDQUFDLFdBQUosQ0FBQSxDQUNHLENBQUMsS0FESixDQUNVLEVBRFYsQ0FFRyxDQUFDLE1BRkosQ0FFVyxPQUZYLEVBRW9CLEVBRnBCO0VBTlk7OztBQWNkOzs7Ozs7Ozs7Ozs7Ozs7O0FBZEEiLCJmaWxlIjoiY29mZmVlLzcvMDcub2NjdXJyZW5jZXNfaW5fc3RyaW5nLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsib2NjdXJyZW5jZXMgPSAoc3RyKSAtPlxuICBcbiAgcmVkdWNlciA9IChhLCBpKSAtPlxuICAgIHVubGVzcyBhW2ldIHRoZW4gYVtpXSA9IDEgZWxzZSBhW2ldICs9IDFcbiAgICBhXG5cbiAgc3RyLnRvTG93ZXJDYXNlKClcbiAgICAgLnNwbGl0KCcnKVxuICAgICAucmVkdWNlIHJlZHVjZXIsIHt9XG5cblxuIyBjb25zb2xlLmxvZyBvY2N1cnJlbmNlcyAnSGVsbG8gd29ybGQuJ1xuXG5cbiMjI1xuRXhwZXJpZW5jZTpcblxuXG4xLiBQcmltaXRpdmVzIGNvcGllZCB0byBhbm90aGVyIG1lbW9yeSBjZWxsLFxuICAgcmVmZXJlbmNlIGlzbid0IGNyZWF0ZWQhXG5cbm4gPSBhW2ldXG51bmxlc3MgbiB0aGVuIG4gPSAxLi4uIC0+IE5PVCB3b3JrcyB3aGVuIGFbaV0gaXMgcHJpbWl0aXZlISEhXG5cblxuXG4yLiBDbGV2ZXIgdHJpY2sgdG8gZ2V0IHJpZCBvZiB0ZXJuYXJ5OlxuXG5hW2ldID0gKGFbaV0gb3IgMCkgKyAxXG5cblxuIyMjIl19

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZS83LzA4LmdpZnRfd2VsbF9zcGVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQSxNQUFBOztFQUFBLEdBQUEsR0FBTSxTQUFDLFFBQUQsRUFBVyxLQUFYO0FBQ0osUUFBQTtJQUFBLEdBQUEsR0FBTTtJQUVOLEtBQUssQ0FBQyxPQUFOLENBQWMsU0FBQyxDQUFELEVBQUksRUFBSjtNQUNaLElBQU8sR0FBRyxDQUFDLE1BQUosS0FBZ0IsQ0FBdkI7ZUFDRSxLQUFLLENBQUMsS0FBTixDQUFZLEVBQUEsR0FBSyxDQUFqQixDQUNLLENBQUMsT0FETixDQUNjLFNBQUMsQ0FBRCxFQUFJLEVBQUo7QUFDWixjQUFBO1VBQUEsSUFBTyxHQUFHLENBQUMsTUFBSixLQUFnQixDQUF2QjtZQUNFLEdBQUEsR0FBTSxFQUFBLEdBQUssRUFBTCxHQUFVO1lBQ2hCLElBQXNCLENBQUEsR0FBSSxDQUFKLEtBQVMsUUFBL0I7cUJBQUEsR0FBRyxDQUFDLElBQUosQ0FBUyxDQUFDLEVBQUQsRUFBSyxHQUFMLENBQVQsRUFBQTthQUZGOztRQURZLENBRGQsRUFERjs7SUFEWSxDQUFkO1dBUUEsR0FBSSxDQUFBLENBQUEsQ0FBSixJQUFVO0VBWE47OztBQXNCTjs7OztFQUlBLFNBQUEsR0FBWSxTQUFDLFFBQUQsRUFBVyxLQUFYO0FBQ1YsUUFBQTtJQUFBLENBQUEsR0FBSTtBQUVKLFdBQU0sQ0FBQSxHQUFJLEtBQUssQ0FBQyxNQUFoQjtNQUNFLENBQUEsR0FBSSxDQUFBLEdBQUk7QUFDUixhQUFNLENBQUEsR0FBSSxLQUFLLENBQUMsTUFBaEI7UUFDRSxJQUFHLEtBQU0sQ0FBQSxDQUFBLENBQU4sR0FBVyxLQUFNLENBQUEsQ0FBQSxDQUFqQixLQUF1QixRQUExQjtBQUNFLGlCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFEVDs7UUFFQSxDQUFBO01BSEY7TUFJQSxDQUFBO0lBTkY7V0FRQTtFQVhVO0FBMUJaIiwiZmlsZSI6ImNvZmZlZS83LzA4LmdpZnRfd2VsbF9zcGVudC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgaHR0cDovL3d3dy5jb2Rld2Fycy5jb20va2F0YS81NDU1NDg0NjEyNmEwMDJkNWIwMDA4NTRcblxuYnV5ID0gKGNhcGFjaXR5LCBnaWZ0cykgLT5cbiAgc2VxID0gW11cblxuICBnaWZ0cy5mb3JFYWNoICh4LCB4aSkgLT5cbiAgICB1bmxlc3Mgc2VxLmxlbmd0aCBpc250IDBcbiAgICAgIGdpZnRzLnNsaWNlKHhpICsgMSlcbiAgICAgICAgICAgLmZvckVhY2ggKHksIHlpKSAtPlxuICAgICAgICB1bmxlc3Mgc2VxLmxlbmd0aCBpc250IDBcbiAgICAgICAgICB4eWkgPSB4aSArIHlpICsgMSAjZXBpYyB3aW4hXG4gICAgICAgICAgc2VxLnB1c2ggW3hpLCB4eWldIGlmIHggKyB5IGlzIGNhcGFjaXR5XG5cbiAgc2VxWzBdIG9yIG51bGxcblxuXG4jIGNvbnNvbGUubG9nIGJ1eSAyLCBbMSwxXSAgICAgICAgIyBbMCwxXVxuIyBjb25zb2xlLmxvZyBidXkgMywgWzEsMV0gICAgICAgICMgbnVsbFxuIyBjb25zb2xlLmxvZyBidXkgNSwgWzUsMiwzLDQsNV0gICMgWzEsMl1cbiMgY29uc29sZS5sb2cgYnV5IDUsIFsxLDIsMyw0LDVdICAjIFswLDNdXG4jIGNvbnNvbGUubG9nIGJ1eSA1LCBbMCwwLDAsMiwzXSAgIyBbMyw0XVxuXG5cblxuIyMjXG5FeHBlcmllbmNlOiBDb25jZW50cmF0ZSBvbiBpbmRpY2VzIG5vIGl0ZW1zIVxuIyMjXG5cbmJ1eUJldHRlciA9IChjYXBhY2l0eSwgZ2lmdHMpIC0+XG4gIHggPSAwXG5cbiAgd2hpbGUgeCA8IGdpZnRzLmxlbmd0aFxuICAgIHkgPSB4ICsgMVxuICAgIHdoaWxlIHkgPCBnaWZ0cy5sZW5ndGhcbiAgICAgIGlmIGdpZnRzW3hdICsgZ2lmdHNbeV0gaXMgY2FwYWNpdHlcbiAgICAgICAgcmV0dXJuIFt4LCB5XVxuICAgICAgeSsrXG4gICAgeCsrXG5cbiAgbnVsbCJdfQ==
