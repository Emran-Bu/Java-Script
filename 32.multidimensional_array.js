//multidimensional/ two multidimensional array

var arr = [
  [56, 75, 80, 57],
  [30, 48, 52, 78],
  [81, 90, 48, 85],
  [81, 90, 48, 85]
]

// // console.log(arr)
// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])

// console.log(arr[0][0])
// console.log(arr[1][1])
//
// console.log(arr[2][3])
// console.log(arr[3][2])


for (var i = 0; i < arr.length; i++){
  // console.log(arr[i][0])
  // console.log(arr[i])
  for ( var j = 0; j < arr[i].length; j++){
    console.log( 'Element ' + i + ':' + arr[i][j])
  }
}


//multidimensional/ three multidimensional array

// var arr = [
//   [
//       [56, 75, 80, 57],
//       [30, 48, 52, 78],
//       [75, 57, 67, 77],
//       [81, 90, 48, 85]
//   ],
//
//   [
//       [65, 75, 80, 70],
//       [30, 48, 52, 78],
//       [81, 90, 48, 85],
//       [80, 90, 48, 90]
//   ],
//
//   [
//       [60, 75, 80, 20],
//       [30, 48, 52, 78],
//       [81, 90, 48, 85],
//       [30, 90, 48, 40]
//   ]
// ]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[0][2])
// console.log(arr[1][3])
// console.log(arr[2][1])

// for (var i = 0; i < arr.length; i++){
//   // console.log(arr[i][0])
//   // console.log(arr[i])
//   for ( var j = 0; j < arr[i].length; j++){
//     console.log( 'Element ' + i + ':' + arr[i][j])
//   }
// }





//multidimensional array syntext

//two dimensional array
// var arr = [
//   [],
//   [],
//   []
// ]

//three dimensional array
// var arr = [
//   [
//     [],
//     [],
//     []
//   ],
//   [
//     [],
//     [],
//     []
//   ],
//   [
//     [],
//     [],
//     []
//   ]
// ]
