/*
In this kata, you will get an array of unique numbers, paired with strings, like

[(3, "Fizz"), (5, "Buzz"), (15, "FizzBuzz")]


Depending on the language, 
that's either a list/array of tuples or an array of arrays. It's always sorted.

Your job is to return another function,
that—given a number n—returns the appropriate string.
How do you know the correct string? 
Well, it's the one paired with the largest key that still divides the number n!


var myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
myFizz(3)  === "Fizz"
myFizz(4)  === "4"
myFizz(5)  === "Buzz"
myFizz(15) === "FizzBuzz"

*/

function fizzBuzzFactory (instr) {

  return (int) => {

    for (let i = instr.length - 1; i >= 0; i--) {
      if (int % instr[i][0] === 0) return instr[i][1]
    };
    return `${int}`
  }
}
