var arr = [1, 2, 3]

// var aqrArr = arr.map(function(value, index, arr){
//   // console.log(value, index, arr)
//   return value * value
// })
// console.log(arr)
// console.log(aqrArr)
//

function myMap(arr, cb){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    var temp = cb(arr[i], i, arr)
    newArr.push(temp)
  }
  return newArr
}
// console.log(myMap(arr))

var qb = myMap(arr, function(value){
  return value * value * value
})

var mten = myMap(arr, function(value){
  return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)













//
// function myMap(arr){
//   var newArr = []
//   for (var i = 0; i < arr.length; i++){
//     var temp = arr[i] * arr[i]
//     newArr.push(temp)
//   }
//   return newArr
// }
// console.log(myMap(arr))
