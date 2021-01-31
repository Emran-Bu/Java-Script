var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var filterArr = arr.filter(function(value){
// // return value > 5 //max value of 5
// // return value < 5 //Min value of five
// // return value % 2 === 0 // All Even Number
// // return value % 2 === 1 //All Odd Number
// })
// console.log(arr)
// console.log(filterArr)

//

function myFilter(arr, cb){
  var newArr = []
  for (var i = 0; i < arr.length; i++){
    if (cb(arr[i], i, arr)){
      newArr.push(arr[i])
    }
  }
    return newArr
}
console.log(myFilter(arr, function(value){
  return value % 2 === 1
}))

console.log(myFilter(arr, function(value){
  return value % 2 === 0
}))

var maxNumber = myFilter(arr, function(value){
  return value > 5
})
console.log(maxNumber)

var minNumber = myFilter(arr, function(value){
  return value < 5
})
console.log(minNumber)
//main Implementation

// function myFilter(arr){
//   var newArr = []
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//       newArr.push(arr[i])
//     }
//   }
//     return newArr
// }
// console.log(myFilter(arr))
