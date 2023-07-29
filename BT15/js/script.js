// Bài 1
var a = 1;
var b = 2;

a = a + b;
b = a -b;
a = a -b;

console.log(a);
console.log(b);

// Bài 2
var s = 10 + 20 + 5**10 / 2;

console.log(s);

// Bài 3
var c = 1;
var d = 10;
var e = 3;

if (c > d && c > e) {
    console.log(c);
} else if (d > c && d > e) {
    console.log(d);
} else if (e > c && e > d) {
    console.log(e);
}

// Bài 4
var f = 5;
var g = -1;

if ((f * g) > 0) {
    console.log(`Hai số cùng dấu`)
} else {
    console.log(`Hai số khác dấu`)
}

// Bài 5 
var h = 5;
var i = 10;
var j = -30;

if (h < i && h < j) {
    if (i < j) {
        console.log(h + "," + i + "," + j);
    } else {
        console.log(h + "," + j + "," + i);
    }
} else if (i < h && i < j) {
    if (h < j) {
        console.log(i + "," + h + "," + j);
    } else {
        console.log(i + "," + j + "," + h);
    }
} else if (j < h && j < i ) {
    if (h < i) {
        console.log(j + "," + h + "," + i);
    } else 
    console.log(j + "," + i + "," + h);
}