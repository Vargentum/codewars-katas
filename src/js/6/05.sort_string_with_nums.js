/*
Your task is to sort a given string.
Each word in the String will contain a single number.
This number is the position the word should have in the result.
*/

function order (str) {
  let pattern = /\d+/;

  return str.split(" ")
            .sort((a, b) => a.match(pattern) < b.match(pattern) ? -1 : 1)
            .join(" ")
}

/*
Tip: you can simply substract a from b
a.match(pattern) - b.match(patterns)
*/

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// console.log(typeof order(""));
