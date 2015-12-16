/*
You're a support engineer and you have to write a regex that captures the following information from our log files:

the date
the log level (ERROR, INFO or DEBUG),
the user
the main function
the sub function
the logged message

You asked your supervisor about the rules defining all the logs. He told you that: 
  the sub function may or may not be here,
  if no sub-function return undefined, 
    the log level can only be one of the 3 presented,
  the logged message contains any kind of character, 
  all fields are separated by arbitrary spaces (but at least one).

Unfortunately he's not exactly sure about the rest,
  "use your common sense, there is not trick" he said.
*/

const logparser = /^(\d{4}(?:-\d{2}){2}\s*\d{2}(?::\d{2}){2},\d{3})\s*(ERROR|INFO|DEBUG)\s*\[(\w+?):(\w+?)(?::(\w+?))?\]\s*([\s\S]+)$/



// console.log(logparser.test("2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem,"))
// console.log(logparser.test("2003-07-08 16:49:46,896 INFO [user1:mainfunction] We don't have a problem"))
// console.log("2003-07-08 16:49:46,896 INFO [user1:mainfunction:subfunction] We don't have a problem".match(logparser))
