occurrences = (str) ->
  
  reducer = (a, i) ->
    unless a[i] then a[i] = 1 else a[i] += 1
    a

  str.toLowerCase()
     .split('')
     .reduce reducer, {}


# console.log occurrences 'Hello world.'


###
Experience:


1. Primitives copied to another memory cell,
   reference isn't created!

n = a[i]
unless n then n = 1... -> NOT works when a[i] is primitive!!!



2. Clever trick to get rid of ternary:

a[i] = (a[i] or 0) + 1


###