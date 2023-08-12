// Bài 1
var a = [1, 2, 3];

var max = a[0];
var min = a[0];
var indexMax = 0;
var indexMin = 0;

for (var i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
    indexMax = i;
  }
  if (a[i] < min) {
    min = a[i];
    indexMin = i;
  }
}

console.log(`Số lớn nhất là ${max}`);
console.log(`Số nhỏ nhất là ${min}`);
console.log(`Vị trí số lớn nhất là ${indexMax}`);
console.log(`Vị trí số nhỏ nhất là ${indexMin}`);

// Bài 2
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var sum = 0;
var count = 0;

for (var i = 0; i < b.length; i++) {
  var check = true;
  if (b[i] < 2) {
    check = false;
  } else if (b[i] === 2) {
    check = true;
  } else {
    for (var j = 2; j < b.length; j++) {
      if (b.length % j === 0) {
        check = false;
        break;
      }
    }
  }
  if (check) {
    sum += b[i];
    count++;
  }
}

console.log(`Trung bình cộng só nguyên là ${sum / count}`);

// Bài 3
var c = [1, 3, 3, 4, 5, 2, 6, 2];

var newArr = [];

for (var i = 0; i < c.length; i++) {
  if (newArr.indexOf(c[i]) === -1) {
    newArr.push(c[i]);
  }
}
console.log(newArr);

// Bài 4
var arr = [1, 3, 3, 4, 5, 2, 6, 2];
arr.push(2);

for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

