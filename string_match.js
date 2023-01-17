<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The match() Method</h2>

<p>Perform a search for "ain":</p>

<p id="demo"></p>

<script>

let text = "The rain in SPAIN stays mainly plain in the plain";
var myArr = text.match("mainly");
var myArr = text.matchAll("mainly");
if(myArr == "mainly"){
 document.getElementById("demo").innerHTML = "hoiche";
} else {
 document.getElementById("demo").innerHTML = "hoy nai";
}
//document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
</script>

</body>
</html>
