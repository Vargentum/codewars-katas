/*Replicate these methods*/

Math.floor = function(number) {
  return ~~number;
};

Math.ceil = function(number) {
  if (number % 1 === 0) return number
  return number > 0 ? ~~number + 1 : ~~number - 1
};

Math.round = function(number) {
  let nearest = number.toString().match(/\.(\d)/)
  if (!nearest) return number
  return parseFloat(nearest[1]) >= 5 ? Math.ceil(number) : Math.floor(number)
};


// console.log(Math.round(5.444449))
// console.log(Math.round(5.944443))
// console.log(Math.round(-5.444449))
// console.log(Math.round(-5.944443))
// console.log(Math.round(5))
// console.log(Math.round(6))
// console.log(Math.round(-5))
// console.log(Math.round(-6))


/*
Find a better way with parseInt()

*/