var persons = [
  {
    name: 'A',
    age: 24
  },

  {
    name: 'B',
    age: 26
  },

  {
    name: 'C',
    age: 21
  },

  {
    name: 'D',
    age: 23
  }
]

var arr = [1, 40, 3, -8, 5, 7, 9, -4, 2, 4, 6, -6, 8, 10, 25]

// console.log(arr.sort())
//
// console.log(persons.sort())

// callback function

//accending function small to capital number
arr.sort(function(a, b){
  if (a > b){
    return 1
  } else if (a < b){
    return -1
  } else {
    return 0
  }
})
console.log(arr)

//Decending function capital to small number
arr.sort(function(a, b){
  if (a > b){
    return -1
  } else if (a < b){
    return 1
  } else {
    return 0
  }
})
console.log(arr)

// 1st person solve

//accending function small to capital number
persons.sort(function(a, b){
  if (a.age > b.age){
    return 1
  } else if (a.age < b.age){
    return -1
  } else {
    return 0
  }
})
console.log(persons)

//Every Function

var res = arr.every(function (value){
  return value % 2 === 0
})
console.log(res)

var res2 = arr.every(function (value){
  return value >= 0
})
console.log(res2)

//Some Function

var res3 = arr.some(function (value){
  return value % 2 === 1
})
console.log(res3)

var res4 = arr.some(function (value){
  return value >= 0
})
console.log(res4)
