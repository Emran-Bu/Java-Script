var arr = [5, 4, 8, 9, 7, 3]

//Find Function

// var result = arr.find(function(value){
//   return value === 7
// })
// console.log(result)

//FindIndex Function

// var result2 = arr.findIndex(function(value){
//   return value === 7
// })
// console.log(result2)


function myFind(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      // return arr[i]  //find of array number
      return i  //find of array index
    }
  }
}

var result = myFind(arr, function(value){
  return value === 3
})
console.log(result)
