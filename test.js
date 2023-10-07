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

// var e = document.querySelector(".progress-bar"),
//   t = e.querySelector(".progress"),
//   n = t.querySelector("span"),
//   i = e.clientWidth,
//   o = e.querySelector(".timer"),
//   r = !1,
//   s = 0,
//   d = 0,
//   a = 0;
// e.addEventListener("mousedown", function (e) {
//   if (1 === e.which) {
//     //   console.log(e.offsetX, progressBarWidth);
//     //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
//     (a = (100 * e.offsetX) / i), //Update CSS vào progress
//       (t.style.width = `${a}%`),
//       (d = a),
//       (r = !0),
//       (s = e.clientX);
//     var n = (u.duration * a) / 100;
//     (c.innerText = p(n)), (u.currentTime = n);
//   }
// }),
//   n.addEventListener("mousedown", function (e) {
//     e.stopPropagation(), 1 === e.which && ((r = !0), (s = e.clientX));
//   }),
//   document.addEventListener("mousemove", function (e) {
//     r && // console.log(space);
//       (a = (100 * (e.clientX - s)) / i + d) >= 0 &&
//       a <= 100 &&
//       (t.style.width = `${a}%`);
//   }),
//   document.addEventListener("mouseup", function () {
//     (r = !1), (d = a);
//     var e = (u.duration * a) / 100;
//     (c.innerText = p(e)), (u.currentTime = e);
//   });
// /*
// Khi bấm chuột xuống vào chấm màu tím
// - Lấy được clientX tại ví trí bấm chuột

// Khi kéo chuột
// - Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
// - Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
// */
// var u = document.querySelector(".audio"),
//   c = e.previousElementSibling,
//   l = e.nextElementSibling,
//   f = document.querySelector(".play-btn"),
//   m = '<i class="fa-solid fa-play"></i>',
//   p = function (e) {
//     var t = Math.floor(e / 60);
//     return (
//       (e = Math.floor(e - 60 * t)),
//       `${t < 10 ? "0" + t : t}:${e < 10 ? "0" + e : e}`
//     );
//   };
// u.addEventListener("loadeddata", function () {
//   //   console.log(audio.duration);
//   l.innerText = p(u.duration);
// }),
//   f.addEventListener("click", function (e) {
//     e.stopPropagation(),
//       u.paused
//         ? (u.play(), (this.innerHTML = '<i class="fa-solid fa-pause"></i>'))
//         : (u.pause(), (this.innerHTML = m));
//   }),
//   u.addEventListener("timeupdate", function () {
//     r || //   console.log("đang chạy: ", this.currentTime);
//       ((c.innerText = p(this.currentTime)), //Tính tỷ lệ phần trăm
//       (a = (this.currentTime / this.duration) * 100), //Update vào timer
//       (t.style.width = `${a}%`));
//   }),
//   u.addEventListener("ended", function () {
//     (a = 0), (u.currentTime = 0), (t.style.width = 0), (f.innerHTML = m);
//   }),
//   n.addEventListener("mousemove", function (e) {
//     e.stopPropagation();
//   }),
//   e.addEventListener("mousemove", function (e) {
//     (o.style.display = "block"), (o.style.left = `${e.offsetX}px`);
//     var t = (100 * e.offsetX) / this.clientWidth,
//       n = (u.duration * t) / 100;
//     o.innerText = p(n);
//   }),
//   e.addEventListener("mouseout", function () {
//     o.style.display = "none";
//   }); //# sourceMappingURL=index.fea0bef9.js.map

//# sourceMappingURL=index.fea0bef9.js.map

const getUsers = async () => {
  const res = await fetch(`https://cpszqh-8080.csb.app/users`);
  const users = await res.json();
  console.log(users);
};

getUsers();

const postUser = async (data) => {
  const res = await fetch(`https://cpszqh-8080.csb.app/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    console.log("Thêm thành công");
  }
};
