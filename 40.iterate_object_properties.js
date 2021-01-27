var obj = {
  x: 10,
  y: 20,
  z: 30
}

console.log('x' in obj)
console.log('y' in obj)
console.log('z' in obj)
console.log('w' in obj)

for(var i in obj){
  // console.log(i)
  // console.log(obj[i])
  console.log(i + ': ' + obj[i])
}
