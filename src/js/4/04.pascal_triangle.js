/*

Write a function that, given a depth (n), returns a 
single-dimensional array representing Pascal's Triangle to the n-th level.

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Algo

  generate n arrays (levels)
  for each NOT first integer in array:
    compare with prev array corresponding value
    if no - return 1
    if yes - plus with prev of corresponding


*/

function task404 () {
  
  const pascalsTriangle = n => {
    let array = []

    let createLvl = i => {
      let prev = array[i - 1]

      return _(new Array(i+1))
        .map((char, idx) => {
          if (!(prev && prev[idx] && prev[idx - 1])) return 1
          return prev[idx] + prev[idx - 1]
        })
        .value()
    }

    _.times(n, i => {
        array.push(createLvl(i))
      })

    return _.flatten(array)
  }


  console.log(pascalsTriangle(4))
  console.log(pascalsTriangle(10))


}
// task404()
