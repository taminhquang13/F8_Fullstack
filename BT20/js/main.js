// Bài 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);

// Bài 2
var arrC = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

console.log(arrC.flat(Infinity));

function flatArr(arrC) {
  return arrC.reduce(function (prev, current) {
    return prev.concat(Array.isArray(current) ? flatArr(current) : current);
  }, []);
}

console.log(flatArr(arrC));

// Bài 3
var arrD = [
  ["a", 1, true],
  ["b", 2, false],
];

var newArr = arrD.flat(Infinity);
// console.log(newArr);

var result = [[], [], [], [], [], []];

for (var index in newArr) {
  if (typeof newArr[index] === "string") {
    result[0].push(newArr[index]);
  } else if (typeof newArr[index] === "number") {
    result[1].push(newArr[index]);
  } else if (typeof newArr[index] === "boolean") {
    result[2].push(newArr[index]);
  } else if (Array.isArray(newArr[index])) {
    result[3].push(newArr[index]);
  } else if (typeof newArr[index] === "function") {
    result[4].push(newArr[index]);
  } else {
    result[5].push(newArr[index]);
  }
}
console.log(result);

// Bài 4
var data = [
  {
    img: "./img/DSC03722.JPG",
    header: "Tiểu đề bài viết 1",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "./img/DSC03733.JPG",
    header: "Tiêu đề bài viết 2",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "./img/DSC03751.JPG",
    header: "Tiêu đề bài viết 3",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
var title = `<h1>Hello Mọi Người</h1>`;
document.write(title);
for (var index in data) {
  var html = {};
  if (index % 2 === 0) {
    html = `<div class="container">
    <div class="img-title">
      <img src="${data[index].img}" alt="img title" class="img"/>
    </div>
    <div class="content">
      <h2 class="content-title" >${data[index].header}</h2>
      <p class="content-txt" >${data[index].txt}</p>
    </div>
    </div>`;
  } else {
    html = `<div class="container left">
    <div class="img-title">
      <img src="${data[index].img}" alt="img title" class="img"/>
    </div>
    <div class="content">
      <h2 class="content-title" >${data[index].header}</h2>
      <p class="content-txt" >${data[index].txt}</p>
    </div>
    </div>`;
  }
  document.write(html);
}

