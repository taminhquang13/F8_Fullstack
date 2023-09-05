var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
console.log(progressSpan);
var progressBarWidth = progressBar.clientWidth;

var timer = document.querySelector(".timer");

var check = false;
var rate = 0;
var initialClientX = 0;
var initialRate = 0;

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var formatTime = function (seconds) {
  var minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  var seconds = Math.floor(seconds % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    rate = (100 * e.offsetX) / progressBarWidth;
    progress.style.width = `${rate}%`;
    initialRate = rate;
    check = true;
    initialClientX = e.clientX;

    var time = (audio.duration * rate) / 100;
    currentTimeEl.innerText = formatTime(time);
    audio.currentTime = time;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    check = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (check) {
    rate =
      (100 * (e.clientX - initialClientX)) / progressBarWidth + initialRate;
  }
  if (rate >= 0 && rate <= 100) {
    progress.style.width = `${rate}%`;
  }
});

document.addEventListener("mouseup", function (e) {
  if (e.which === 1) {
    check = false;
    initialRate = rate;
    var time = (audio.duration * rate) / 100;
    currentTimeEl.innerText = formatTime(time);
    audio.currentTime = time;
  }
});

audio.addEventListener("loadeddata", function () {
  durationTimeEl.innerText = formatTime(audio.duration);
});

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playBtn.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (!check) {
    rate = (100 * audio.currentTime) / audio.duration;
    progress.style.width = `${rate}%`;
    currentTimeEl.innerText = formatTime(audio.currentTime);
  }
});

audio.addEventListener("ended", function () {
  rate = 0;
  audio.currentTime = 0;
  progress.style.width = `${rate}%`;
  playBtn.innerHTML = playIcon;
});

progressSpan.addEventListener("mousemove", function (e) {
  e.preventDefault();
});

progressBar.addEventListener("mousemove", function (e) {
  timer.style.display = "block";
  timer.style.left = `${e.offsetX}px`;
  var space = (100 * e.offsetX) / progressBarWidth;
  var time = (audio.duration * space) / 100;
  timer.innerText = formatTime(time);
});

progressBar.addEventListener("mouseout", function (e) {
  timer.style.display = "none";
  console.log("địt mẹ mày");
});
