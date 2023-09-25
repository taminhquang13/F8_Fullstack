var btn = document.querySelector(".btn");
var count = document.querySelector(".count");

var countEnd = 0;
var countStart = 5;
var check = false;
const INTERVAL = 1000;

const countDown = function (time) {
  if (countEnd <= time) {
    countStart--;
    count.innerText = countStart;
    countEnd = time + INTERVAL;
  }
  if (countStart === 0) {
    check = true;
    btn.removeAttribute("disabled");
  }

  if (countStart > 0) {
    requestAnimationFrame(countDown);
  }
};

btn.addEventListener("click", function () {
  if (check) {
    window.open("https://www.youtube.com/watch?v=QH2-TGUlwu4", "_blank");
  }
});

countDown(countStart);

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    console.log("Thời gian méo thèm chạy nữa r");
  } else {
    console.log("Thời gian lại chạy r nè");
  }
});
