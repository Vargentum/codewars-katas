/*
Write a generator sequence_gen ( sequenceGen in JavaScript)
that, given the first terms of a sequence will generate a (potentially)
infinite amount of terms, where each subsequent term is the sum 
of the previous x terms where x is the amount of initial arguments 
(examples of such sequences are the Fibonacci, Tribonacci and Lucas number sequences).


fib = sequenceGen(0, 1)
fib.next().value = 0 // first term (provided)
fib.next().value = 1 // second term (provided)
fib.next().value = 1 // third term (sum of first and second terms)
fib.next().value = 2 // fourth term (sum of second and third terms)
fib.next().value = 3 // fifth term (sum of third and fourth terms)
fib.next().value = 5 // sixth term (sum of fourth and fifth terms)
fib.next().value = 8 // seventh term (sum of fifth and sixth terms)

*/

function sequenceGen (...args) {
  let i = 0
  let seq = []

  function pushPrevSum () {
    let next = 0;
    for (let j = args.length; j>0; j--) {
      next += seq[i-j]
    };
    seq.push(next)
  }

  return {
    next () {
      typeof args[i] === 'number' ? seq.push(args[i]) : pushPrevSum()
      i++
      return {
        value: seq[seq.length - 1]
      }
    }
  }
}


/*Expirience:

  if you need to return an iterator - return `this` in [Symbol.iterator] method
*/



let fib = sequenceGen(0, 1)
// console.log(fib.next().value) // 0 
// console.log(fib.next().value) // 1 
// console.log(fib.next().value) // 1 
// console.log(fib.next().value) // 2 
// console.log(fib.next().value) // 3 
// console.log(fib.next().value) // 5 
// console.log(fib.next().value) // 8 



let trib = sequenceGen(0,1,1)
// console.log(trib.next().value) // 0 
// console.log(trib.next().value) // 1 
// console.log(trib.next().value) // 1 
// console.log(trib.next().value) // 2 
// console.log(trib.next().value) // 4 
// console.log(trib.next().value) // 7 
// console.log(trib.next().value) // ?
// console.log(trib.next().value) // ?

