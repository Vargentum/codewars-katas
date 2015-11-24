###

You have to write a function pattern which returns
the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern

###

pattern = (n) ->
  result = ""
  x = 0

  while x < n
    x++
    y = 0
    while y < x
      y++
      result += (x)
    result += "\n"

  return result.slice(0,-1) #remove last \n

# console.log pattern 0
# console.log pattern 1
# console.log pattern 3


