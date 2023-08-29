var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");
var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");
var carouselItems = carouselInner.querySelectorAll(".item");
var carouselDots = carousel.querySelector(".carousel-dots");
console.log(carouselDots);
if (carouselItems.length) {
  var itemWidth = carouselInner.clientWidth;
  console.log(itemWidth);

  var totalWidth = itemWidth * carouselItems.length;
  console.log(totalWidth);

  carouselInner.style.width = `${totalWidth}px`;

  var position = 0;
  var index = 0;
  var htmlDots = "";
  carouselItems.forEach(function (item, index) {
    htmlDots += `<span class="dot" data-index="${index}"></span>`;
    carouselDots.innerHTML = htmlDots;
  });
  carouselDots.firstChild.classList.add("active");

  var dots = carouselDots.querySelectorAll(".dot");
  console.log(dots);

  function moveDots() {
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    dots[index].classList.add("active");
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      index = parseInt(this.getAttribute("data-index"));
      console.log(index);
      position = -index * itemWidth;
      carouselInner.style.transform = `translateX(${position}px)`;
      moveDots();
    });
  });

  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
      index++;
      moveDots();
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
      index--;
      moveDots();
    }
  });

  // dots.forEach(function (dot, index) {
  //   dot.addEventListener("click", function () {
  //     position = -index * itemWidth;
  //     console.log(position);
  //     carouselInner.style.translate = `${position}px`;
  //   });
  // });
  // dots.forEach(function (dot) {
  //   dot.addEventListener("click", function () {
  //     dots.forEach(function (dot) {
  //       dot.classList.remove("active");
  //     });
  //     dot.classList.add("active");
  //   });
  // });
}
