/*Задача: 
удалить все повторяющиеся более X раз элементы массива, не меняя его порядок*/

/*Решение 1: работает, но двойной reverse это пиздец! найти решение проще.
*/


function deleteNth(arr,x) {

  function deleleDuplicationsFromStart(item, index, startArray) {
    var matches = [];

    startArray.slice(index)
              .forEach( i => {
                if (i === item) {
                  matches.push(item);
                }
              });

    return matches.length <= x ? true : false;
  }

  return arr.reverse()
            .filter(deleleDuplicationsFromStart)
            .reverse();
}




/*Решение 2: 
сохранять значения в дополнительный массив,
если встречается в массиве более X раз - удалить*/


function deleteNth(arr, x) {
  var cache = [];


}



deleteNth([1,2,3,1,2,3,1], 3) // [1,1,1,2] 1,1,2































