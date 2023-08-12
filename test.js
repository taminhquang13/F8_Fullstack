// var content = "Hello World ! I'm a student at FPT Polytechnic.";

var i = 0;
var color = ["red", "blue", "green", "yellow", "pink", "orange"];
// setInterval(function () {
//   if (i === content.length) {
//     i = 0;
//   }
//   var random = color[i];
//   document.getElementById("lorem").innerHTML = content;
//   document.getElementById("lorem").style.color = random;
//   i++;
// }, 1000);


var content = document.getElementById("content");

setInterval(function () {
  if (i == color.length) {
    i = 0;
  }
  var random = color[i];
  content.style.color = random;
  i++;
}, 70);
