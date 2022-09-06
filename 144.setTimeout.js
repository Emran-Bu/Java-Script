// with arrow function
setTimeout(() => {
    console.log('Emran');
}, 2000);

var stop = setTimeout(set, 2000);

// with normal function
function set(){
    var a=1,b=2,c;
    c=a+b;
    console.log(c);
}

clearTimeout(stop);