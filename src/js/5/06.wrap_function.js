/*
Create a function method that allow you to wrap an existing function.
The method signature would look something like this:
*/

function task () {


  Function.prototype.wrap = function(wrapper) {
    return wrapper.bind(this, this)
  }




  function speak(name){
     return "Hello " + name;
  }
  console.log(speak("Mary"))

  speak = speak.wrap(function(original, yourName, myName){
     greeting = original(yourName);
     return greeting + ", my name is " + myName;
  })
  var greeting = speak("Mary", "Kate")
  console.log(greeting)
}
task()