function changeColor() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  divElement1.className = "blueback";
  divElement2.className = "greenback";
}

function changeText() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  divElement1.innerHTML = "hello";
  divElement2.innerHTML = "bye";
}
