// function summation
function add(a, b){
  var result = a + b
  console.log(result)
}
add(5, 5)
add(10, 10)
add(200, 200)

// function substract

function sub(x, y){
  var result = x - y
  console.log(result)
}
sub(6, 5)
sub(10, 5)
sub(20, 5)

// function multiplication
function mul(a, b){
  var result = a * b
  console.log(result)
}
mul(2, 2)
mul(10, 10)
mul(20, 20)

// function division
function div(a, b){
  var result = a / b
  console.log(result)
}
div(2, 2)
div(10, 10)
div(20, 20)


// array summation

var arr1 = [1, 2, 1]
var arr2 = [2, 2, 2]
var arr3 = [5, 1, 4]

var sum1 = 0
for (var i = 0; i < arr1.length; i++){
  sum1 += arr1[i]
}
  console.log(sum1)

//
var sum2 = 0
for (var i = 0; i < arr2.length; i++){
  sum2 += arr2[i]
}
console.log(sum2)

//
var sum3 = 0
for (var i = 0; i < arr3.length; i++){
  sum3 += arr3[i]
}
console.log(sum3)

//one line solution
function sumOfArray(arr){
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)


// parameters

function test(a, b, c){
  console.log(arguments)
  for (var i = 0; i < arguments.length; i++){
      console.log(arguments[i])
  }
}
test(5, 5, 5)

//

function addAll(){
  var sum = 0
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  console.log(sum)
}
addAll(1, 1, 1)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
