// for loops

// for (initializer, condition, increment){
//
// }

// for (var i = 0; i < 100; i++){
//     console.log((i+1) + ' Emran')
// }

// for (var i = 0; i < 1000; i+=100)
// console.log( i +' emran')

// for (var i = 90; i < 100; i++)
// console.log( (i+1) +' emran')

// for (var i = 1; i <= 50; i++)
// console.log (i)

// for (var i = 1; i <= 20; i++){
//   if ( i%2 === 0){
//       console.log(i)
//   }
// }
//
// for (var i = 1; i <= 20; i++){
//   if ( i%2 === 1){
//       console.log(i)
//   }
// }

// var sum = 0;
// for (var i = 1; i<=10; i++){
// sum += i
// console.log(sum)
// }

// var sum = 0;
// for (var i = 1; i<=10; i++){
//   console.log(sum + '+' + i + '=' + (sum+i))
//   sum = sum+i
//   // sum += i
// }
// console.log('result = ' + sum)

var sum = 0
for (var i = 1; i<=10; i++){
  if (i%2 === 1) {
      // console.log(i)
      console.log(sum + '+' + i + '=' + (sum+i))
      sum = sum+i

  }
}
