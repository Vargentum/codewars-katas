/*
Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *    
   ***   
  *****  
 ******* 
*********


Algo:
  - calc the foundation width
  - draw reverted tree
    - draw foundation
    - 
  - reverse array
  - join with \n

  5 white 1 star 5 white
  4 white 3 star 4 white

*/

function christmasTree (height) {
  let base = height * 2 - 1
  let half = Math.floor(base / 2)
  let result = []


  for (let i = 0; i < height; i++) {
    let spaceCount = half - i;
    result.push(" ".repeat(spaceCount) +
                "*".repeat(base - spaceCount * 2) +
                " ".repeat(spaceCount))
  }

  return result.join("\n")
}



function christmasTreeWithoutRepeat (height) {
  let base = height * 2 - 1
  let half = Math.floor(base / 2)
  let result = []
  let repeat = (char, n) => new Array(n + 1).join(char) 

  for (let i = 0; i < height; i++) {
    let spaceCount = half - i;
    result.push(repeat(" ", spaceCount)
              + repeat("*", base - spaceCount * 2)
              + repeat(" ", spaceCount)
            )
  }

  return result.join("\n")
}

// console.log(christmasTree(5))
// console.log('------------')
// console.log(christmasTreeWithoutRepeat(5))
