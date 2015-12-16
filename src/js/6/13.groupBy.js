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

Array.prototype.groupBy = function(fn) {
  if (!fn) return this.groupBy(x => x)

  return this.reduce((acc, x) => {
    if (acc[fn(x)]) return acc
  
    acc[fn(x)] = this.filter(i => {
      return fn(x) === fn(i)
    })
    return acc
  }, {})
}

console.log([1,2,3,2,4,1,5,1,6].groupBy())
console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ))


/*Enlightment:
  

*/