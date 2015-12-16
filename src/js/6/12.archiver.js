/*
Implement Archiver constructor with following behavior:

//new Date() == '2013-09-24...Z'
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]


Hint: Use get/set functions
*/


function Archiver () {
  
  let archive = [];

  Object.defineProperty(this, "temperature", {
    set: function(t) {
      archive.push({
        date: new Date(),
        val: t
      })  
    },
    get: function() {
      return archive[archive.length - 1].val
    }
  })

  this.getArchive = function () {
    return archive;
  }
}

let a = new Archiver()

// a.temperature = 20
// a.temperature = 30
// console.log(a.temperature)
// console.log(a.getArchive())


/*
  From others decisions: 
    you can store `temperature` value in additional variable,
    assign it in setter to setted value
    return it in getter
*/

