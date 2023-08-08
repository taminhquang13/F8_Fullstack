//Bài 1
var number = [1, 2, 3, 4, 55, 6, 7, 8, 29, 10];

var max = number[0];
var min = number[0];
var countMax = 0;
var countMin = 0;

for (var i = 0; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
    countMax = i;
  } else if (number[i] < min) {
    min = number[i];
    countMin = i;
  }
}
console.log(number);
console.log(`số lớn nhất là ${max} tại vị trí ${countMax}`);
console.log(`số nhỏ nhất là ${min} tại vị trí ${countMin}`);

// Bài 2
var number1 = [1, 2, 3, 4, 55, 6, 7, 8, 29, 10];

var sum = 0;
var count = 0;

for (var i = 0; i < number1.length; i++) {
  var check = true;
  if (number1[i] < 2) {
    check = false;
  } else if (number[i] === 2) {
    check = true;
  } else {
    for (var j = 2; j < number1[i]; j++) {
      if (number1[i] === j) {
        check = false;
        break;
      }
    }
  }
  if (check) {
    sum += number1[i];
    count++;
  }
}

console.log(`Só tổng số nguyên tố là ${sum}`);
console.log(`Trung bình các số nguyên tố là ${sum / count}`);

// Bài 3
var number2 = [1, 2, 4, 4, 55, 6, 7, 8, 55, 10];

var newArr = [];
for (var i = 0; i < number2.length; i++) {
  if (newArr.indexOf(number2[i]) === -1) {
    newArr.push(number2[i]);
  }
}
console.log(newArr);

// bài 4

var number2 = [1, 3, 3, 4, 5, 2, 6, 2];
number2.push(2);

for (var i = 0; i < number2.length; i++) {
  for (var j = i + 1; j < number2.length; j++) {
    if (number2[i] > number2[j]) {
      var temp = number2[i];
      number2[i] = number2[j];
      number2[j] = temp;
    }
  }
}
console.log(number2);
