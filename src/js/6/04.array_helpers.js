/*
  Create the following functions

  square() must return a copy of the array, containing all values squared, the original array must not be changed
  cube() must return a copy of the array, containing all values cubed, the original array must not be changed
  average() must return the average of all array values, average() on an empty array must return NaN
  sum() must return the sum of all array values
  even() must return an array of all even numbers, the original array must not be changed
  odd() must return an array of all odd numbers, the original array must not be changed
*/


Array.prototype.square = function () {
  return this.map( i => Math.pow(i, 2))
}


Array.prototype.cube = function () {
  return this.map( i => Math.pow(i, 3))  
}


Array.prototype.sum = function () {
  return this.reduce( (a, i) => a + i , 0)
}


Array.prototype.average = function () {
  return this.sum() / this.length
}


Array.prototype.even = function () {
  return this.filter( i => i % 2 === 0)  
}


Array.prototype.odd = function () {
  return this.filter(i => i % 2 !== 0)  
}


/*Tips:
  
  map, reduce, and filter doesn't mutate the array
  filter mechanism:
    - true? -> add to new array
    - false? -> no addition

  
  Status: exellent (good idea to realize `average` though `sum`)
*/