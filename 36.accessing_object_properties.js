//dot notation accessing object
var obj = {
  x: 10,
  y: 20,
  z: 30
}
console.log(obj.x)
console.log(obj.y)
console.log(obj.z)
console.log(obj.x + obj.y)

//array notation accessing object

var point = {
  x: 10,
  y: 20,
  z: 30
}
console.log(point['x'])
console.log(point['y'])
console.log(point['z'])
console.log(point['y'] + point['z'])

var show = 'y'
console.log(point[show])
