// Bài 1 Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

function sum(...numbers) {
  var result = 0;
  for (var number of numbers) {
    if (typeof number !== "number" && !isNaN(number) && number !== Infinity) {
      return "Dữ liệu truyền vào không hợp lệ";
    }
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Bài 2 Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Number.prototype.getCurrency = function (currency) {
  if (currency === "đ") {
    return this.toLocaleString("vi-VN") + " " + "đ";
  } else {
    return this.toLocaleString("en-US") + " " + "$";
  }
};

var a = 1000000;
console.log(a.getCurrency("đ"));

// Bài 3 Chuyển đổi mảng 1 chiều thành dạng lồng (nested)

var arr = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];


