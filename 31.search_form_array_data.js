//search array data
var arr = [1, 3, 5, 7, 9, 12, 14, 16, 18]
var find = 5
var ifFound = false
for (var i =0; i < arr.length; i++){
  if (arr[i] === find){
    console.log('data found at index ' + i)
    ifFound = true
    break
  }
}

if (!ifFound) {
 console.log('Data not found')
}
