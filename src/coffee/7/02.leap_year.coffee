###

In this kata you should simply determine, whether a given year
is a leap year or not.
In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are no leap years
but years divisible by 400 are leap years

###


# From common to rarest - dificult logic!

isLeapYear = (year) ->
  if year % 4 is 0
    return false if year % 100 is 0 and year % 400 isnt 0
    true
  else false


# From rarest to common - simple logic!
# For single value, switch is better

isLeapYearBetter = (year) ->
  switch year
    when year % 400 then yes
    when year % 100 then no
    when year % 4 then yes
    else no


