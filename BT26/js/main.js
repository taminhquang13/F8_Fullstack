var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

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
    currentTime = this.currentTime;
    handleKaraoke(currentTime);
  }
});

audio.addEventListener("ended", function () {
  rate = 0;
  audio.currentTime = 0;
  progress.style.width = `${rate}%`;
  playBtn.innerHTML = playIcon;
});
var currentTime = 0;
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
});

var lyrics = `{
  "err": 0,
  "msg": "Success",
  "data": {
    "sentences": [
      {
        "words": [
          {
            "startTime": 22830,
            "endTime": 23330,
            "data": "Anh"
          },
          {
            "startTime": 23330,
            "endTime": 23830,
            "data": "đi"
          },
          {
            "startTime": 23830,
            "endTime": 24080,
            "data": "lạc"
          },
          {
            "startTime": 24080,
            "endTime": 24330,
            "data": "trong"
          },
          {
            "startTime": 24330,
            "endTime": 24830,
            "data": "sóng"
          },
          {
            "startTime": 24830,
            "endTime": 25350,
            "data": "gió"
          },
          {
            "startTime": 25350,
            "endTime": 25590,
            "data": "cuộc"
          },
          {
            "startTime": 25590,
            "endTime": 26630,
            "data": "đời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 26630,
            "endTime": 26870,
            "data": "Nào"
          },
          {
            "startTime": 26870,
            "endTime": 27370,
            "data": "biết"
          },
          {
            "startTime": 27370,
            "endTime": 27870,
            "data": "đâu"
          },
          {
            "startTime": 27870,
            "endTime": 28130,
            "data": "sớm"
          },
          {
            "startTime": 28130,
            "endTime": 28650,
            "data": "mai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 28650,
            "endTime": 28900,
            "data": "Liệu"
          },
          {
            "startTime": 28900,
            "endTime": 29160,
            "data": "bình"
          },
          {
            "startTime": 29160,
            "endTime": 29400,
            "data": "yên"
          },
          {
            "startTime": 29400,
            "endTime": 29900,
            "data": "có"
          },
          {
            "startTime": 29900,
            "endTime": 32670,
            "data": "tới"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 32670,
            "endTime": 33170,
            "data": "Âu"
          },
          {
            "startTime": 33170,
            "endTime": 33940,
            "data": "lo"
          },
          {
            "startTime": 33940,
            "endTime": 34200,
            "data": "chạy"
          },
          {
            "startTime": 34200,
            "endTime": 34440,
            "data": "theo"
          },
          {
            "startTime": 34440,
            "endTime": 34700,
            "data": "những"
          },
          {
            "startTime": 34700,
            "endTime": 35480,
            "data": "ánh"
          },
          {
            "startTime": 35480,
            "endTime": 35730,
            "data": "sao"
          },
          {
            "startTime": 35730,
            "endTime": 36730,
            "data": "đêm"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 36730,
            "endTime": 36980,
            "data": "Ngày"
          },
          {
            "startTime": 36980,
            "endTime": 37480,
            "data": "cứ"
          },
          {
            "startTime": 37480,
            "endTime": 37980,
            "data": "trôi"
          },
          {
            "startTime": 37980,
            "endTime": 38240,
            "data": "chớp"
          },
          {
            "startTime": 38240,
            "endTime": 38530,
            "data": "mắt"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 38530,
            "endTime": 39020,
            "data": "Thành"
          },
          {
            "startTime": 39020,
            "endTime": 39260,
            "data": "phố"
          },
          {
            "startTime": 39260,
            "endTime": 39520,
            "data": "đã"
          },
          {
            "startTime": 39520,
            "endTime": 40020,
            "data": "sáng"
          },
          {
            "startTime": 40020,
            "endTime": 42780,
            "data": "đèn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 42780,
            "endTime": 43280,
            "data": "Ta"
          },
          {
            "startTime": 43280,
            "endTime": 43530,
            "data": "cứ"
          },
          {
            "startTime": 43530,
            "endTime": 44060,
            "data": "lặng"
          },
          {
            "startTime": 44060,
            "endTime": 44310,
            "data": "lẽ"
          },
          {
            "startTime": 44310,
            "endTime": 44560,
            "data": "chạy"
          },
          {
            "startTime": 44560,
            "endTime": 45060,
            "data": "thật"
          },
          {
            "startTime": 45060,
            "endTime": 45560,
            "data": "mau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 45560,
            "endTime": 45820,
            "data": "Yêu"
          },
          {
            "startTime": 45820,
            "endTime": 46060,
            "data": "thương"
          },
          {
            "startTime": 46060,
            "endTime": 46590,
            "data": "chẳng"
          },
          {
            "startTime": 46590,
            "endTime": 46830,
            "data": "nói"
          },
          {
            "startTime": 46830,
            "endTime": 47090,
            "data": "kịp"
          },
          {
            "startTime": 47090,
            "endTime": 47590,
            "data": "thành"
          },
          {
            "startTime": 47590,
            "endTime": 48090,
            "data": "câu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 48090,
            "endTime": 48350,
            "data": "Biết"
          },
          {
            "startTime": 48350,
            "endTime": 48850,
            "data": "đâu"
          },
          {
            "startTime": 48850,
            "endTime": 49110,
            "data": "liệu"
          },
          {
            "startTime": 49110,
            "endTime": 49350,
            "data": "mai"
          },
          {
            "startTime": 49350,
            "endTime": 49610,
            "data": "còn"
          },
          {
            "startTime": 49610,
            "endTime": 50140,
            "data": "thấy"
          },
          {
            "startTime": 50140,
            "endTime": 52890,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 52890,
            "endTime": 53430,
            "data": "Thức"
          },
          {
            "startTime": 53430,
            "endTime": 53680,
            "data": "giấc"
          },
          {
            "startTime": 53680,
            "endTime": 54190,
            "data": "để"
          },
          {
            "startTime": 54190,
            "endTime": 54430,
            "data": "anh"
          },
          {
            "startTime": 54430,
            "endTime": 54690,
            "data": "còn"
          },
          {
            "startTime": 54690,
            "endTime": 55190,
            "data": "được"
          },
          {
            "startTime": 55190,
            "endTime": 55690,
            "data": "thấy"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 55690,
            "endTime": 55930,
            "data": "Ánh"
          },
          {
            "startTime": 55930,
            "endTime": 56190,
            "data": "mắt"
          },
          {
            "startTime": 56190,
            "endTime": 56700,
            "data": "của"
          },
          {
            "startTime": 56700,
            "endTime": 56940,
            "data": "em"
          },
          {
            "startTime": 56940,
            "endTime": 57200,
            "data": "nhẹ"
          },
          {
            "startTime": 57200,
            "endTime": 57700,
            "data": "nhìn"
          },
          {
            "startTime": 57700,
            "endTime": 58200,
            "data": "anh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 58200,
            "endTime": 58450,
            "data": "Đôi"
          },
          {
            "startTime": 58450,
            "endTime": 58700,
            "data": "tay"
          },
          {
            "startTime": 58700,
            "endTime": 59210,
            "data": "này"
          },
          {
            "startTime": 59210,
            "endTime": 59460,
            "data": "sẽ"
          },
          {
            "startTime": 59460,
            "endTime": 59710,
            "data": "không"
          },
          {
            "startTime": 59710,
            "endTime": 60220,
            "data": "xa"
          },
          {
            "startTime": 60220,
            "endTime": 61470,
            "data": "rời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 61470,
            "endTime": 61720,
            "data": "Tạm"
          },
          {
            "startTime": 61720,
            "endTime": 61970,
            "data": "gác"
          },
          {
            "startTime": 61970,
            "endTime": 62220,
            "data": "hết"
          },
          {
            "startTime": 62220,
            "endTime": 62490,
            "data": "những"
          },
          {
            "startTime": 62490,
            "endTime": 63010,
            "data": "âu"
          },
          {
            "startTime": 63010,
            "endTime": 63510,
            "data": "lo"
          },
          {
            "startTime": 63510,
            "endTime": 63800,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 63800,
            "endTime": 64300,
            "data": "Cùng"
          },
          {
            "startTime": 64300,
            "endTime": 64560,
            "data": "anh"
          },
          {
            "startTime": 64560,
            "endTime": 64800,
            "data": "bước"
          },
          {
            "startTime": 64800,
            "endTime": 65060,
            "data": "trên"
          },
          {
            "startTime": 65060,
            "endTime": 65560,
            "data": "con"
          },
          {
            "startTime": 65560,
            "endTime": 66810,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 66810,
            "endTime": 67060,
            "data": "Ta"
          },
          {
            "startTime": 67060,
            "endTime": 67310,
            "data": "sẽ"
          },
          {
            "startTime": 67310,
            "endTime": 67560,
            "data": "không"
          },
          {
            "startTime": 67560,
            "endTime": 68060,
            "data": "quay"
          },
          {
            "startTime": 68060,
            "endTime": 68320,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 68320,
            "endTime": 68560,
            "data": "Để"
          },
          {
            "startTime": 68560,
            "endTime": 68820,
            "data": "rồi"
          },
          {
            "startTime": 68820,
            "endTime": 69330,
            "data": "phải"
          },
          {
            "startTime": 69330,
            "endTime": 69580,
            "data": "tiếc"
          },
          {
            "startTime": 69580,
            "endTime": 69830,
            "data": "nuối"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 69830,
            "endTime": 70080,
            "data": "Những"
          },
          {
            "startTime": 70080,
            "endTime": 70330,
            "data": "chuyện"
          },
          {
            "startTime": 70330,
            "endTime": 70840,
            "data": "cũ"
          },
          {
            "startTime": 70840,
            "endTime": 71080,
            "data": "đã"
          },
          {
            "startTime": 71080,
            "endTime": 71840,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 71840,
            "endTime": 72090,
            "data": "Giữ"
          },
          {
            "startTime": 72090,
            "endTime": 72350,
            "data": "trái"
          },
          {
            "startTime": 72350,
            "endTime": 72590,
            "data": "tim"
          },
          {
            "startTime": 72590,
            "endTime": 73130,
            "data": "luôn"
          },
          {
            "startTime": 73130,
            "endTime": 73630,
            "data": "yên"
          },
          {
            "startTime": 73630,
            "endTime": 73870,
            "data": "bình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 73870,
            "endTime": 74380,
            "data": "Và"
          },
          {
            "startTime": 74380,
            "endTime": 74630,
            "data": "quên"
          },
          {
            "startTime": 74630,
            "endTime": 74890,
            "data": "hết"
          },
          {
            "startTime": 74890,
            "endTime": 75130,
            "data": "những"
          },
          {
            "startTime": 75130,
            "endTime": 75640,
            "data": "ưu"
          },
          {
            "startTime": 75640,
            "endTime": 76140,
            "data": "phiền"
          },
          {
            "startTime": 76140,
            "endTime": 76640,
            "data": "vấn"
          },
          {
            "startTime": 76640,
            "endTime": 77910,
            "data": "vương"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 77910,
            "endTime": 78160,
            "data": "Cuộc"
          },
          {
            "startTime": 78160,
            "endTime": 78620,
            "data": "đời"
          },
          {
            "startTime": 78620,
            "endTime": 79380,
            "data": "này"
          },
          {
            "startTime": 79380,
            "endTime": 79630,
            "data": "được"
          },
          {
            "startTime": 79630,
            "endTime": 79890,
            "data": "bao"
          },
          {
            "startTime": 79890,
            "endTime": 80400,
            "data": "lần"
          },
          {
            "startTime": 80400,
            "endTime": 80900,
            "data": "nói"
          },
          {
            "startTime": 80900,
            "endTime": 81900,
            "data": "yêu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 81900,
            "endTime": 82140,
            "data": "Anh"
          },
          {
            "startTime": 82140,
            "endTime": 82400,
            "data": "biết"
          },
          {
            "startTime": 82400,
            "endTime": 82920,
            "data": "nơi"
          },
          {
            "startTime": 82920,
            "endTime": 83180,
            "data": "để"
          },
          {
            "startTime": 83180,
            "endTime": 83920,
            "data": "quay"
          },
          {
            "startTime": 83920,
            "endTime": 84440,
            "data": "về"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 84440,
            "endTime": 84890,
            "data": "Em"
          },
          {
            "startTime": 84890,
            "endTime": 85130,
            "data": "biết"
          },
          {
            "startTime": 85130,
            "endTime": 85390,
            "data": "nơi"
          },
          {
            "startTime": 85390,
            "endTime": 85630,
            "data": "phải"
          },
          {
            "startTime": 85630,
            "endTime": 87110,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 87110,
            "endTime": 87370,
            "data": "Anh"
          },
          {
            "startTime": 87370,
            "endTime": 87610,
            "data": "biết"
          },
          {
            "startTime": 87610,
            "endTime": 87870,
            "data": "chỗ"
          },
          {
            "startTime": 87870,
            "endTime": 88110,
            "data": "trú"
          },
          {
            "startTime": 88110,
            "endTime": 88390,
            "data": "chân"
          },
          {
            "startTime": 88390,
            "endTime": 88920,
            "data": "dọc"
          },
          {
            "startTime": 88920,
            "endTime": 89180,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 89180,
            "endTime": 89430,
            "data": "Để"
          },
          {
            "startTime": 89430,
            "endTime": 89680,
            "data": "tránh"
          },
          {
            "startTime": 89680,
            "endTime": 90170,
            "data": "cơn"
          },
          {
            "startTime": 90170,
            "endTime": 90430,
            "data": "mưa"
          },
          {
            "startTime": 90430,
            "endTime": 90690,
            "data": "hạ"
          },
          {
            "startTime": 90690,
            "endTime": 91190,
            "data": "đến"
          },
          {
            "startTime": 91190,
            "endTime": 91430,
            "data": "mỗi"
          },
          {
            "startTime": 91430,
            "endTime": 91930,
            "data": "chiều"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 91930,
            "endTime": 92190,
            "data": "Ta"
          },
          {
            "startTime": 92190,
            "endTime": 92700,
            "data": "biết"
          },
          {
            "startTime": 92700,
            "endTime": 92950,
            "data": "trao"
          },
          {
            "startTime": 92950,
            "endTime": 93200,
            "data": "nhau"
          },
          {
            "startTime": 93200,
            "endTime": 93950,
            "data": "ân"
          },
          {
            "startTime": 93950,
            "endTime": 94450,
            "data": "cần"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 94450,
            "endTime": 94710,
            "data": "Biết"
          },
          {
            "startTime": 94710,
            "endTime": 95220,
            "data": "mỗi"
          },
          {
            "startTime": 95220,
            "endTime": 95470,
            "data": "khi"
          },
          {
            "startTime": 95470,
            "endTime": 95720,
            "data": "vui"
          },
          {
            "startTime": 95720,
            "endTime": 96470,
            "data": "buồn"
          },
          {
            "startTime": 96470,
            "endTime": 96970,
            "data": "có"
          },
          {
            "startTime": 96970,
            "endTime": 97980,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 97980,
            "endTime": 98230,
            "data": "Thời"
          },
          {
            "startTime": 98230,
            "endTime": 98990,
            "data": "gian"
          },
          {
            "startTime": 98990,
            "endTime": 99500,
            "data": "để"
          },
          {
            "startTime": 99500,
            "endTime": 99760,
            "data": "ta"
          },
          {
            "startTime": 99760,
            "endTime": 100280,
            "data": "trưởng"
          },
          {
            "startTime": 100280,
            "endTime": 100530,
            "data": "thành"
          },
          {
            "startTime": 100530,
            "endTime": 101290,
            "data": "với"
          },
          {
            "startTime": 101290,
            "endTime": 104040,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 104040,
            "endTime": 104290,
            "data": "Nhảy"
          },
          {
            "startTime": 104290,
            "endTime": 104540,
            "data": "với"
          },
          {
            "startTime": 104540,
            "endTime": 104800,
            "data": "anh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 104800,
            "endTime": 105300,
            "data": "Đến"
          },
          {
            "startTime": 105300,
            "endTime": 105550,
            "data": "khi"
          },
          {
            "startTime": 105550,
            "endTime": 105800,
            "data": "đôi"
          },
          {
            "startTime": 105800,
            "endTime": 106300,
            "data": "chân"
          },
          {
            "startTime": 106300,
            "endTime": 106800,
            "data": "rã"
          },
          {
            "startTime": 106800,
            "endTime": 109070,
            "data": "rời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 109070,
            "endTime": 109330,
            "data": "Hát"
          },
          {
            "startTime": 109330,
            "endTime": 109580,
            "data": "anh"
          },
          {
            "startTime": 109580,
            "endTime": 109830,
            "data": "nghe"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 109830,
            "endTime": 110090,
            "data": "Những"
          },
          {
            "startTime": 110090,
            "endTime": 110330,
            "data": "câu"
          },
          {
            "startTime": 110330,
            "endTime": 110590,
            "data": "ca"
          },
          {
            "startTime": 110590,
            "endTime": 111090,
            "data": "từ"
          },
          {
            "startTime": 111090,
            "endTime": 111590,
            "data": "ngày"
          },
          {
            "startTime": 111590,
            "endTime": 111830,
            "data": "xưa"
          },
          {
            "startTime": 111830,
            "endTime": 114110,
            "data": "cũ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 114110,
            "endTime": 114360,
            "data": "Thì"
          },
          {
            "startTime": 114360,
            "endTime": 114610,
            "data": "thầm"
          },
          {
            "startTime": 114610,
            "endTime": 114860,
            "data": "khẽ"
          },
          {
            "startTime": 114860,
            "endTime": 115130,
            "data": "anh"
          },
          {
            "startTime": 115130,
            "endTime": 115630,
            "data": "nghe"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 115630,
            "endTime": 115630,
            "data": "Em"
          },
          {
            "startTime": 115630,
            "endTime": 115910,
            "data": "vẫn"
          },
          {
            "startTime": 115910,
            "endTime": 116160,
            "data": "còn"
          },
          {
            "startTime": 116160,
            "endTime": 116410,
            "data": "bao"
          },
          {
            "startTime": 116410,
            "endTime": 116910,
            "data": "niềm"
          },
          {
            "startTime": 116910,
            "endTime": 117910,
            "data": "mơ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 117910,
            "endTime": 118160,
            "data": "Ôm"
          },
          {
            "startTime": 118160,
            "endTime": 118420,
            "data": "lấy"
          },
          {
            "startTime": 118420,
            "endTime": 118920,
            "data": "anh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 118920,
            "endTime": 119180,
            "data": "Nghe"
          },
          {
            "startTime": 119180,
            "endTime": 119420,
            "data": "mưa"
          },
          {
            "startTime": 119420,
            "endTime": 119680,
            "data": "đầu"
          },
          {
            "startTime": 119680,
            "endTime": 120420,
            "data": "mùa"
          },
          {
            "startTime": 120420,
            "endTime": 120680,
            "data": "ghé"
          },
          {
            "startTime": 120680,
            "endTime": 123680,
            "data": "chơi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 124220,
            "endTime": 124470,
            "data": "Một"
          },
          {
            "startTime": 124470,
            "endTime": 124470,
            "data": "giây"
          },
          {
            "startTime": 124470,
            "endTime": 124730,
            "data": "không"
          },
          {
            "startTime": 124730,
            "endTime": 124970,
            "data": "thấy"
          },
          {
            "startTime": 124970,
            "endTime": 125230,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 125230,
            "endTime": 125230,
            "data": "Như"
          },
          {
            "startTime": 125230,
            "endTime": 125750,
            "data": "một"
          },
          {
            "startTime": 125750,
            "endTime": 126010,
            "data": "đời"
          },
          {
            "startTime": 126010,
            "endTime": 126260,
            "data": "cô"
          },
          {
            "startTime": 126260,
            "endTime": 126510,
            "data": "đơn"
          },
          {
            "startTime": 126510,
            "endTime": 129320,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 129320,
            "endTime": 129320,
            "data": "Trời"
          },
          {
            "startTime": 129320,
            "endTime": 129560,
            "data": "mù"
          },
          {
            "startTime": 129560,
            "endTime": 129820,
            "data": "mây"
          },
          {
            "startTime": 129820,
            "endTime": 129820,
            "data": "bỗng"
          },
          {
            "startTime": 129820,
            "endTime": 130090,
            "data": "nhiên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 130090,
            "endTime": 130350,
            "data": "Ngát"
          },
          {
            "startTime": 130350,
            "endTime": 130850,
            "data": "xanh"
          },
          {
            "startTime": 130850,
            "endTime": 131090,
            "data": "khi"
          },
          {
            "startTime": 131090,
            "endTime": 131350,
            "data": "em"
          },
          {
            "startTime": 131350,
            "endTime": 131870,
            "data": "khẽ"
          },
          {
            "startTime": 131870,
            "endTime": 134380,
            "data": "cười"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 134380,
            "endTime": 134380,
            "data": "Một"
          },
          {
            "startTime": 134380,
            "endTime": 134640,
            "data": "ngày"
          },
          {
            "startTime": 134640,
            "endTime": 134900,
            "data": "anh"
          },
          {
            "startTime": 134900,
            "endTime": 134900,
            "data": "biết"
          },
          {
            "startTime": 134900,
            "endTime": 135400,
            "data": "hết"
          },
          {
            "startTime": 135400,
            "endTime": 135400,
            "data": "nguyên"
          },
          {
            "startTime": 135400,
            "endTime": 136140,
            "data": "do"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 136140,
            "endTime": 136140,
            "data": "Của"
          },
          {
            "startTime": 136140,
            "endTime": 136420,
            "data": "những"
          },
          {
            "startTime": 136420,
            "endTime": 136700,
            "data": "yên"
          },
          {
            "startTime": 136700,
            "endTime": 136940,
            "data": "vui"
          },
          {
            "startTime": 136940,
            "endTime": 137480,
            "data": "trong"
          },
          {
            "startTime": 137480,
            "endTime": 139220,
            "data": "đời"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 139220,
            "endTime": 139510,
            "data": "Là"
          },
          {
            "startTime": 139510,
            "endTime": 139750,
            "data": "ngày"
          },
          {
            "startTime": 139750,
            "endTime": 139750,
            "data": "duyên"
          },
          {
            "startTime": 139750,
            "endTime": 140010,
            "data": "kiếp"
          },
          {
            "startTime": 140010,
            "endTime": 140460,
            "data": "kia"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 140460,
            "endTime": 140710,
            "data": "Đưa"
          },
          {
            "startTime": 140710,
            "endTime": 141220,
            "data": "ta"
          },
          {
            "startTime": 141220,
            "endTime": 141460,
            "data": "gần"
          },
          {
            "startTime": 141460,
            "endTime": 141720,
            "data": "lại"
          },
          {
            "startTime": 141720,
            "endTime": 141960,
            "data": "với"
          },
          {
            "startTime": 141960,
            "endTime": 142220,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 142220,
            "endTime": 142460,
            "data": "Tạm"
          },
          {
            "startTime": 142460,
            "endTime": 142720,
            "data": "gác"
          },
          {
            "startTime": 142720,
            "endTime": 143240,
            "data": "hết"
          },
          {
            "startTime": 143240,
            "endTime": 143490,
            "data": "những"
          },
          {
            "startTime": 143490,
            "endTime": 143740,
            "data": "âu"
          },
          {
            "startTime": 143740,
            "endTime": 144490,
            "data": "lo"
          },
          {
            "startTime": 144490,
            "endTime": 144750,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 144750,
            "endTime": 144990,
            "data": "Cùng"
          },
          {
            "startTime": 144990,
            "endTime": 145250,
            "data": "anh"
          },
          {
            "startTime": 145250,
            "endTime": 145750,
            "data": "bước"
          },
          {
            "startTime": 145750,
            "endTime": 145990,
            "data": "trên"
          },
          {
            "startTime": 145990,
            "endTime": 146250,
            "data": "con"
          },
          {
            "startTime": 146250,
            "endTime": 147470,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 147470,
            "endTime": 147990,
            "data": "Ta"
          },
          {
            "startTime": 147990,
            "endTime": 148250,
            "data": "sẽ"
          },
          {
            "startTime": 148250,
            "endTime": 148500,
            "data": "không"
          },
          {
            "startTime": 148500,
            "endTime": 148750,
            "data": "quay"
          },
          {
            "startTime": 148750,
            "endTime": 149000,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 149000,
            "endTime": 149520,
            "data": "Để"
          },
          {
            "startTime": 149520,
            "endTime": 149770,
            "data": "rồi"
          },
          {
            "startTime": 149770,
            "endTime": 150020,
            "data": "phải"
          },
          {
            "startTime": 150020,
            "endTime": 150280,
            "data": "tiếc"
          },
          {
            "startTime": 150280,
            "endTime": 150790,
            "data": "nuối"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 150790,
            "endTime": 151040,
            "data": "Những"
          },
          {
            "startTime": 151040,
            "endTime": 151290,
            "data": "chuyện"
          },
          {
            "startTime": 151290,
            "endTime": 151540,
            "data": "cũ"
          },
          {
            "startTime": 151540,
            "endTime": 152070,
            "data": "đã"
          },
          {
            "startTime": 152070,
            "endTime": 152580,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 152580,
            "endTime": 152820,
            "data": "Giữ"
          },
          {
            "startTime": 152820,
            "endTime": 153320,
            "data": "trái"
          },
          {
            "startTime": 153320,
            "endTime": 153580,
            "data": "tim"
          },
          {
            "startTime": 153580,
            "endTime": 153820,
            "data": "luôn"
          },
          {
            "startTime": 153820,
            "endTime": 154580,
            "data": "yên"
          },
          {
            "startTime": 154580,
            "endTime": 154830,
            "data": "bình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 154830,
            "endTime": 155080,
            "data": "Và"
          },
          {
            "startTime": 155080,
            "endTime": 155330,
            "data": "quên"
          },
          {
            "startTime": 155330,
            "endTime": 155850,
            "data": "hết"
          },
          {
            "startTime": 155850,
            "endTime": 156110,
            "data": "những"
          },
          {
            "startTime": 156110,
            "endTime": 156350,
            "data": "ưu"
          },
          {
            "startTime": 156350,
            "endTime": 156850,
            "data": "phiền"
          },
          {
            "startTime": 156850,
            "endTime": 157610,
            "data": "vấn"
          },
          {
            "startTime": 157610,
            "endTime": 158610,
            "data": "vương"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 158610,
            "endTime": 158870,
            "data": "Cuộc"
          },
          {
            "startTime": 158870,
            "endTime": 159610,
            "data": "đời"
          },
          {
            "startTime": 159610,
            "endTime": 160110,
            "data": "này"
          },
          {
            "startTime": 160110,
            "endTime": 160370,
            "data": "được"
          },
          {
            "startTime": 160370,
            "endTime": 160870,
            "data": "bao"
          },
          {
            "startTime": 160870,
            "endTime": 161110,
            "data": "lần"
          },
          {
            "startTime": 161110,
            "endTime": 161610,
            "data": "nói"
          },
          {
            "startTime": 161610,
            "endTime": 162660,
            "data": "yêu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 162660,
            "endTime": 162910,
            "data": "Anh"
          },
          {
            "startTime": 162910,
            "endTime": 163410,
            "data": "biết"
          },
          {
            "startTime": 163410,
            "endTime": 163660,
            "data": "nơi"
          },
          {
            "startTime": 163660,
            "endTime": 163910,
            "data": "để"
          },
          {
            "startTime": 163910,
            "endTime": 164660,
            "data": "quay"
          },
          {
            "startTime": 164660,
            "endTime": 165160,
            "data": "về"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 165160,
            "endTime": 165430,
            "data": "Em"
          },
          {
            "startTime": 165430,
            "endTime": 165930,
            "data": "biết"
          },
          {
            "startTime": 165930,
            "endTime": 166190,
            "data": "nơi"
          },
          {
            "startTime": 166190,
            "endTime": 166430,
            "data": "phải"
          },
          {
            "startTime": 166430,
            "endTime": 167720,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 167720,
            "endTime": 167970,
            "data": "Anh"
          },
          {
            "startTime": 167970,
            "endTime": 168470,
            "data": "biết"
          },
          {
            "startTime": 168470,
            "endTime": 168720,
            "data": "chỗ"
          },
          {
            "startTime": 168720,
            "endTime": 168970,
            "data": "trú"
          },
          {
            "startTime": 168970,
            "endTime": 169220,
            "data": "chân"
          },
          {
            "startTime": 169220,
            "endTime": 169720,
            "data": "dọc"
          },
          {
            "startTime": 169720,
            "endTime": 169970,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 169970,
            "endTime": 170220,
            "data": "Để"
          },
          {
            "startTime": 170220,
            "endTime": 170470,
            "data": "tránh"
          },
          {
            "startTime": 170470,
            "endTime": 170990,
            "data": "cơn"
          },
          {
            "startTime": 170990,
            "endTime": 171250,
            "data": "mưa"
          },
          {
            "startTime": 171250,
            "endTime": 171490,
            "data": "hạ"
          },
          {
            "startTime": 171490,
            "endTime": 171990,
            "data": "đến"
          },
          {
            "startTime": 171990,
            "endTime": 172250,
            "data": "mỗi"
          },
          {
            "startTime": 172250,
            "endTime": 172750,
            "data": "chiều"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 172750,
            "endTime": 173000,
            "data": "Ta"
          },
          {
            "startTime": 173000,
            "endTime": 173510,
            "data": "biết"
          },
          {
            "startTime": 173510,
            "endTime": 173760,
            "data": "trao"
          },
          {
            "startTime": 173760,
            "endTime": 174010,
            "data": "nhau"
          },
          {
            "startTime": 174010,
            "endTime": 174770,
            "data": "ân"
          },
          {
            "startTime": 174770,
            "endTime": 175270,
            "data": "cần"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 175270,
            "endTime": 175530,
            "data": "Biết"
          },
          {
            "startTime": 175530,
            "endTime": 176030,
            "data": "mỗi"
          },
          {
            "startTime": 176030,
            "endTime": 176280,
            "data": "khi"
          },
          {
            "startTime": 176280,
            "endTime": 176530,
            "data": "vui"
          },
          {
            "startTime": 176530,
            "endTime": 177280,
            "data": "buồn"
          },
          {
            "startTime": 177280,
            "endTime": 177780,
            "data": "có"
          },
          {
            "startTime": 177780,
            "endTime": 178790,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 178790,
            "endTime": 179050,
            "data": "Thời"
          },
          {
            "startTime": 179050,
            "endTime": 179790,
            "data": "gian"
          },
          {
            "startTime": 179790,
            "endTime": 180290,
            "data": "để"
          },
          {
            "startTime": 180290,
            "endTime": 180570,
            "data": "ta"
          },
          {
            "startTime": 180570,
            "endTime": 181080,
            "data": "trưởng"
          },
          {
            "startTime": 181080,
            "endTime": 181330,
            "data": "thành"
          },
          {
            "startTime": 181330,
            "endTime": 182090,
            "data": "với"
          },
          {
            "startTime": 182090,
            "endTime": 184340,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 184340,
            "endTime": 184600,
            "data": "Bờ"
          },
          {
            "startTime": 184600,
            "endTime": 184840,
            "data": "vai"
          },
          {
            "startTime": 184840,
            "endTime": 184840,
            "data": "anh"
          },
          {
            "startTime": 184840,
            "endTime": 185100,
            "data": "rộng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 185100,
            "endTime": 185100,
            "data": "Đủ"
          },
          {
            "startTime": 185100,
            "endTime": 185380,
            "data": "để"
          },
          {
            "startTime": 185380,
            "endTime": 185620,
            "data": "che"
          },
          {
            "startTime": 185620,
            "endTime": 185870,
            "data": "chở"
          },
          {
            "startTime": 185870,
            "endTime": 186130,
            "data": "cho"
          },
          {
            "startTime": 186130,
            "endTime": 187130,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 187130,
            "endTime": 187130,
            "data": "Was"
          },
          {
            "startTime": 187130,
            "endTime": 187380,
            "data": "a"
          },
          {
            "startTime": 187380,
            "endTime": 187630,
            "data": "boy"
          },
          {
            "startTime": 187630,
            "endTime": 187880,
            "data": "now"
          },
          {
            "startTime": 187880,
            "endTime": 188140,
            "data": "a"
          },
          {
            "startTime": 188140,
            "endTime": 188380,
            "data": "man"
          },
          {
            "startTime": 188380,
            "endTime": 188640,
            "data": "cho"
          },
          {
            "startTime": 188640,
            "endTime": 189380,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 189380,
            "endTime": 189650,
            "data": "Từng"
          },
          {
            "startTime": 189650,
            "endTime": 189900,
            "data": "đi"
          },
          {
            "startTime": 189900,
            "endTime": 190160,
            "data": "lạc"
          },
          {
            "startTime": 190160,
            "endTime": 190160,
            "data": "ở"
          },
          {
            "startTime": 190160,
            "endTime": 190400,
            "data": "trong"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 190400,
            "endTime": 190660,
            "data": "Thế"
          },
          {
            "startTime": 190660,
            "endTime": 190660,
            "data": "giới"
          },
          {
            "startTime": 190660,
            "endTime": 190900,
            "data": "điên"
          },
          {
            "startTime": 190900,
            "endTime": 191160,
            "data": "rồ"
          },
          {
            "startTime": 191160,
            "endTime": 191160,
            "data": "ngoài"
          },
          {
            "startTime": 191160,
            "endTime": 191400,
            "data": "kia"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 191400,
            "endTime": 191400,
            "data": "Và"
          },
          {
            "startTime": 191400,
            "endTime": 191680,
            "data": "tình"
          },
          {
            "startTime": 191680,
            "endTime": 191940,
            "data": "yêu"
          },
          {
            "startTime": 191940,
            "endTime": 191940,
            "data": "em"
          },
          {
            "startTime": 191940,
            "endTime": 192190,
            "data": "trao"
          },
          {
            "startTime": 192190,
            "endTime": 192450,
            "data": "anh"
          },
          {
            "startTime": 192450,
            "endTime": 192450,
            "data": "ngày"
          },
          {
            "startTime": 192450,
            "endTime": 192700,
            "data": "ấy"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 192700,
            "endTime": 192700,
            "data": "Đã"
          },
          {
            "startTime": 192700,
            "endTime": 192970,
            "data": "mang"
          },
          {
            "startTime": 192970,
            "endTime": 193230,
            "data": "anh"
          },
          {
            "startTime": 193230,
            "endTime": 193470,
            "data": "về"
          },
          {
            "startTime": 193470,
            "endTime": 193730,
            "data": "bên"
          },
          {
            "startTime": 193730,
            "endTime": 194490,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 194490,
            "endTime": 194750,
            "data": "Yêu"
          },
          {
            "startTime": 194750,
            "endTime": 195000,
            "data": "em"
          },
          {
            "startTime": 195000,
            "endTime": 195000,
            "data": "như"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 195000,
            "endTime": 195280,
            "data": "A"
          },
          {
            "startTime": 195280,
            "endTime": 195520,
            "data": "fat"
          },
          {
            "startTime": 195520,
            "endTime": 195780,
            "data": "kid"
          },
          {
            "startTime": 195780,
            "endTime": 196020,
            "data": "loves"
          },
          {
            "startTime": 196020,
            "endTime": 196530,
            "data": "cake"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 196530,
            "endTime": 196790,
            "data": "Nhắm"
          },
          {
            "startTime": 196790,
            "endTime": 196790,
            "data": "mắt"
          },
          {
            "startTime": 196790,
            "endTime": 197030,
            "data": "cảm"
          },
          {
            "startTime": 197030,
            "endTime": 197290,
            "data": "nhận"
          },
          {
            "startTime": 197290,
            "endTime": 197290,
            "data": "tình"
          },
          {
            "startTime": 197290,
            "endTime": 197540,
            "data": "yêu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 197540,
            "endTime": 197540,
            "data": "Tan"
          },
          {
            "startTime": 197540,
            "endTime": 197820,
            "data": "dịu"
          },
          {
            "startTime": 197820,
            "endTime": 198070,
            "data": "ngọt"
          },
          {
            "startTime": 198070,
            "endTime": 198320,
            "data": "trên"
          },
          {
            "startTime": 198320,
            "endTime": 198320,
            "data": "môi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 198320,
            "endTime": 198580,
            "data": "Khi"
          },
          {
            "startTime": 198580,
            "endTime": 198820,
            "data": "em"
          },
          {
            "startTime": 198820,
            "endTime": 198820,
            "data": "hôn"
          },
          {
            "startTime": 198820,
            "endTime": 199080,
            "data": "môi"
          },
          {
            "startTime": 199080,
            "endTime": 199330,
            "data": "anh"
          },
          {
            "startTime": 199330,
            "endTime": 200280,
            "data": "đây"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 200280,
            "endTime": 200540,
            "data": "Không"
          },
          {
            "startTime": 200540,
            "endTime": 200540,
            "data": "có"
          },
          {
            "startTime": 200540,
            "endTime": 200810,
            "data": "happy"
          },
          {
            "startTime": 200810,
            "endTime": 201310,
            "data": "ending"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 201310,
            "endTime": 201570,
            "data": "Mỗi"
          },
          {
            "startTime": 201570,
            "endTime": 201570,
            "data": "bình"
          },
          {
            "startTime": 201570,
            "endTime": 201850,
            "data": "minh"
          },
          {
            "startTime": 201850,
            "endTime": 202090,
            "data": "ta"
          },
          {
            "startTime": 202090,
            "endTime": 202340,
            "data": "biết"
          },
          {
            "startTime": 202340,
            "endTime": 202590,
            "data": "thêm"
          },
          {
            "startTime": 202590,
            "endTime": 202590,
            "data": "trang"
          },
          {
            "startTime": 202590,
            "endTime": 202860,
            "data": "mới"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 202860,
            "endTime": 203120,
            "data": "Nối"
          },
          {
            "startTime": 203120,
            "endTime": 203340,
            "data": "dài câu"
          },
          {
            "startTime": 203340,
            "endTime": 203590,
            "data": "chuyện"
          },
          {
            "startTime": 203590,
            "endTime": 203590,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 203560,
            "endTime": 203820,
            "data": "Như"
          },
          {
            "startTime": 203820,
            "endTime": 204020,
            "data": "trong mơ"
          },
          {
            "startTime": 204020,
            "endTime": 204260,
            "data": "nơi"
          },
          {
            "startTime": 204260,
            "endTime": 204260,
            "data": "xa"
          },
          {
            "startTime": 204260,
            "endTime": 204540,
            "data": "kia"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 204540,
            "endTime": 204780,
            "data": "Xanh"
          },
          {
            "startTime": 204780,
            "endTime": 205040,
            "data": "biếc"
          },
          {
            "startTime": 205040,
            "endTime": 205280,
            "data": "xanh"
          },
          {
            "startTime": 205280,
            "endTime": 206040,
            "data": "biếc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 206040,
            "endTime": 206040,
            "data": "Thiên"
          },
          {
            "startTime": 206040,
            "endTime": 206280,
            "data": "đàng"
          },
          {
            "startTime": 206280,
            "endTime": 206540,
            "data": "bên"
          },
          {
            "startTime": 206540,
            "endTime": 206540,
            "data": "em"
          },
          {
            "startTime": 206540,
            "endTime": 206780,
            "data": "nơi"
          },
          {
            "startTime": 206780,
            "endTime": 206780,
            "data": "đây"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 206780,
            "endTime": 207300,
            "data": "Anh"
          },
          {
            "startTime": 207300,
            "endTime": 207550,
            "data": "biết"
          },
          {
            "startTime": 207550,
            "endTime": 207800,
            "data": "anh"
          },
          {
            "startTime": 207800,
            "endTime": 208800,
            "data": "biết"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 208800,
            "endTime": 209050,
            "data": "Bóng"
          },
          {
            "startTime": 209050,
            "endTime": 209050,
            "data": "đêm"
          },
          {
            "startTime": 209050,
            "endTime": 209330,
            "data": "đã"
          },
          {
            "startTime": 209330,
            "endTime": 209830,
            "data": "qua"
          },
          {
            "startTime": 209830,
            "endTime": 210100,
            "data": "yên"
          },
          {
            "startTime": 210100,
            "endTime": 210360,
            "data": "bình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 210360,
            "endTime": 210360,
            "data": "Có"
          },
          {
            "startTime": 210360,
            "endTime": 210610,
            "data": "thêm"
          },
          {
            "startTime": 210610,
            "endTime": 210870,
            "data": "chúng"
          },
          {
            "startTime": 210870,
            "endTime": 211120,
            "data": "ta"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 211120,
            "endTime": 211120,
            "data": "Nghe"
          },
          {
            "startTime": 211120,
            "endTime": 211370,
            "data": "lòng"
          },
          {
            "startTime": 211370,
            "endTime": 211620,
            "data": "đàn"
          },
          {
            "startTime": 211620,
            "endTime": 211870,
            "data": "từng"
          },
          {
            "startTime": 211870,
            "endTime": 211870,
            "data": "câu"
          },
          {
            "startTime": 211870,
            "endTime": 213920,
            "data": "ca"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 213920,
            "endTime": 213920,
            "data": "Cuộc"
          },
          {
            "startTime": 213920,
            "endTime": 214180,
            "data": "đời"
          },
          {
            "startTime": 214180,
            "endTime": 214430,
            "data": "này"
          },
          {
            "startTime": 214430,
            "endTime": 214430,
            "data": "chẳng"
          },
          {
            "startTime": 214430,
            "endTime": 214940,
            "data": "hề"
          },
          {
            "startTime": 214940,
            "endTime": 215440,
            "data": "hối"
          },
          {
            "startTime": 215440,
            "endTime": 216440,
            "data": "tiếc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 216440,
            "endTime": 216690,
            "data": "Những"
          },
          {
            "startTime": 216690,
            "endTime": 216940,
            "data": "tháng"
          },
          {
            "startTime": 216940,
            "endTime": 217440,
            "data": "năm"
          },
          {
            "startTime": 217440,
            "endTime": 217440,
            "data": "ta"
          },
          {
            "startTime": 217440,
            "endTime": 217730,
            "data": "đi"
          },
          {
            "startTime": 217730,
            "endTime": 218230,
            "data": "cùng"
          },
          {
            "startTime": 218230,
            "endTime": 219480,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 219480,
            "endTime": 219730,
            "data": "Anh"
          },
          {
            "startTime": 219730,
            "endTime": 219730,
            "data": "biết"
          },
          {
            "startTime": 219730,
            "endTime": 219980,
            "data": "em"
          },
          {
            "startTime": 219980,
            "endTime": 220480,
            "data": "luôn"
          },
          {
            "startTime": 220480,
            "endTime": 220740,
            "data": "ở"
          },
          {
            "startTime": 220740,
            "endTime": 221240,
            "data": "đó"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 221240,
            "endTime": 221240,
            "data": "Nơi"
          },
          {
            "startTime": 221240,
            "endTime": 221740,
            "data": "anh"
          },
          {
            "startTime": 221740,
            "endTime": 222000,
            "data": "thuộc"
          },
          {
            "startTime": 222000,
            "endTime": 223000,
            "data": "về"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 223000,
            "endTime": 223240,
            "data": "Tạm"
          },
          {
            "startTime": 223240,
            "endTime": 223740,
            "data": "gác"
          },
          {
            "startTime": 223740,
            "endTime": 224000,
            "data": "hết"
          },
          {
            "startTime": 224000,
            "endTime": 224240,
            "data": "những"
          },
          {
            "startTime": 224240,
            "endTime": 224500,
            "data": "âu"
          },
          {
            "startTime": 224500,
            "endTime": 225270,
            "data": "lo"
          },
          {
            "startTime": 225270,
            "endTime": 225520,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 225520,
            "endTime": 225780,
            "data": "Cùng"
          },
          {
            "startTime": 225780,
            "endTime": 226030,
            "data": "anh"
          },
          {
            "startTime": 226030,
            "endTime": 226540,
            "data": "bước"
          },
          {
            "startTime": 226540,
            "endTime": 226800,
            "data": "trên"
          },
          {
            "startTime": 226800,
            "endTime": 227040,
            "data": "con"
          },
          {
            "startTime": 227040,
            "endTime": 228360,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 228360,
            "endTime": 228620,
            "data": "Ta"
          },
          {
            "startTime": 228620,
            "endTime": 228860,
            "data": "sẽ"
          },
          {
            "startTime": 228860,
            "endTime": 229380,
            "data": "không"
          },
          {
            "startTime": 229380,
            "endTime": 229640,
            "data": "quay"
          },
          {
            "startTime": 229640,
            "endTime": 229880,
            "data": "đầu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 229880,
            "endTime": 230390,
            "data": "Để"
          },
          {
            "startTime": 230390,
            "endTime": 230630,
            "data": "rồi"
          },
          {
            "startTime": 230630,
            "endTime": 230890,
            "data": "phải"
          },
          {
            "startTime": 230890,
            "endTime": 231140,
            "data": "tiếc"
          },
          {
            "startTime": 231140,
            "endTime": 231640,
            "data": "nuối"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 231640,
            "endTime": 231890,
            "data": "Những"
          },
          {
            "startTime": 231890,
            "endTime": 231890,
            "data": "chuyện"
          },
          {
            "startTime": 231890,
            "endTime": 232410,
            "data": "cũ"
          },
          {
            "startTime": 232410,
            "endTime": 232920,
            "data": "đã"
          },
          {
            "startTime": 232920,
            "endTime": 233420,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 233420,
            "endTime": 233670,
            "data": "Giữ"
          },
          {
            "startTime": 233670,
            "endTime": 234170,
            "data": "trái"
          },
          {
            "startTime": 234170,
            "endTime": 234420,
            "data": "tim"
          },
          {
            "startTime": 234420,
            "endTime": 234670,
            "data": "luôn"
          },
          {
            "startTime": 234670,
            "endTime": 235420,
            "data": "yên"
          },
          {
            "startTime": 235420,
            "endTime": 235670,
            "data": "bình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 235670,
            "endTime": 235920,
            "data": "Và"
          },
          {
            "startTime": 235920,
            "endTime": 236180,
            "data": "quên"
          },
          {
            "startTime": 236180,
            "endTime": 236680,
            "data": "hết"
          },
          {
            "startTime": 236680,
            "endTime": 236920,
            "data": "những"
          },
          {
            "startTime": 236920,
            "endTime": 237180,
            "data": "ưu"
          },
          {
            "startTime": 237180,
            "endTime": 237920,
            "data": "phiền"
          },
          {
            "startTime": 237920,
            "endTime": 238440,
            "data": "vấn"
          },
          {
            "startTime": 238440,
            "endTime": 239440,
            "data": "vương"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 239440,
            "endTime": 239680,
            "data": "Cuộc"
          },
          {
            "startTime": 239680,
            "endTime": 240440,
            "data": "đời"
          },
          {
            "startTime": 240440,
            "endTime": 240940,
            "data": "này"
          },
          {
            "startTime": 240940,
            "endTime": 241190,
            "data": "được"
          },
          {
            "startTime": 241190,
            "endTime": 241700,
            "data": "bao"
          },
          {
            "startTime": 241700,
            "endTime": 241950,
            "data": "lần"
          },
          {
            "startTime": 241950,
            "endTime": 242710,
            "data": "nói"
          },
          {
            "startTime": 242710,
            "endTime": 243460,
            "data": "yêu"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 243460,
            "endTime": 243710,
            "data": "Anh"
          },
          {
            "startTime": 243710,
            "endTime": 244220,
            "data": "biết"
          },
          {
            "startTime": 244220,
            "endTime": 244470,
            "data": "nơi"
          },
          {
            "startTime": 244470,
            "endTime": 244720,
            "data": "để"
          },
          {
            "startTime": 244720,
            "endTime": 245480,
            "data": "quay"
          },
          {
            "startTime": 245480,
            "endTime": 245980,
            "data": "về"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 245980,
            "endTime": 246250,
            "data": "Em"
          },
          {
            "startTime": 246250,
            "endTime": 246750,
            "data": "biết"
          },
          {
            "startTime": 246750,
            "endTime": 247010,
            "data": "nơi"
          },
          {
            "startTime": 247010,
            "endTime": 247250,
            "data": "phải"
          },
          {
            "startTime": 247250,
            "endTime": 248780,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 248780,
            "endTime": 248780,
            "data": "Anh"
          },
          {
            "startTime": 248780,
            "endTime": 249310,
            "data": "biết"
          },
          {
            "startTime": 249310,
            "endTime": 249550,
            "data": "chỗ"
          },
          {
            "startTime": 249550,
            "endTime": 249810,
            "data": "trú"
          },
          {
            "startTime": 249810,
            "endTime": 250050,
            "data": "chân"
          },
          {
            "startTime": 250050,
            "endTime": 250560,
            "data": "dọc"
          },
          {
            "startTime": 250560,
            "endTime": 250810,
            "data": "đường"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 250810,
            "endTime": 251060,
            "data": "Để"
          },
          {
            "startTime": 251060,
            "endTime": 251560,
            "data": "tránh"
          },
          {
            "startTime": 251560,
            "endTime": 251810,
            "data": "cơn"
          },
          {
            "startTime": 251810,
            "endTime": 252060,
            "data": "mưa"
          },
          {
            "startTime": 252060,
            "endTime": 252310,
            "data": "hạ"
          },
          {
            "startTime": 252310,
            "endTime": 252820,
            "data": "đến"
          },
          {
            "startTime": 252820,
            "endTime": 253070,
            "data": "mỗi"
          },
          {
            "startTime": 253070,
            "endTime": 253570,
            "data": "chiều"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 253570,
            "endTime": 253820,
            "data": "Ta"
          },
          {
            "startTime": 253820,
            "endTime": 254340,
            "data": "biết"
          },
          {
            "startTime": 254340,
            "endTime": 254580,
            "data": "trao"
          },
          {
            "startTime": 254580,
            "endTime": 254840,
            "data": "nhau"
          },
          {
            "startTime": 254840,
            "endTime": 255600,
            "data": "ân"
          },
          {
            "startTime": 255600,
            "endTime": 256060,
            "data": "cần"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 256060,
            "endTime": 256560,
            "data": "Biết"
          },
          {
            "startTime": 256560,
            "endTime": 256820,
            "data": "mỗi"
          },
          {
            "startTime": 256820,
            "endTime": 257060,
            "data": "khi"
          },
          {
            "startTime": 257060,
            "endTime": 257560,
            "data": "vui"
          },
          {
            "startTime": 257560,
            "endTime": 258060,
            "data": "buồn"
          },
          {
            "startTime": 258060,
            "endTime": 258820,
            "data": "có"
          },
          {
            "startTime": 258820,
            "endTime": 259570,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 259570,
            "endTime": 259820,
            "data": "Thời"
          },
          {
            "startTime": 259820,
            "endTime": 260590,
            "data": "gian"
          },
          {
            "startTime": 260590,
            "endTime": 261350,
            "data": "để"
          },
          {
            "startTime": 261350,
            "endTime": 261590,
            "data": "ta"
          },
          {
            "startTime": 261590,
            "endTime": 261850,
            "data": "trưởng"
          },
          {
            "startTime": 261850,
            "endTime": 262090,
            "data": "thành"
          },
          {
            "startTime": 262090,
            "endTime": 262880,
            "data": "với"
          },
          {
            "startTime": 262880,
            "endTime": 263880,
            "data": "nhau"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/2/5/c/7/25c7489828d7e662ce2335282a247868.lrc",
    "enabledVideoBG": true,
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1694357627953
}`;

var lyric = JSON.parse(lyrics).data.sentences;
console.log(lyric);
//when play music load lyrics

//xây dựng tính năng karaoke

var karaoke = document.querySelector(".karaoke");
var karaokeBtn = karaoke.querySelector(".btn-karaoke");
var karaokeInner = karaoke.querySelector(".lyric");
var karaokeContent = karaokeInner.querySelector(".karaoke-content");
var songInfo = `<h3>Đây là tên bài hát</h3>`;

karaokeBtn.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  karaokeContent.innerHTML = songInfo;
});

var karaokeClose = karaokeInner.querySelector(".close");

karaokeClose.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  karaokeContent.innerHTML = "";
});

var number = 2;

var handleKaraoke = function (currentTime) {
  // Quy đổi currentTime sang milisecond
  currentTime *= 1000;

  var index = lyric.findIndex(function (wordItem) {
    var wordItemArr = wordItem.words;
    return (
      currentTime >= wordItemArr[0].startTime &&
      currentTime <= wordItemArr[wordItemArr.length - 1].endTime
    );
  });

  if (index !== -1) {
    /*
    page = 1 -> index = 0 đến 2
    page = 2 -> index = 3 đến 5
    page = 3 -> index = 6 đến 8


    công thức page = (index + 1) / 2
    */
    var page = Math.floor(index / number + 1);
    var offset = (page - 1) * number;
    // console.log(`index: ${index} - page: ${page} - offset: ${offset}`);

    if (index >= offset && index < offset + number) {
      karaokeContent.innerText = " ";
      var div = document.createElement("div");
      for (var i = offset; i < offset + number; i++) {
        //Vòng lặp các câu trong 1 màn hình
        var p = document.createElement("p");

        //Vòng lặp các từ trong 1 câu
        lyric[i].words.forEach(function (word) {
          var wordEl = document.createElement("span");
          wordEl.classList.add("word");
          wordEl.innerText = word.data;

          var span = document.createElement("span");
          span.innerText = word.data;
          wordEl.append(span);

          p.append(wordEl);
          if (word.startTime <= currentTime) {
            // console.log(wordEl.innerText);
            // console.log(wordEl);
            span.style.width = `100%`;

            if (currentTime >= word.startTime && currentTime <= word.endTime) {
              var wordTime = word.endTime - word.startTime;
              // var start = currentTime - word.startTime;
              // var rate = start / wordTime;
              // span.style.width = `${rate * 100}%`;
              span.style.transition = `width ${wordTime}ms linear`;
            }
          }
        });
        div.append(p);

        // if (p.previousElementSibling !== null) {
        //   p.previousElementSibling.remove();
        // }
      }

      karaokeContent.append(div);
    }
  }
};

const e = document.querySelector(".list");
document.querySelectorAll(".list-item"), document.querySelector(".list-hidden");
let t = 0,
  n = 0;
const r = (e) => {
    let t = e.target.getBoundingClientRect(),
      n = {
        x: e.pageX - t.left,
        y: e.pageY - t.top,
      };
    return n;
  },
  a = (e) => {
    let t = e.getBoundingClientRect();
    return (t.bottom - t.top) / 2;
  };

function i(e) {
  [].slice.call(e.children).forEach(function (e, r) {
    e.draggable = !0;
    let a = "B\xe0i";
    e.classList.contains("active") ? ((a = "Module"), n++) : t++,
      e.children.length
        ? (e.innerHTML = `${a}: ${"Module" === a ? n : t}: <span>${
            e.children[0].innerText
          }</span>`)
        : (e.innerHTML = `${a}: ${"Module" === a ? n : t}: <span>${
            e.innerText
          }</span>`);
  });
}
!(
  // Using
  (function (e, t) {
    var n; // Function responsible for sorting
    function o(t) {
      t.preventDefault(), (t.dataTransfer.dropEffect = "move");
      var i = t.target;
      if (i && i !== n && "DIV" == i.nodeName) {
        // Sorting
        let o = r(t),
          l = a(t.target);
        o.y > l
          ? i.nextSibling.parentElement === e &&
            e.insertBefore(n, i.nextSibling)
          : i.parentElement === e && e.insertBefore(n, i);
      }
    } // End of sorting
    function l(r) {
      r.preventDefault(),
        n.classList.remove("ghost"),
        e.removeEventListener("dragover", o, !1),
        e.removeEventListener("dragend", l, !1), // Notification about the end of sorting
        t(n);
    } // Making all siblings movable
    i(e), // Sorting starts
      e.addEventListener(
        "dragstart",
        function (t) {
          (n = t.target), // Limiting the movement type
            (t.dataTransfer.effectAllowed = "move"),
            t.dataTransfer.setData("Text", n.textContent), // Subscribing to the events at dnd
            e.addEventListener("dragover", o, !1),
            e.addEventListener("dragend", l, !1),
            setTimeout(function () {
              // If this action is performed without setTimeout, then
              // the moved object will be of this class.
              n.classList.add("ghost");
            }, 0);
        },
        !1
      );
  })(e, function (r) {
    (t = 0), (n = 0), i(e);
  })
); //# sourceMappingURL=index.151545d8.js.map

//# sourceMappingURL=index.151545d8.js.map
