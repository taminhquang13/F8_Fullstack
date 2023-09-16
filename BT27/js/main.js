var modal = document.querySelector(".modal");
console.log(modal);
var btn = document.getElementById("cart");
var close = document.querySelector(".close");
console.log(close);

var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

btn.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

close_footer.addEventListener("click", function () {
  modal.style.display = "none";
});

order.addEventListener("click", function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng");
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var remove_cart = document.querySelectorAll(".btn-danger");
remove_cart.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (confirm("Bạn có muốn xóa sản phẩm này không?")) {
      btn.parentElement.parentElement.remove();
      updatecart();
    }
  });
});

function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price ")[0];
    var quantity_item = cart_row.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value; // lấy giá trị trong thẻ input
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total + "VNĐ";
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

var quantity_input = document.querySelectorAll(".cart-quantity-input");
console.log(quantity_input);
quantity_input.forEach(function (input) {
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  });
});

function addItemToCart(title, price, img) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cart_title = cartItems.getElementsByClassName("cart-item-title");

  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert("Sản Phẩm Đã Có Trong Giỏ Hàng");
      return;
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", function (e) {
      var button_remove = e.target;
      button_remove.parentElement.parentElement.remove();
      updatecart();
    });
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", function (e) {
      var input = e.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updatecart();
    });
}

var add_cart = document.querySelectorAll(".btn-cart");

add_cart.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var btn = e.target;
    var product = btn.parentElement.parentElement;
    var img = product.parentElement.querySelector(".img-prd").src;
    var title = product.querySelector(".content-product-h3").innerText;
    var price = product.querySelector(".price").innerText;
    addItemToCart(title, price, img);
    updatecart();
  });
});
