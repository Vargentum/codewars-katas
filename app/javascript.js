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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLnVuaXF1ZV9pbl9vcmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBWSxJQUFJLEVBQUU7O0FBRWpDLFdBQVMsYUFBYSxDQUFDLEdBQUcsRUFBQztBQUN6QixRQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDbEMsWUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUI7QUFDRCxXQUFPLE1BQU0sQ0FBQztHQUNmOztBQUVELFdBQVMsa0JBQWtCLENBQUMsR0FBRyxFQUFDO0FBQzlCLFdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBRSxVQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFLO0FBQ3pDLGFBQU8sSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbEMsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsTUFBSSxPQUFPLElBQUksQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUM3QixRQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELFNBQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDakMsQ0FBQTs7QUFHRCxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUFBQyIsImZpbGUiOiJqcy82LzAxLnVuaXF1ZV9pbl9vcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB1bmlxdWVJbk9yZGVyID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyKXtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJBdChpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBybUR1cGxpY2F0aW9uc0Zyb20oYXJyKXtcbiAgICByZXR1cm4gYXJyLmZpbHRlciggKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGFycmF5W2luZGV4IC0gMV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBzdHJpbmdUb0FycmF5KGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHJtRHVwbGljYXRpb25zRnJvbShkYXRhKTtcbn1cblxuXG51bmlxdWVJbk9yZGVyKCdBQUFCQkJCQ0lEU0VFQUEnKTtcbnVuaXF1ZUluT3JkZXIoWzEsMSwzLDQsNF0pO1xudW5pcXVlSW5PcmRlcihbXCJBXCIsXCJBXCIsXCJhXCIsXCJCXCIsXCJBXCJdKTtcblxuLypSZXF1aXJlbWVtdHM6XG4gIDEuIHdvcmsgd2l0aCBlbXB0eSBhcnJheVxuICAyLiB3b3JrIHdpdGggb25lIGVsZW1lbnRcbiAgMy4gcmVkdWNlIGR1cGxpY2F0ZXNcbiAgNC4gdHJlYXQgbG93ZXJjYXNlIGFzIGRpZmZlcmVudCBmcm9tIHVwcGVyY2FzZVxuICA1LiB3b3JrIHdpdGggaW50IGFycmF5c1xuICA2LiB3b3JrIHdpdGggY2hhciBhcnJheXNcbiovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmRlbF9udGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPQSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFOztBQUV4QixXQUFTLDJCQUEyQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQzVELFFBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFakIsY0FBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDWixPQUFPLENBQUUsVUFBQSxDQUFDLEVBQUk7QUFDYixVQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDZCxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ3BCO0tBQ0YsQ0FBQyxDQUFDOztBQUViLFdBQU8sT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztHQUMzQzs7QUFFRCxTQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FDVCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FDbkMsT0FBTyxFQUFFLENBQUM7Q0FDdEI7Ozs7OztBQUFBLEFBVUQsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUN6QixNQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Q0FHaEI7O0FBSUQsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEiLCJmaWxlIjoianMvNi8wMi5kZWxfbnRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyrQl9Cw0LTQsNGH0LA6IFxu0YPQtNCw0LvQuNGC0Ywg0LLRgdC1INC/0L7QstGC0L7RgNGP0Y7RidC40LXRgdGPINCx0L7Qu9C10LUgWCDRgNCw0Lcg0Y3Qu9C10LzQtdC90YLRiyDQvNCw0YHRgdC40LLQsCwg0L3QtSDQvNC10L3Rj9GPINC10LPQviDQv9C+0YDRj9C00L7QuiovXG5cbi8q0KDQtdGI0LXQvdC40LUgMTog0YDQsNCx0L7RgtCw0LXRgiwg0L3QviDQtNCy0L7QudC90L7QuSByZXZlcnNlINGN0YLQviDQv9C40LfQtNC10YYhINC90LDQudGC0Lgg0YDQtdGI0LXQvdC40LUg0L/RgNC+0YnQtS5cbiovXG5cblxuZnVuY3Rpb24gZGVsZXRlTnRoKGFycix4KSB7XG5cbiAgZnVuY3Rpb24gZGVsZWxlRHVwbGljYXRpb25zRnJvbVN0YXJ0KGl0ZW0sIGluZGV4LCBzdGFydEFycmF5KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcblxuICAgIHN0YXJ0QXJyYXkuc2xpY2UoaW5kZXgpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKCBpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPD0geCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhcnIucmV2ZXJzZSgpXG4gICAgICAgICAgICAuZmlsdGVyKGRlbGVsZUR1cGxpY2F0aW9uc0Zyb21TdGFydClcbiAgICAgICAgICAgIC5yZXZlcnNlKCk7XG59XG5cblxuXG5cbi8q0KDQtdGI0LXQvdC40LUgMjogXG7RgdC+0YXRgNCw0L3Rj9GC0Ywg0LfQvdCw0YfQtdC90LjRjyDQsiDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C5INC80LDRgdGB0LjQsixcbtC10YHQu9C4INCy0YHRgtGA0LXRh9Cw0LXRgtGB0Y8g0LIg0LzQsNGB0YHQuNCy0LUg0LHQvtC70LXQtSBYINGA0LDQtyAtINGD0LTQsNC70LjRgtGMKi9cblxuXG5mdW5jdGlvbiBkZWxldGVOdGgoYXJyLCB4KSB7XG4gIHZhciBjYWNoZSA9IFtdO1xuXG5cbn1cblxuXG5cbmRlbGV0ZU50aChbMSwyLDMsMSwyLDMsMV0sIDMpIC8vIFsxLDEsMSwyXSAxLDEsMlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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

  - rm duplications
  - map -> if range > 1 => push separatly
  - if no -> splice and insert new 0->1 ...0->2...
*/

function summaryRanges(arr) {

  var result = [];

  var removeDuplicated = function removeDuplicated(item, i) {
    return item !== item[i + 1];
  };

  var writeRanges = function writeRanges(item, i, a) {
    if (item[i + 1] - item !== 1) {
      result.push("" + item);
    } else {
      var pattern = item + "->" + item[i + 1];

      if (result[i].lengh !== 1) {
        result.splice(i, 1, pattern);
      } else {
        result.push(pattern);
      };
    }
  };

  arr.filter(removeDuplicated).forEach(writeRanges);

  return result;
}

console.log(summaryRanges([1, 2, 2, 3, 3, 4]));
console.log(summaryRanges([0, 1, 2, 5, 6, 9]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzLnN1bV9hcnJfcmFuZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsU0FBUyxhQUFhLENBQUUsR0FBRyxFQUFFOztBQUUzQixNQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7O0FBRWYsTUFBSSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxJQUFJLEVBQUUsQ0FBQztXQUFLLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUFBLENBQUE7O0FBRXhELE1BQUksV0FBVyxHQUFHLFNBQWQsV0FBVyxDQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQ2hDLFFBQUksSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO0FBQzFCLFlBQU0sQ0FBQyxJQUFJLE1BQUksSUFBSSxDQUFHLENBQUE7S0FDdkIsTUFBTTtBQUNMLFVBQUksT0FBTyxHQUFNLElBQUksVUFBSyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxBQUFFLENBQUE7O0FBRXJDLFVBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDekIsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO09BQzdCLE1BQUs7QUFDSixjQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO09BQ3JCLENBQUM7S0FFSDtHQUNGLENBQUE7O0FBRUQsS0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7O0FBRXhCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImpzLzYvMDMuc3VtX2Fycl9yYW5nZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBXcml0ZSBmdW5jdGlvbiB0aGF0IHN1bXMgcmFuZ2VzIG9mIHJhbmdlcyBiZXR3ZWVuIGl0cyBudW1iZXJzXG5cbiAgc3VtbWFyeVJhbmdlcyhbMSwyLDMsNF0pID09PSBbJzEtPjQnXVxuICBzdW1tYXJ5UmFuZ2VzKFswLCAxLCAyLCA1LCA2LCA5XSkgPT09IFtcIjAtPjJcIiwgXCI1LT42XCIsIFwiOVwiXVxuICBzdW1tYXJ5UmFuZ2VzKFswLCAxLCAyLCAzLCAzLCAzLCA0LCA1LCA2LCA3LCAyMCwgMjVdKSA9PT0gW1wiMC0+N1wiLCBcIjIwXCIsIFwiMjVcIl1cbiAgc3VtbWFyeVJhbmdlcyhbMCwgMSwgMiwgMywgMywgMywgNCwgNCwgNSwgNiwgNywgNywgOSwgOSwgMTBdKSA9PT0gW1wiMC0+N1wiLFwiOS0+MTBcIl1cbiovXG5cbi8qXG5hbGdvcmh5dG06XG5cbiAgLSBybSBkdXBsaWNhdGlvbnNcbiAgLSBtYXAgLT4gaWYgcmFuZ2UgPiAxID0+IHB1c2ggc2VwYXJhdGx5XG4gIC0gaWYgbm8gLT4gc3BsaWNlIGFuZCBpbnNlcnQgbmV3IDAtPjEgLi4uMC0+Mi4uLlxuKi9cblxuZnVuY3Rpb24gc3VtbWFyeVJhbmdlcyAoYXJyKSB7XG4gIFxuICBsZXQgcmVzdWx0ID0gW11cblxuICBsZXQgcmVtb3ZlRHVwbGljYXRlZCA9IChpdGVtLCBpKSA9PiBpdGVtICE9PSBpdGVtW2kgKyAxXVxuXG4gIGxldCB3cml0ZVJhbmdlcyA9IChpdGVtLCBpLCBhKSA9PiB7XG4gICAgaWYgKGl0ZW1baSsxXSAtIGl0ZW0gIT09IDEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2l0ZW19YClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdHRlcm4gPSBgJHtpdGVtfS0+JHtpdGVtW2krMV19YFxuXG4gICAgICBpZiAocmVzdWx0W2ldLmxlbmdoICE9PSAxKSB7XG4gICAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMSwgcGF0dGVybilcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgcmVzdWx0LnB1c2gocGF0dGVybilcbiAgICAgIH07XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBhcnIuZmlsdGVyKHJlbW92ZUR1cGxpY2F0ZWQpXG4gICAgIC5mb3JFYWNoKHdyaXRlUmFuZ2VzKVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmNvbnNvbGUubG9nKHN1bW1hcnlSYW5nZXMoWzEsMiwyLDMsMyw0XSkpO1xuY29uc29sZS5sb2coc3VtbWFyeVJhbmdlcyhbMCwgMSwgMiwgNSwgNiwgOV0pKTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjEuYWxsX25vbmVfYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFTLFNBQVMsRUFBQztBQUN2QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztBQUNuQyxRQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sS0FBSyxDQUFBO0tBQ2I7R0FDRjtBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1osQ0FBQTs7QUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLFNBQVMsRUFBQztBQUN4QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztBQUNuQyxRQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN0QixhQUFPLEtBQUssQ0FBQTtLQUNiO0dBQ0Y7QUFDRCxTQUFPLElBQUksQ0FBQTtDQUNaLENBQUE7O0FBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxTQUFTLEVBQUM7QUFDdkMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDbkMsUUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsYUFBTyxJQUFJLENBQUE7S0FDWjtHQUNGO0FBQ0QsU0FBTyxLQUFLLENBQUE7Q0FDYjs7O0FBQUEiLCJmaWxlIjoianMvNy8xLmFsbF9ub25lX2FueS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTXkgZGVzaWNpb24qL1xuXG5BcnJheS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24ocHJlZGljYXRlKXtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcbiAgICBpZiAoIXByZWRpY2F0ZSh0aGlzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbkFycmF5LnByb3RvdHlwZS5ub25lID0gZnVuY3Rpb24ocHJlZGljYXRlKXtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKXtcbiAgICBpZiAocHJlZGljYXRlKHRoaXNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuQXJyYXkucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uKHByZWRpY2F0ZSl7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKHByZWRpY2F0ZSh0aGlzW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cblxuLypCZXN0IHByYWN0aWNlczogdXNlIGZpbHRlciovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqcy83LzEwLnNvcnRfd2l0aF9hcnJvd3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjExLmZ1bmN0aW9uX2ZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFDO0FBQ2pCLFdBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN2QixXQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxHQUFHLENBQUM7S0FBQSxDQUFDLENBQUM7R0FDOUI7QUFDRCxTQUFPLFFBQVEsQ0FBQztDQUNqQjs7QUFJRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFBQSIsImZpbGUiOiJqcy83LzExLmZ1bmN0aW9uX2ZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKkRlc2NyaXB0aW9uOlxuXG5Xcml0ZSBhIGZ1bmN0aW9uLCBmYWN0b3J5LCB0aGF0IHRha2VzIGEgbnVtYmVyIGFzIGl0cyBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbi5cblxuVGhlIHJldHVybmVkIGZ1bmN0aW9uIHNob3VsZCB0YWtlIGFuIGFycmF5IG9mIG51bWJlcnMgYXMgaXRzIHBhcmFtZXRlciwgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aG9zZSBudW1iZXJzIG11bHRpcGxpZWQgYnkgdGhlIG51bWJlciB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGUgZmlyc3QgZnVuY3Rpb24uXG5cbkluIHRoZSBleGFtcGxlIGJlbG93LCA1IGlzIHRoZSBudW1iZXIgcGFzc2VkIGludG8gdGhlIGZpcnN0IGZ1bmN0aW9uLiBTbyBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhcnJheSBhbmQgbXVsdGlwbGllcyBhbGwgZWxlbWVudHMgaW4gaXQgYnkgZml2ZS5cblxuVHJhbnNsYXRpb25zIGFuZCBjb21tZW50cyAoYW5kIHVwdm90ZXMpIHdlbGNvbWUhKi9cblxuZnVuY3Rpb24gZmFjdG9yeSh4KXtcbiAgZnVuY3Rpb24gbXVsdGlwbHkoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkubWFwKGkgPT4gaSAqIHgpO1xuICB9XG4gIHJldHVybiBtdWx0aXBseTtcbn1cblxuXG5cbnZhciBmaXZlcyA9IGZhY3RvcnkoNSk7XG52YXIgbXlBcnJheSA9IFsxLDIsM11cbmZpdmVzKG15QXJyYXkpIC8vWzUsIDEwLCAxNV0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

'use strict';

String.prototype.capitalize = function () {
   return this.trim().split(' ').map(function (word) {
      return word.replace(/^[a-z]/g, word.charAt(0).toUpperCase());
   }).join(' ');
};

// console.log('test som, string. ect ast arrow!'.capitalize())
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjIuY2FwaXRhbGl6ZWRfc3RyaW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVc7QUFDdkMsVUFBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWLEdBQUcsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNWLGFBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Q0FDdEI7OztBQUFBIiwiZmlsZSI6ImpzLzcvMi5jYXBpdGFsaXplZF9zdHJpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRyaW0oKVxuICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgLm1hcCh3b3JkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29yZC5yZXBsYWNlKC9eW2Etel0vZywgd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSlcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5qb2luKCcgJylcbn1cblxuLy8gY29uc29sZS5sb2coJ3Rlc3Qgc29tLCBzdHJpbmcuIGVjdCBhc3QgYXJyb3chJy5jYXBpdGFsaXplKCkpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";

function XO(str) {
  function convertToInt(arr) {
    return arr === null ? 0 : arr.length;
  }
  var x = str.match(/[xX]*/g);
  var o = str.match(/[oO]*/g);

  return convertToInt(x) === convertToInt(o) ? true : false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjMuZXhlY19hbmRfb2hzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ3pCLFdBQU8sR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtHQUNyQztBQUNELE1BQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDM0IsTUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTs7QUFFM0IsU0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUE7Q0FDMUQiLCJmaWxlIjoianMvNy8zLmV4ZWNfYW5kX29ocy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFhPKHN0cikgeyAgXG4gIGZ1bmN0aW9uIGNvbnZlcnRUb0ludChhcnIpIHtcbiAgICByZXR1cm4gYXJyID09PSBudWxsID8gMCA6IGFyci5sZW5ndGhcbiAgfVxuICBsZXQgeCA9IHN0ci5tYXRjaCgvW3hYXSovZylcbiAgbGV0IG8gPSBzdHIubWF0Y2goL1tvT10qL2cpXG5cbiAgcmV0dXJuIGNvbnZlcnRUb0ludCh4KSA9PT0gY29udmVydFRvSW50KG8pID8gdHJ1ZSA6IGZhbHNlXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";

function getCharacters(obj, key, val) {
  return obj.characters.filter(function (item) {
    return item[key] && item[key].toLowerCase() === val.toLowerCase();
  });
}

/*TODO: 
get object, which key equals some val (provided), else return []*/

var characters = { "characters": [{ "name": "Bill Cipher", "age": "Unknown", "speciality": "warp reality" }] };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjQuc2VhcmNoX0pTT04uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNwQyxTQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLFVBQUMsSUFBSSxFQUFLO0FBQ3RDLFdBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDbkUsQ0FBQyxDQUFDO0NBQ0o7Ozs7O0FBQUEsQUFLRCxJQUFJLFVBQVUsR0FBRyxFQUFDLFlBQVksRUFBRSxDQUM1QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUMsY0FBYyxFQUFDLENBRXZFLEVBQUMsQ0FBQyIsImZpbGUiOiJqcy83LzQuc2VhcmNoX0pTT04uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDaGFyYWN0ZXJzKG9iaiwga2V5LCB2YWwpIHtcbiAgcmV0dXJuIG9iai5jaGFyYWN0ZXJzLmZpbHRlciggKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbVtrZXldICYmIGl0ZW1ba2V5XS50b0xvd2VyQ2FzZSgpID09PSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbi8qVE9ETzogXG5nZXQgb2JqZWN0LCB3aGljaCBrZXkgZXF1YWxzIHNvbWUgdmFsIChwcm92aWRlZCksIGVsc2UgcmV0dXJuIFtdKi9cblxubGV0IGNoYXJhY3RlcnMgPSB7XCJjaGFyYWN0ZXJzXCI6IFtcbiAgICB7XCJuYW1lXCI6XCJCaWxsIENpcGhlclwiLCBcImFnZVwiOlwiVW5rbm93blwiLCBcInNwZWNpYWxpdHlcIjpcIndhcnAgcmVhbGl0eVwifSxcbiAgICAvLyAuLi4uLi5cbl19O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUuZnJ1aXRfYmFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBUyxZQUFZLENBQUMsV0FBVyxFQUFDO0FBQ2hDLE1BQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7QUFDckMsV0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztLQUFBLENBQUMsQ0FBQztHQUNwRSxNQUFNO0FBQ0wsV0FBTyxFQUFFLENBQUM7R0FDWDtDQUNGIiwiZmlsZSI6ImpzLzcvNS5mcnVpdF9iYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW1vdmVSb3R0ZW4oYmFnT2ZGcnVpdHMpe1xuICBpZiAoYmFnT2ZGcnVpdHMgJiYgYmFnT2ZGcnVpdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhZ09mRnJ1aXRzLm1hcChmID0+IGYudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdyb3R0ZW4nLCAnJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

function toCurrency(price) {
  var rawPrice = price.toString().split('').reverse().map(function (x, i) {
    return (i + 1) % 3 === 0 ? ',' + x : x;
  }).reverse().join('');
  return rawPrice[0] === ',' ? rawPrice.slice(1) : rawPrice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjYuaW50ZWdlcl90b19jdXJyZW5jeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBQztBQUN4QixNQUFJLFFBQVEsR0FDVixLQUFLLENBQUMsUUFBUSxFQUFFLENBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNULE9BQU8sRUFBRSxDQUNULEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDYixXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7R0FDdkMsQ0FBQyxDQUNELE9BQU8sRUFBRSxDQUNULElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNoQixTQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUE7Q0FDMUQiLCJmaWxlIjoianMvNy82LmludGVnZXJfdG9fY3VycmVuY3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0b0N1cnJlbmN5KHByaWNlKXtcbiAgdmFyIHJhd1ByaWNlID0gXG4gICAgcHJpY2UudG9TdHJpbmcoKVxuICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKGkgKyAxKSAlIDMgPT09IDAgPyAnLCcgKyB4IDogeFxuICAgICAgICAgfSlcbiAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgIC5qb2luKCcnKVxuICByZXR1cm4gcmF3UHJpY2VbMF0gPT09ICcsJyA/IHJhd1ByaWNlLnNsaWNlKDEpIDogcmF3UHJpY2Vcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjcubGlzdF90b19hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLFNBQVMsV0FBVyxDQUFDLElBQUksRUFBQztBQUN4QixNQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFHLEdBQUcsRUFBSTtBQUNuQixRQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDWixhQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25CO0FBQ0QsVUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDeEIsQ0FBQTs7QUFFRCxTQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxTQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN6Qjs7QUFFRCxJQUFJLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBQyxFQUFDOzs7QUFBQyIsImZpbGUiOiJqcy83LzcubGlzdF90b19hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbnZlcnQgbGlzdCBsaWtlIHN0cnVjdHVyZSAoZGVlcCBvYmplY3QpIHRvIGFycmF5XG5EZXNpY2lvbiBwcm9jZXNzOlxudXNlIHJlY3Vyc2lvblxuaW5uZXIgZnVuY3Rpb24gbmVlZCB0byBhdm9pZCByZXN1bHQgb3ZlcnJpZGluZ1xuICovXG5cbmZ1bmN0aW9uIGxpc3RUb0FycmF5KGxpc3Qpe1xuICBsZXQgcmVzdWx0ID0gW107XG5cbiAgbGV0IGZsYXR0ZW4gPSBsc3QgPT4ge1xuICAgIGlmIChsc3QubmV4dCkge1xuICAgICAgZmxhdHRlbihsc3QubmV4dCk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGxzdC52YWx1ZSk7XG4gIH1cblxuICBmbGF0dGVuKGxpc3QpO1xuICByZXR1cm4gcmVzdWx0LnJldmVyc2UoKTtcbn1cblxubGV0IGxpc3QxID0ge3ZhbHVlOiAxLCBuZXh0OiB7dmFsdWU6IDIsIG5leHQ6IHt2YWx1ZTogMywgbmV4dDogbnVsbH19fTtcblxuLy8gY29uc29sZS5sb2cobGlzdFRvQXJyYXkobGlzdDEpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjguZmluZF9lbXBsb3llZXNfcm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsU0FBUyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7b0JBQ1MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7QUFBdEQsbUJBQWlCO0FBQUUsa0JBQWdCOztBQUNwQyxNQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFFLFVBQUEsQ0FBQyxFQUFJO0FBQ3BDLFdBQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLGdCQUFnQixDQUFDO0dBQzdFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLFNBQU8sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7Q0FDekQiLCJmaWxlIjoianMvNy84LmZpbmRfZW1wbG95ZWVzX3JvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3JlbWVtYmVyIHRoYXQgZmlsdGVyIHJldHVybnMgYW4gYXJyYXkuIE5vdCBhbiBvYmplY3QhXG4vL2NhbiBjaGFpbiBhcnJheSdzIGVsZW1lbnQgY2FsbCBkaXJlY3RseSB0byBmaWx0ZXJcblxuZnVuY3Rpb24gZmluZEVtcGxveWVlc1JvbGUobmFtZSkge1xuICBbcHJvdmlkZWRGaXJzdE5hbWUsIHByb3ZpZGVkTGFzdE5hbWVdID0gbmFtZS5zcGxpdCgnICcpO1xuICBsZXQgZW1wbG95ZWUgPSBlbXBsb3llZXMuZmlsdGVyKCBlID0+IHtcbiAgICByZXR1cm4gZS5maXJzdE5hbWUgPT09IHByb3ZpZGVkRmlyc3ROYW1lICYmIGUubGFzdE5hbWUgPT09IHByb3ZpZGVkTGFzdE5hbWU7XG4gIH0pWzBdO1xuICByZXR1cm4gZW1wbG95ZWUgPyBlbXBsb3llZS5yb2xlIDogXCJEb2VzIG5vdCB3b3JrIGhlcmUhXCI7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjkucm1fbWFya2VkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFTLFlBQVksRUFBRSxVQUFVLEVBQUU7QUFDM0QsU0FBTyxZQUFZLENBQUMsTUFBTSxDQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3RDLFdBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFO0FBQ2xDLGFBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFBOztBQUdELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNWLElBQUksWUFBWSxHQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQzVDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFBQSIsImZpbGUiOiJqcy83Lzkucm1fbWFya2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypDcmVhdGUgcmVtb3ZlXyhzb21lSW50TGlzdCwgaW50ZWdlcnNUb1JlbW92ZSkgZnVuY3Rpb24gd2l0aCAyIHBhcmFtZXRlcnNcbnNvbWVJbnRMaXN0IC0gYXJyYXkgb2YgaW50ZWdlcnNcbmludGVnZXJzVG9SZW1vdmUgLSBhbGwgaW50ZWdlcnMgZnJvbSBpdCdzIGFycmF5IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHNvbWVJbnRMaXN0XG4qL1xuXG5cbkFycmF5LnByb3RvdHlwZS5yZW1vdmVfID0gZnVuY3Rpb24oaW50ZWdlcl9saXN0LCB2YWx1ZV9saXN0KSB7XG4gIHJldHVybiBpbnRlZ2VyX2xpc3QuZmlsdGVyKCBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuICF2YWx1ZV9saXN0LnNvbWUoZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIHYgPT09IGk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbnZhciBsID0gW11cbnZhciBpbnRlZ2VyX2xpc3QgPSAgWzEsIDEsIDIgLDMgLDEgLDIgLDMgLDRdXG52YXIgdmFsdWVzX2xpc3QgPSBbMSwgM11cbi8vIGNvbnNvbGUubG9nKGwucmVtb3ZlXyhpbnRlZ2VyX2xpc3QsIHZhbHVlc19saXN0KSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
