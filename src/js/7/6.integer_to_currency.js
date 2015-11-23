function toCurrency(price){
  var rawPrice = 
    price.toString()
         .split('')
         .reverse()
         .map((x, i) => {
           return (i + 1) % 3 === 0 ? ',' + x : x
         })
         .reverse()
         .join('')
  return rawPrice[0] === ',' ? rawPrice.slice(1) : rawPrice
}

