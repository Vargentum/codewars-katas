/*Create remove_(someIntList, integersToRemove) function with 2 parameters
someIntList - array of integers
integersToRemove - all integers from it's array will be removed from someIntList
*/


Array.prototype.remove_ = function(integer_list, value_list) {
  return integer_list.filter( function(i) {
    return !value_list.some(function(v) {
      return v === i;
    });
  });
}


var l = []
var integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
var values_list = [1, 3]
// console.log(l.remove_(integer_list, values_list))
