# http://www.codewars.com/kata/54554846126a002d5b000854

buy = (capacity, gifts) ->
  seq = []

  gifts.forEach (x, xi) ->
    unless seq.length isnt 0
      gifts.slice(xi + 1)
           .forEach (y, yi) ->
        unless seq.length isnt 0
          xyi = xi + yi + 1 #epic win!
          seq.push [xi, xyi] if x + y is capacity

  seq[0] or null


# console.log buy 2, [1,1]        # [0,1]
# console.log buy 3, [1,1]        # null
# console.log buy 5, [5,2,3,4,5]  # [1,2]
# console.log buy 5, [1,2,3,4,5]  # [0,3]
# console.log buy 5, [0,0,0,2,3]  # [3,4]



###
Experience: Concentrate on indices no items!
###

buyBetter = (capacity, gifts) ->
  x = 0

  while x < gifts.length
    y = x + 1
    while y < gifts.length
      if gifts[x] + gifts[y] is capacity
        return [x, y]
      y++
    x++

  null