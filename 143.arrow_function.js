// one line arrow function
var fun = (a, b) => a + b;

console.log(fun(10, 20));

// arrow function

var fun1 = () => {
    var a=10, b=2, c;
    c = a * b;
    console.log(c);
}
fun1();

// Non param Variable fun1

var z = function(){
    var a=2,b=2,c;
    c = a+b;
    console.log('Non param Variable fun1= '+c);
}

z();

// with param Variable fun2

var z1 = function(a,b){
    return a + b;
}

var z2 = z1(1,1);

console.log('with param Variable fun2= '+z2);

// arrow function
setTimeout(() => {
    console.log('Hello');
}, 2000);