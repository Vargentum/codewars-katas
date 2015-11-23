String.prototype.capitalize = function() {
  return this.trim()
             .split(' ')
             .map(word => {
                return word.replace(/^[a-z]/g, word.charAt(0).toUpperCase())
             })
             .join(' ')
}

// console.log('test som, string. ect ast arrow!'.capitalize())