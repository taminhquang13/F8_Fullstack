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
          <span class="text-value">Module ${index + 1}:</span>
          <span class="text-content">${topic}</span>
        </div>`;
    tableList.innerHTML += html1;
    items[index].topic.forEach(function (item) {
      var html2 = `<div class="list-items" draggable="true">
            <span class="text-value">Bài ${count++}:</span>
            <span class="text-content">${item}</span>
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
  var nextElement = getDragAfterElement(tableList, e.clientY);
  console.log(nextElement);
  if (nextElement == null) {
    tableList.append(dragging);
  } else {
    tableList.insertBefore(dragging, nextElement);
  }
});

function getDragAfterElement(tableList, y) {
  const draggableElements = [
    ...tableList.querySelectorAll(".list-items:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
