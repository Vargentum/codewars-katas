var uniqueInOrder = function(data) {

  function stringToArray(str){
    var result = [];
    for (var i = 0; i < str.length; i++){
      result.push(str.charAt(i));
    }
    return result;
  }

  function rmDuplicationsFrom(arr){
    return arr.filter( (item, index, array) => {
      return item !== array[index - 1];
    });
  }

  if (typeof(data) === 'string') {
    data = stringToArray(data);
  }

  return rmDuplicationsFrom(data);
}


uniqueInOrder('AAABBBBCIDSEEAA');
uniqueInOrder([1,1,3,4,4]);
uniqueInOrder(["A","A","a","B","A"]);

/*Requirememts:
  1. work with empty array
  2. work with one element
  3. reduce duplicates
  4. treat lowercase as different from uppercase
  5. work with int arrays
  6. work with char arrays
*/
