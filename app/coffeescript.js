
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
