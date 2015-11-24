###
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

Implement following functions:

head [x] = x
tail [x] = []
init [x] = []
last [x] = x

###

head = (arr) -> arr[0]
tail = (arr) -> arr[1..]
init = (arr) -> arr[...-1]
last = (arr) -> head arr[-1...]
lastBetter = () -> arr[arr.length - 1]

# a = [1,2,2,2,2,2,3]

# console.log head a
# console.log tail a
# console.log init a
# console.log last a
# console.log lastBetter a
