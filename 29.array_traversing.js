// array traversing
var arr = [1, 3, 5, 4, 6, 8]

for (var i = 0; i < arr.length; i++){
  console.log(arr[i])
}

// array traversing add

var arr = [1, 3, 5, 4, 6, 8]

for (var i = 0; i < arr.length; i++){
  arr[i] = arr[i] + 2
}
console.log(arr)

// adding

var sum = 0
for (var i = 0; i < arr.length; i++) {
  sum+=arr[i]
}
console.log(sum)

// array traversing even number

var arr = [1, 3, 5, 4, 6, 8]

for (var i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 0 ){
    console.log(arr[i])
  }
}

// array traversing even number

var arr = [1, 3, 5, 4, 6, 8]
var sum = 0
for (var i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 0 ){
    sum += arr[i]
  }
}
  console.log(sum)

// array traversing odd number
var arr = [1, 3, 5, 4, 6, 8]

for (var i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 1 ){
    console.log(arr[i])
  }
}

// array traversing odd number
var arr = [1, 3, 5, 4, 6, 8]

var sum = 0
for (var i = 0; i < arr.length; i++){
if (arr[i] % 2 === 1 ){
  sum += arr[i]
}
}
console.log(sum)

//array push even number
var arr = [1, 3, 5, 4, 6, 8]
var sum = []
for (var i = 0; i < arr.length; i++) {
  if ( arr[i] % 2 === 0) {
    sum.push(arr[i])
  }
}
console.log(sum)

//array push in odd number
var arr = [1, 3, 5, 4, 6, 8]
var sum = []
for (var i = 0; i < arr.length; i++) {
  if ( arr[i] % 2 === 1) {
    sum.push(arr[i])
  }
}
console.log(sum)
