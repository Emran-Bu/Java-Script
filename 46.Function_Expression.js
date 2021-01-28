// Aronimus Function
var addition = function(a, b){
  return a+b
}
console.log(addition(10, 20))
//
var addition = function(a, b){
  return a-b
}
console.log(addition(30, 20))
//
var addition = function(a, b){
  return a+b
}
var another = addition
console.log(another(50, 20))


//

setTimeout(function () {
  console.log('I Will Call After 5 Second')
}, 5000)

//
function function_Name() {
  console.log('I Am Mr. Emran Hasan')
}
function_Name()
