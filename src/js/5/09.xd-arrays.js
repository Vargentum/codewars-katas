/*


Sometimes we need to use multiDIMensional arrays (array of arrays).
The goal of this kata is to code a dim function which will create an xD-array and fill it with a default value.

You may assume:

  at least 2 arguments (d1and value) are provided
  each d argument will be a positive integer
  value argument may be a number, a string, a boolean, ...


dim( 2,2,2 "x" ) // => [[['x','x'], ['x','x']],[['x','x'], ['x','x']],[['x','x'], ['x','x']]]

['x', 'x']
[['x', 'x'], ['x', 'x']]
[ [['x','x'], ['x','x']], [['x','x'], ['x','x']] ]

Algo:
  make arrayMaker (n)
  construct XD array


Enligntment: 
  
  - lodash `clone` clones 
 
*/


function task509 () {
  
  const dim = function(...args) {
    let char = _.last(args)
       ,nums = _.initial(args)
       ,makeArrayFrom = (smt, n) => _.times(n, () => {
         let exec = _.isFunction(smt) ? smt() : smt
         return _.clone(exec, true)
       });

    return nums.reverse().reduce((result, num) => {
      return makeArrayFrom(result || char, num)
    }, null)
  }

  let test = () => 'xX'

  let d2 = dim(5,5, _.partial(_.random, 10));
  console.log(d2.toString())

  let a = _.clone('a')
}
task509()



