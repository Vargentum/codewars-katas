/* convert list like structure (deep object) to array
Desicion process:
use recursion
inner function need to avoid result overriding
 */

function listToArray(list){
  let result = [];

  let flatten = lst => {
    if (lst.next) {
      flatten(lst.next);
    }
    result.push(lst.value);
  }

  flatten(list);
  return result.reverse();
}

let list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

// console.log(listToArray(list1));
