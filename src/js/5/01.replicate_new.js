/*
Your mission: write a function nouveau 
(that's French for "new") which takes
one function parameter (the constructor), 
plus an unknown number of additional parameters 
of any type (arguments for the constructor).

When invoked, nouveau should do everything new does
and return the same object new would evaluate to, as specified above.


What does `new` operator do?

1. creates an empty object (instance) which prototypally inherits
   from Constructor.prototype

2. Binds Constructor to instnce (this is instance) and invokes 
constructor with it arguments

3. If Constructor returned value is an object, evaluate result to it object.
4. If no - Evalueate to instance
*/


// function nouveau (Constructor, ...args) {
//   let res = {}
//   res.setPrototype(Constructor.prototype)
//   res = Constructor.apply(res, args)
//   return res;
// }


// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce = function(){
//   return 'My name is ' + this.name + ' and I am ' + this.age;
// };


// var jack = new Person('Jack', 40);
// var john = nouveau(Person, 'John', 30); // same result as above

// console.log( john.introduce() ); // My name is John and I am 30
// console.log( jack.introduce() ); // My name is Jack and I am 40


