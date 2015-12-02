/*
  Write function that sums ranges of ranges between its numbers

  summaryRanges([1,2,3,4]) === ['1->4']
  summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 20, 25]) === ["0->7", "20", "25"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
*/

/*
algorhytm:

*/

function summaryRanges (data) {
  let rawResults = []  
  
  let rmDuplications = (item, idx) => item !== data[idx + 1]

  let getLinked = (current, idx, arr) => {
    let prev = arr[idx - 1] || current
    let diff = current - prev

    if (diff === 1) {
      rawResults[rawResults.length - 1] += `${current}`
    } else {
      rawResults.push(`${current}`)
   }
  }

  let collapseLinked = (item) => {
    if (item.length >= 2) {
      return `${item[0]}->${item[item.length - 1]}`
    } else {
      return item
    }
  }

  data.filter(rmDuplications)
     .forEach(getLinked);

  return rawResults.map(collapseLinked)
}

// console.log(summaryRanges([]));
// console.log(summaryRanges([1,1,1,1]));
// console.log(summaryRanges([1,2,3,4]));
// console.log(summaryRanges([0, 1, 2, 5, 6, 9]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7]));
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]));
// console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]));
