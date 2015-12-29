/*

Complete the solution so that it strips all text 
that follows any of a set of comment markers passed in. 

Any whitespace at the end of the line should also be stripped out.



Algo:
  - construct dynamic Regexp


Enlightment:
  - use RegExp Constructor to make dynamic regex
  - use \ to escape user input characters inside alteration (\$\!) 
    - if in constructor, also use \\
  - use \\ to escape `special characters` in Constructor (\s => \\s)
 
*/

function task403 () {
  
  const solution = (input, markers) => {
    let markersStr = markers.reduce((str, mk) => str += `|\\${mk}`, "").substring(1)
    let ptrn = new RegExp(`\\s*?(${markersStr})[^\n]*`, 'g')
    return input.replace(ptrn, "")
  }

  console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

}
task403()