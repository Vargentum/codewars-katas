/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

*/



/*2 pointers decision (by Andrew tip)

Algo: 
  pointer points to seq item
  generate number by each pointer
  
  increase pointer if generated value is lowest 
    to keep seq ordered



*/


function task508 () {

  function dblLinear (n) {
    let p1 = 0
       ,p2 = 0
       ,seq = [1]
       ,genX = i => 2 * i + 1
       ,genY = i => 3 * i + 1

    for (let i = 0; i < n; i++) {
      let v1 = genX(seq[p1])
         ,v2 = genY(seq[p2])

      if (v1 < v2) {
        seq.push(v1)
        p1++
      } 
      else if (v2 < v1) {
        seq.push(v2)
        p2++
      }
      else {
        p1++
        i--
      }
    }
    return seq[n]
  }
  
  console.log(dblLinear(50))
  console.log(dblLinear(100))

}
// task508()


/*Slow decision: 
  problem: sort all array after each char generation

  function dblLinear (n) {
    let seq = [1]
    let genSubSeq = (i) => {
      seq.push(2*seq[i]+1, 3*seq[i]+ 1)
    }
    let validateSubSeq = () => {
      seq = _(seq).sort((a,b) => a - b)
                  .uniq(true)
                  .value()
    }
    for (let i = 0; i < n; i++) {
      if (seq.length >= 2*n) break
      genSubSeq(i)
      validateSubSeq()
    };
    return seq[n]
  }
*/
