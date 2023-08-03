// Bài 1

function road(km) {
  var money;
  if (km <= 1) {
    money = 15000 * km;
  } else if (km <= 5) {
    money = 13500 * km;
  } else if (km < 120) {
    money = 11000 * km;
  } else {
    money = 11000 * km * 0.9;
  }
  return money;
}
console.log(`Tiền taxi của bạn là ${road(2)} `);

// Bài 2

function kWh(n) {
  if (n <= 50) {
    return n * 1678;
  } else if (n <= 100) {
    return n * 1678 + (n - 50) * 1734;
  } else if (n <= 200) {
    return 50 * 1678 + (n - 50) * 1734 + (n - 100) * 2014;
  } else if (n <= 300) {
    return 50 * 1678 + (n - 50) * 1734 + (n - 100) * 2014 + (n - 200) * 2536;
  } else if (n <= 400) {
    return (
      50 * 1678 +
      (n - 50) * 1734 +
      (n - 100) * 2014 +
      (n - 200) * 2536 +
      (n - 300) * 2834
    );
  } else {
    return (
      50 * 1678 +
      (n - 50) * 1734 +
      (n - 100) * 2014 +
      (n - 200) * 2536 +
      (n - 300) * 2834 +
      (n - 400) * 2927
    );
  }
}

console.log(kWh(500));

// Bài 3

function findSum(n) {
  var sum = 0;
  var i = 0;
  for (i; i < n; i++) {
    var m = 0;
    m = i * (i + 1);
    sum += m;
  }
  return sum;
}

console.log(findSum(8));

// Bài 4

var n = 4;
var check = true;

if (n < 2) {
  check = false;
} else if (n === 2) {
  check = true;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

if (check) {
  console.log(`${n} Là số nguyên tố`);
} else {
  console.log(`${n} Không là số nguyên tố`);
}

// Bài 5

function count(n) {
  var weight = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      weight += j + " ";
    }
    weight += "\n";
  }
  return weight;
}

console.log(count(5));

// Bài 6

function chess() {
  var chess = "";
  for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
      if ((i + j) % 2 === 0) {
        chess += " # ";
        document.write(
          `<span style="display: inline-block; width: 50px; height: 50px; background-color: black;"></span>`
        );
      } else {
        chess += " s ";
        document.write(
          `<span style="display: inline-block; width: 50px; height: 50px; background-color: white;"></span>`
        );
      }
    }

    document.write("<br/>");
  }

  return chess;
}
console.log(chess());

// Bài 7

function bangcuuchuong() {
  var bangcuuchuong = "";
  for (var i = 1; i <= 10; i++) {
    for (var n = 1; n <= 10; n++) {
      bangcuuchuong += n + "x" + i + "=" + n * i + " ";
      document.write(
        `<span style="display: inline-block; border: 1px solid black; width: 90px; margin: 4px;">${n} x ${i} = ${
          i * n
        }</span>`
      );
    }
    bangcuuchuong += "\n";
  }

  return bangcuuchuong;
}
console.log(bangcuuchuong());

// Bài 8

function findSum1(n) {
  if (n === 1) {
    return 1;
  } else {
    return findSum1(n - 1) + 1 / n;
  }
}

console.log(`giá trị biểu thức: S = ${findSum1(5)}`);
