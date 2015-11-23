(function() {
  var digitize, insertDash;

  digitize = function(n) {
    var item, res;
    return res = (function() {
      var j, len, ref, results;
      ref = "" + n;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        item = ref[j];
        results.push(item);
      }
      return results;
    })();
  };


  /*
  Write a function insertDash(num) that will insert dashes ('-')
  between each two odd numbers in num.
   */

  insertDash = function(num) {
    var isOdd;
    isOdd = function(s) {
      if (parseFloat(s) % 2 !== 0) {
        return true;
      } else {
        return false;
      }
    };
    return num.map(function(n, i) {
      if (isOdd(n && isOdd(n[i + 1]))) {
        return n + "-";
      } else {
        return n;
      }
    });
  };

  console.log(insertDash(246943));

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGV3YXJzLzcvZGlnaXRpemUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxRQUFBLEdBQVcsU0FBQyxDQUFEO0FBQ1QsUUFBQTtXQUFBLEdBQUE7O0FBQU87QUFBQTtXQUFBLHFDQUFBOztxQkFBQTtBQUFBOzs7RUFERTs7O0FBUVg7Ozs7O0VBSUEsVUFBQSxHQUFhLFNBQUMsR0FBRDtBQUNYLFFBQUE7SUFBQSxLQUFBLEdBQVEsU0FBQyxDQUFEO01BQ04sSUFBTyxVQUFBLENBQVcsQ0FBWCxDQUFBLEdBQWdCLENBQWhCLEtBQXFCLENBQTVCO2VBQW1DLEtBQW5DO09BQUEsTUFBQTtlQUEyQyxNQUEzQzs7SUFETTtXQUdSLEdBQUcsQ0FBQyxHQUFKLENBQVEsU0FBQyxDQUFELEVBQUksQ0FBSjtNQUNOLElBQUcsS0FBQSxDQUFNLENBQUEsSUFBTSxLQUFBLENBQU0sQ0FBRSxDQUFBLENBQUEsR0FBRSxDQUFGLENBQVIsQ0FBWixDQUFIO2VBQW9DLENBQUQsR0FBRyxJQUF0QztPQUFBLE1BQUE7ZUFBOEMsRUFBOUM7O0lBRE0sQ0FBUjtFQUpXOztFQVFiLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBQSxDQUFXLE1BQVgsQ0FBWjtBQXBCQSIsImZpbGUiOiJjb2Rld2Fycy83L2RpZ2l0aXplLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGlnaXRpemUgPSAobikgLT5cbiAgcmVzID0gKGl0ZW0gZm9yIGl0ZW0gaW4gXCJcIiArIG4pXG5cbiMgY29uc29sZS5sb2cgZGlnaXRpemUgMTIzNDVcblxuXG5cblxuIyMjXG5Xcml0ZSBhIGZ1bmN0aW9uIGluc2VydERhc2gobnVtKSB0aGF0IHdpbGwgaW5zZXJ0IGRhc2hlcyAoJy0nKVxuYmV0d2VlbiBlYWNoIHR3byBvZGQgbnVtYmVycyBpbiBudW0uXG4jIyNcbmluc2VydERhc2ggPSAobnVtKSAtPlxuICBpc09kZCA9IChzKSAtPlxuICAgIHVubGVzcyBwYXJzZUZsb2F0KHMpICUgMiBpcyAwIHRoZW4gb24gZWxzZSBvZmZcbiAgXG4gIG51bS5tYXAgKG4sIGkpIC0+XG4gICAgaWYgaXNPZGQgbiBhbmQgaXNPZGQgbltpKzFdIHRoZW4gXCIje259LVwiIGVsc2UgblxuXG5cbmNvbnNvbGUubG9nIGluc2VydERhc2ggMjQ2OTQzXG4gIFxuICBcblxuIl19
