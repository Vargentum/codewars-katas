/*
Write a function which takes one parameter
representing the dimensions of a checkered board. 
The board will always be square, so 5 means you will need a 5x5 board.

checkeredBoard(5)

■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
*/


function checkeredBoard (dim) {
  let res = ""
  for (var i = 1; i <= dim*dim; i++) {
    i % 2 === 0 ? res += "□ " : res += "■ "
    i % dim === 0 ? res += "\n" : ""
  }
  return res;
}

// console.log(checkeredBoard(11));