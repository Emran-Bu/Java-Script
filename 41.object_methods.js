//Object Methods

var obj = {
  x: 10,
  y: 20,
  z: 30
}
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// new/duplicate object create

var obj2 = Object.assign({}, obj)
console.log(obj2)
obj2.x = 75
console.log(obj2)
console.log(obj2.x)
