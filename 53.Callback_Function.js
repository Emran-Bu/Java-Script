function sample(a, b, cb){
  var c = a + b
  var d = a - b
  var result = cb(c, d)
  return result
}

var result = sample(5, 8, function (c, d){
  return c + d
})
console.log(result)

var result2 = sample(8, 5, function (c, d){
  return c - d
})
console.log(result2)

var result3 = sample(6, 5, function(c, d){
  return c * d
  // console.log(c*d)
})
console.log(result3)

//
// function sample(a, b, cb){
//   var c = a + b
//   var d = a - b
//   var result = sum(c, d)
//   return result
// }
//
// function sum(a, b){
//   return a+b
// }
// var result = sample(5, 1, sum)
// console.log(result)
//

//
// function sample(a, b){
//   var c = a + b
//   var d = a - b
//   var result = sum(c, d)
//   return result
// }
//
// function sum(a, b){
//   return a+b
// }
// console.log(sample(5, 1))
