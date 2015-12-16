/*

function summaryRanges(nums)
that given a sorted array of numbers, returns the summary of its ranges.
For example:

summaryRanges([1,2,3,4]) === ['1->4']
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7","9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
summaryRanges([1,1,1,1,1]) === ['1']


Algo: extract array ranges 


*/

function Range(start, end) {
  let rng = [start]
  
  while(start <= end){
    rng.push(start)
    start++
  }

  this.add = () => {
    let last = rng[rng.length - 1]
    rng.push(last + 1)
    return this
  }

  this.toString = () => {
    if (rng.length > 1) {
      return `${rng[0]}->${rng[rng.length - 1]}`
    } else {
      return `${rng[0]}`
    }
  }
}


function summaryRanges (range) {
  let res = []

  range.forEach((crt, idx) => {
    let prev = range[idx-1];
    let diff = crt - prev

    if (prev === undefined || diff > 1) {
      res.push(new Range(crt))
    } else if (diff === 1) {
      res[res.length - 1].add()
    }
  })

  return res.map(i => i.toString())
}

// console.log(summaryRanges([0, 1, 2, 5, 6, 9]))
// console.log(summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]))

/*
Enlightment: 
  
  use OOP appropach: create your own objects, and define it's behavior

  procedural? approach can be too complicated
*/




/*
OLD: too complicated, cant handle nn and nn+ integers length (weakest part)

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
*/