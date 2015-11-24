sumDigits = (num) ->
  sum = 0
  sum += parseInt i for i in "#{Math.abs(num)}"
  sum # add explicit return to prevent push to 'results' variable

# console.log sumDigits 123
# console.log sumDigits -123
# console.log sumDigits 0
# console.log sumDigits 55
  