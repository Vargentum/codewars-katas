/*
or this kata, implement a spyOn function which takes any function func as a parameter 
and returns a spy for func. The returned spy must be callable in the same manner 
as the original func, and include the following additional properties/methods:

.callCount() — returns the number of times spy has been called
.wasCalledWith(val) – returns true if spy was called with val, else returns false.
.returned(val) — returns true if spy returned val, else returns false

Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false


Algo: 
  return constructor?
         object?
         function? +

*/





function task507 () {
  
  function spyOn (func) {
    let count = 0
    let spyArgs = []
    let result

    let spied = function(...args) {
      count++
      spyArgs.push(...args)
      result = func.apply(this, args)
      return result
    }
    spied.callCount = () => count
    spied.wasCalledWith = arg => spyArgs.some(a => arg === a)
    spied.returned = res => result === res
    return spied
  }

  function adder(n1, n2) { return n1 + n2; }
  let adderSpy = spyOn( adder );

  console.log(adderSpy(2, 4)); // returns 6
  console.log(adderSpy(3, 5)); // returns 8
  console.log(adderSpy.callCount()); // returns 2
  console.log(adderSpy.wasCalledWith(4)); // true
  console.log(adderSpy.wasCalledWith(0)); // false
  console.log(adderSpy.returned(8)); // true
  console.log(adderSpy.returned(0)); // false

}
task507()