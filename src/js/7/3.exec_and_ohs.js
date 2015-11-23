function XO(str) {  
  function convertToInt(arr) {
    return arr === null ? 0 : arr.length
  }
  let x = str.match(/[xX]*/g)
  let o = str.match(/[oO]*/g)

  return convertToInt(x) === convertToInt(o) ? true : false
}