var tableList = document.querySelector(".table-list");

var topics = ["Topic 1", "Topic 2", "Topic 3"];

var items = [
  {
    topic: [
      "Cài đặt môi",
      "Cài đặt hai ",
      "Cài đặt ba ",
      "Cài đặt bốn ",
      "Cài đặt năm ",
    ],
  },
  {
    topic: [
      "Giới thiệu khóa học JS",
      "Cài đặt một con vịt",
      "Cài đặt hai con vịt ",
      "Cài đặt ba con vịt ",
      "Cài đặt bốn con vịt ",
      "Cài đặt năm con vịt ",
    ],
  },
  {
    topic: [
      "Giới thiệu khóa học làm giàu từ Vịt",
      "Mua một con vịt",
      "Nuôi một con vịt",
      "Bán một con vịt",
      "Lại mua 1 con vịt khác ",
      "Ăn con vịt đó ",
    ],
  },
];
var count = 1;
var renderList = function () {
  topics.forEach(function (topic, index) {
    var html1 = `<div class="list-items bg"  draggable="true">
          <span>Module ${index + 1}:</span>
          <span >${topic}</span>
        </div>`;
    tableList.innerHTML += html1;
    items[index].topic.forEach(function (item) {
      var html2 = `<div class="list-items" draggable="true">
            <span >Bài ${count++}:</span>
            <span >${item}</span>
            </div>`;
      tableList.innerHTML += html2;
    });
  });
};
renderList();

var listItems = document.querySelectorAll(".list-items");
var bg = document.querySelector(".bg");

listItems.forEach(function (item) {
  item.addEventListener("dragstart", function () {
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
  });
});

tableList.addEventListener("dragover", function (e) {
  e.preventDefault();
  var dragging = document.querySelector(".dragging");
  var notDragging = document.querySelectorAll(".list-items:not(.dragging)");
  console.log(notDragging.offsetTop);
  var afterEL = [...notDragging].filter(function (item) {
    return item.offsetTop > e.clientY;
  });
  console.log(afterEL);
  if (afterEL.length === 0) {
    tableList.appendChild(dragging);
  } else {
    tableList.insertBefore(dragging, afterEL[0]);
  }
});

