var content = document.getElementById("content");
var text = content.textContent;
var arr = text.split(" ");
var arr2 = text.split(" ");
var i = 0;
setInterval(function () {
  if (i >= arr.length) {
    i = 0;
  }
  if (i < arr.length) {
    arr[i - 1] = arr2[i - 1];
  }
  arr[i] = `<span style="color: red">${arr[i]}</span> `;
  content.innerHTML = arr.join(" ");
  i++;
}, 1500);
