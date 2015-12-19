/*
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells,
each of which is in one of two possible states, alive or dead. 

Every cell interacts with its eight neighbours, which are the cells that are horizontally, 
vertically, or diagonally adjacent. At each step in time, the following transitions occur:

  - Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  - Any live cell with two or three live neighbours lives on to the next generation.
  - Any live cell with more than three live neighbours dies, as if by overcrowding.
  - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.



..implement your own method which will take the
initial state as an NxM array of 0's (dead cell) and 1's (living cell)
and return an equally sized array representing the next generation.
Cells outside the array must be considered dead.

Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).

N.B.: for illustration purposes, 0 and 1 will 
be represented as ░ and ▓ blocks respectively.

You can take advantage of the 'htmlize' function to get a text representation of the universe:
eg:



Implement: 
  getNeibours method
  rules:
    dead rule 1
    dead rule 2
    live rule
    resurrect rule

  apply rule for each cell
    - check neibours
*/

class Universe {

  _mapCells(fn) {
    return _.map(this.fields, (row, rowIndex) => {
      return _.map(row, (cell, cellIndex) => {
        return fn(rowIndex, cellIndex, cell)
      })
    })
  } 

  _getNeiboursOf(ri, ci) {
    let topNeibours = _.slice(this.fields[ri - 1], ci - 1, ci + 1)
    let btmNeibours = _.slice(this.fields[ri + 1], ci - 1, ci + 1) 
    let crtNeibours = [this.fields[ri][ci - 1], this.fields[ri][ci + 1]]
    
    return _([]).push(topNeibours, crtNeibours, btmNeibours)
                .flatten()
                .compact()
                .value()
  }

  _startGen(size) {
    return _.map(new Array(size),
                 () => _.map(new Array(size), 
                  () => _.random(0, 1)))
  }


  constructor(size) {
    this.fields = this._startGen(size)
    console.log(this)
  }

  toString() {
    return _(this.fields)
            .map(f => f.join(" "))
            .join('\n')
  }

  
  nextGen() {
    this.fields = this._mapCells(
      (ri, ci, cell) => {
        let aliveNeibours = this._getNeiboursOf(ri, ci).length
        switch(cell){
          case 1: 
            return aliveNeibours === 3 || aliveNeibours === 2 ? 1 : 0
          case 0: 
            return aliveNeibours === 3 ? 1 : 0
        }
      }
    )
    return this
  }
}

let a = new Universe(20)
console.log(a.toString())
for (let i = 0; i < 10; i++) {
  console.log(`------- generation: ${i+1}`)
  console.log(a.nextGen().toString())
};
