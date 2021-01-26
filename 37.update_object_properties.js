//update dot notation object propertise

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
console.log(obj.z)
console.log(obj.b)

//update array notation object propertise

obj['b'] = 80
console.log(obj.b)

var prop = 'c'
obj[prop] = 90
console.log(obj.c)
console.log(obj)
