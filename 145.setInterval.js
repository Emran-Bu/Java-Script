var a = 0;
var stop = setInterval(() => {
    a = a + 1;
    if (a == 5) {
        clearInterval(stop);
    } else {
        console.log(a + '. Emran');
    }
    
}, 1000);



var stop1 = setInterval(fun, 1000);
    
var b = 0;
    
function fun(){
    b = b + 1;
    if (b == 5) {
        clearInterval(stop1);
    } else {
        console.log(b + '. Hasan');
    }
}
    