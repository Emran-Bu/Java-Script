// function greet(msg){
//   function greetings(name){
//     return msg + ', ' + name + '!'
//   }
//   return greetings
// }
// var gm = greet('good moening')
// var gn = greet('good night')
// var hello = greet('hello')
// var msg = gm('Emran')
// console.log(msg)
// console.log(gn('emran'))

function base(b) {
  return function(n) {
    var result = 1
    for (var i = 0; i < b; i++) {
      result *= n
    }
    return result
  }
}
var base10 = base(10)
console.log(base10(2))
var base5 = base(5)
console.log(base5(3))
