/*
Given an n x n array, 
return the array elements arranged from outermost elements
to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]


Algo:
  helper: get x elems

*/
function task401 () {

  function taskSnailSort () {
    
    let snail = table => {
      let dim = table.length

        
      let collectSnailed = (i) => {
        let type = 'top'

        return (j) => {
          switch(type){
            case 'top':
              type = 'right'
              return table[i]
            case 'right':
              type = 'bottom'
              return table.map(row => row[table.length - 1 - i])
            case 'bottom':
              type = 'left'
              return table.
              return
          }
        }
      }

      for (var i = 0; i < Math.ceil(table.length / 2); i--) {
        let s = collectSnailed(i)
        for (var j = table.length; j > 0; j--) {
          s(j - i)
        };
      };
    }


    let a = [[1,2,3],[4,5,6],[7,8,9]]
    console.log(snail(a))
  }
  taskSnailSort()

}
// task401()
