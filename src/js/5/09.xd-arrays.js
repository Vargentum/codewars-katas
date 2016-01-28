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
  
  - if task is breakable into smaller similar tasks - reqursion !!!!
  
 
*/


function task509 () {
  
  const dim = function(...args) {
    let char = _.last(args)
       ,nums = _.initial(args)
       ,genChars = (n, c) => _.times(n, () => _.isFunction(c) ? c() : c)
       ,genArray = (expr, n, isLast) => {
          return _.isArray(expr) 
                    ? expr.map(sub => genArray(sub, n, isLast)) 
                    : genChars(n, isLast ? char : null)
        }

    return nums.reduce((result, num, i) => {
      let isLast = i === nums.length - 1
      return genArray(result, num, isLast)
    }, null)
  }


  // let d1 = dim(2,2,2, '5');
  // d1[0][0][0] = '6'
  // console.log(d1.toString())

  // let d2 = dim(2,2,2, _.partial(_.random, 10));
  // console.log(d2)
  // console.log(d2.toString())

  // let counter = function(n) {
  //   return () => {
  //     console.log(n)
  //     return n++
  //   }
  // }

  // let d3 = dim(5,5,5, counter(0))
  // console.log(d3)
  // console.log(d3.toString())
}
task509()
