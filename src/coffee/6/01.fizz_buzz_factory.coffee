###
[[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]]

Incorrect understanding of requirements:

return full list
###

FizzBuzzFactory = (instr) ->
  [fz, bz, fbz] = instr

  fizzBuzz = (num) ->
    unless num then return []

    [1..num].map (i) ->
      if i % fbz[0] is 0
        i = fbz[1]
      
      else if i % bz[0] is 0
        i = bz[1]

      else if i % fz[0] is 0
        i = fz[1]

      else i

  fizzBuzz


fb = FizzBuzzFactory [[2, "Fizz"], [4, "Buzz"], [5, "FizzBuzz"]]

# console.log(fb(10))