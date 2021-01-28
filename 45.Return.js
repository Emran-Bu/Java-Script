function addAll(){
  var sum = 0
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}
var result = addAll(1, 2, 3)
console.log(result)
var result = addAll(1, 2, 3, 4, 5)
console.log(result)


function person(name, email){
  return{
    Name: name,
    Email: email
  }
}
var p1 = person('Emran', 'emranhasan@aol.com')
console.log(p1)
