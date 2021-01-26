//remove object propertise

var obj = {
  x: 10,
  y: 20,
  z: 30
}
obj.x = 40
obj.y = 50
obj.z = 60
obj.a = 70

console.log(obj)
obj.a = null
console.log(obj)
obj.a = undefined
console.log(obj)

delete obj.a
console.log(obj)

delete obj.y
console.log(obj)
