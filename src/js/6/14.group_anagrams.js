/*
Find a way to group anagrams in provided array

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]

map, then compare x
  add x to sub-array
  rearrange x, compare with all others from array (rearranged to)
  if true - remove corresponding item from array
            add to x sub-array
*/

function groupAnagrams(words){
  let equalize = (i) => i.toLowerCase().split('').sort().join()
  let res = []

  while(words.length > 0) {
    res.push(
      _.remove(words, (y) => equalize(words[0]) === equalize(y))
    )
  }
  return res
}

console.log(groupAnagrams(["rat", "tar", "star"]))
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]).toString())