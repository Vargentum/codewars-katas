/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <=) sequence u.

*/

function task508 () {
  function dblLinear (n) {
    let seq = [1]

    let takeRight = (arr, n) => {
      return Array.apply(null, Array(n)).map((_,idx) => arr[arr.length - 1 - idx])
    }

    let genSeq = (items) => {
      if (seq.length >= n) return 
      items.forEach(i => {
        seq.push(2*i+1, 3*i+ 1)
      })
      genSeq(_.takeRight(seq, 2))
    }
    genSeq(_.takeRight(seq, 1))
    seq.sort((a,b) => a - b)
    return seq[n]
  }
  console.log(dblLinear(10))
  console.log(dblLinear(20))
  console.log(dblLinear(30))
}
task508()
