/*

Functional programming thrives from the reuse of functions.
One core feature to extend the reuse is the concatenation of functions.


Build a function pipe to achieve this with JS. An example use could be:

  must return a function (to concating work) (1)
  return a result (2)


  Enlightment: return function (1) that return a result (2) !!!
*/


function task () {
  let addOne = e => e + 1
  let square = e => e * e


  Function.prototype.pipe = function(fn) {

    return (arg) => {
      return fn(this(arg))
    }
  }

  let result = [1,2,3,4,5].map(addOne.pipe(addOne)
                                     .pipe(addOne)
                                     .pipe(addOne))
  console.log(result)
}
// task()

/*
  Tips:

    - use arrow function as in decision
    - or `bind` wrapper function to pass correct `this`
*/