// Recursive function
function sayHi(n){
  if (n === 0) {
      return
  }
  console.log('Hi, I am Emran')
  sayHi(n - 1)
}
sayHi(10)

// Recursive Sum function

function sum(n){
  if (n === 1) {
    return 1
  }
  return n + sum(n-1)
}
console.log(sum(5))

// Recursive Factorial function

function fact(n){
  if (n === 1) {
    return 1
  }
  return n * fact(n-1)
}
console.log(fact(5))

//

var arr = [1, 2, 3, 4, 5]
function sumofArray(arr, lastIndex){
  if (lastIndex < 0) {
    return 0
  }
  return arr[lastIndex] + sumofArray(arr, lastIndex - 1)
}
console.log(sumofArray(arr, arr.length - 1))
