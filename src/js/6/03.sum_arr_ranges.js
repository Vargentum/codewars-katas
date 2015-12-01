/*
  Write function that sums ranges of ranges between its numbers

  summaryRanges([1,2,3,4]) === ['1->4']
  summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 20, 25]) === ["0->7", "20", "25"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
*/

/*
algorhytm:

  - rm duplications
  - map -> if range > 1 => push separatly
  - if no -> splice and insert new 0->1 ...0->2...
*/

function summaryRanges (arr) {
  
  let result = []

  let removeDuplicated = (item, i) => item !== item[i + 1]

  let writeRanges = (item, i, a) => {
    if (item[i+1] - item !== 1) {
      result.push(`${item}`)
    } else {
      let pattern = `${item}->${item[i+1]}`

      if (result[i].lengh !== 1) {
        result.splice(i, 1, pattern)
      } else{
        result.push(pattern)
      };
      
    }
  }

  arr.filter(removeDuplicated)
     .forEach(writeRanges)

  return result;
}

console.log(summaryRanges([1,2,2,3,3,4]));
console.log(summaryRanges([0, 1, 2, 5, 6, 9]));

