function x(n){

  function y(){
    return n%3 === 0
  }

  function z(){
    return n%5 === 0
  }

  if (y() && z()){
    console.log(n + ' is divisible by both 3 and 5')
  } else {
    console.log('Not a valid number')
  }

}

x(10)
x(15)
