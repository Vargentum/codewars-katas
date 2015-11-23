/*My desicion*/

Array.prototype.all = function(predicate){
  for (var i = 0; i < this.length; i++){
    if (!predicate(this[i])) {
      return false
    }
  }
  return true
}

Array.prototype.none = function(predicate){
  for (var i = 0; i < this.length; i++){
    if (predicate(this[i])) {
      return false
    }
  }
  return true
}

Array.prototype.any = function(predicate){
  for (var i = 0; i < this.length; i++){
    if (predicate(this[i])) {
      return true
    }
  }
  return false
}


/*Best practices: use filter*/
