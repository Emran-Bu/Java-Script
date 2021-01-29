// First class function
function add(a, b){
  return a+b
}
console.log(add(5, 6))
// 1. A Function can be stored in a variable
var sum = add
console.log(sum(5, 5))
console.log(typeof sum)

// 2. A Function can be stored in a Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 2))

// 3. A Function can be stored in a Object
var obj = {
  sum: add
}
console.log(obj)
console.log(obj.sum(8, 8))

// 4. We can create function as need
setTimeout(function (){
  console.log('Emran')
}, 100)
