<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The replace() Method</h2>

<p>replace() searches a string for a value,
and returns a new string with the specified value(s) replaced:</p>

<p id="demo">please Visit the Microsoft!</p>

<script>
let text = "Amazon Essentials Visit the Store"; 
document.getElementById("demo").innerHTML = text.replace("Visit the Store", "");
</script>

</body>
</html>
