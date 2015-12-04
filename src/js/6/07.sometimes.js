/*
Implement a function sometimes that takes
another funciton as an argument and returns
a new version of that function that will behave as the following:

// The first 3 tmes we call s it returns add's expected output
// But the 4th time it returns a default message 'hmm, I don't know!

// Each consecutive odd call returns add's expected output
// Each consecutive even call doesn't work and returns 'hmm, I don't know!'


Algo:
  make wrapper
  save count of function call
  check 1 equality (4) => after
  toggle check2 mark to true
  check2 equality

*/

function sometimes (fn) {
  let callCount = 0
  let initStrange = false
  let phrase = "hmm, I don't know!"

  return (...args) => {
    callCount++
    if (callCount === 4) {
      initStrange = true
      return phrase
    } 
    if (callCount % 2 === 0 && initStrange) {
      return phrase
    }
    return fn.apply(this, args)
  }
}

let sum = (a, b) => a + b;

let sumStrange = sometimes(sum);

// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2));
// console.log(sumStrange(1,2)); // hmm, I don't know! (4)
// console.log(sumStrange(1,2)); 
// console.log(sumStrange(1,2)); // hmm, I don't know! (consequence odd)



/*Tips:
  
  use equality operators strength
  use ternary to shorten
*/

function sometimes1 (fn) {
  let i = 0
  
  return (...args) => {
    ++i 
    return (i < 4 || i % 2) ?
      fn(...args) : "hmm, I don't know!"
  }
}

// let sumStrange1 = sometimes(sum);

// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2));
// console.log(sumStrange1(1,2)); // hmm, I don't know! (4)
// console.log(sumStrange1(1,2)); 
// console.log(sumStrange1(1,2)); // hmm, I don't know! (consequence odd)
