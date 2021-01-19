// && and operation

// && || !

// A && // B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// || or operation

// A || // B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// ! not operation

// true = false
// false = true

var a = 10
var b = 20
var c = 30
var d = 40

// and operation
if (a>b && c>d) {
  console.log('A is greater than B And C is greater than D')
}

else{
  console.log('At least one condition is false')
}

// or operation

if (a>b || c>d) {
  console.log('A is greater than B or C is greater than D')
}

else{
  console.log('At least one condition is false')
}

// ! not operation

var check = (a>b)
console.log(check)

var check = !(a>b)
console.log(check)

var check = !!(a>b)
console.log(check)
