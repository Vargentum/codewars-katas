/*
Write a function defaultArguments. 
It takes a function as an argument, along with an object containing
default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults. (PROBLEM WITH THIS)

*/
function task402 () {




  let defaultArguments = (func, params) => {
    let defaults = func.toString()
                       .match(/\((.*?)\)/)[1]
                       .split(', ')
                       .map(n => params[n])
    
    return function () {
      let args = []
      for (let i = 0; i < defaults.length; i++) {
        args.push(arguments[i] || defaults[i])
      };
      return func.apply(this, args)
    }
  }

  let add = (a, b) => a + b

  let add_ = defaultArguments(add,{b:9});
  console.log(add_(10)); // returns 19
  console.log(add_(10,7)); // returns 17
  console.log(add_()); // returns NaN

  add_ = defaultArguments(add_,{b:3, a:2});
  console.log(add_(10)); // returns 13 now
  console.log(add_());  // returns 5

  
}
// task402()

