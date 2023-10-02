const container = document.querySelector(".container");
const btn = document.querySelector(".btn-search");
const activeEl = document.querySelector(".active");
const messageEl = document.querySelector(".message");
var text = null;
var isActive = false;
function handleSpeech() {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  recognition.continuous = false;

  recognition.start();

  recognition.onstart = function () {
    console.log("Speech recognition");
    messageEl.innerText = "Nói đi đừng ngại";
    if (!messageEl.innerText) {
      messageEl.textContent = "";
    }
  };
  recognition.onspeechend = function () {
    console.log("Spe");
    recognition.stop();
  };

  recognition.onresult = function (e) {
    messageEl.textContent = "Đợi 1 tí sẽ có kết quả";

    const handleText = e.results[0][0].transcript.toLowerCase();
    const textEl = document.createElement("div");
    textEl.innerText = "Đang thực hiện " + handleText + " đây rồi";
    container.appendChild(textEl);
    handleResult(handleText);
  };

  recognition.onnomatch = function () {
    messageEl.textContent = "Không có kết quả";
  };
}

function handleResult(handleText) {
  if (handleText.includes("chỉ") || handleText.includes("đường")) {
    const newOne = handleText.replace("chỉ", "").replace("đường", "");
    var ggMap = `https://www.google.com/maps/search/?api=1&query=${newOne}`;
    window.open(ggMap, "_blank");
  } else if (handleText.includes("hát") || handleText.includes("bài")) {
    const newOne = handleText.replace("hát", "").replace("bài", "");
    var mp3 = `https://zingmp3.vn/tim-kiem/tat-ca?q=${newOne}`;
    window.open(mp3, "_blank");
  } else if (
    handleText.includes("video") ||
    handleText.includes("mở") ||
    transcript.includes("youtube")
  ) {
    const newOne = handleText
      .replace("video", "")
      .replace("mở", "")
      .replace("youtube", "");
    var youtube = `https://www.youtube.com/results?search_query=${newOne}`;
    window.open(youtube, "_blank");
  } else {
    isActive = false;
    messageEl.textContent = "Không có kết quả";
  }
}

btn.addEventListener("click", () => {
  handleSpeech();
});
