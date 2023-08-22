var login = document.querySelector(".modal-form-login");
var register = document.querySelector(".modal-form-register");
var modalBox = document.querySelector(".modal-box");
var btn = document.querySelector(".btn-login-header");
var overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

overlay.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    modalBox.classList.remove("show");
  }
});

var active = document.querySelector(".login .active");
var noActive = document.querySelector(".login .no-active");

noActive.addEventListener("click", function () {
  noActive.classList.add("active");
  active.classList.remove("active");
  login.classList.add("hidden");
  register.classList.add("show");
  register.classList.remove("hidden");
});

active.addEventListener("click", function () {
  active.classList.add("active");
  noActive.classList.remove("active");
  login.classList.add("show");
  login.classList.remove("hidden");
  register.classList.add("hidden");
});

//Login
var password = document.querySelector("#form-login .password-input");
var showPassword = document.querySelector(".btn-show");
var hiddenShow = document.querySelector(".btn-show i");
var inputEmail = document.querySelector("#form-login .email-input");
var errorEmail = document.querySelector("#form-login .error");
var errorPassword = document.querySelector("#form-login .error-pass");

//check email

inputEmail.oninput = function () {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  errorEmail.innerText = "Email không hợp lệ";

  if (regex.test(inputEmail.value)) {
    errorEmail.innerText = "";
    if (password.value === "") {
      errorPassword.innerText = "Password không hợp lệ";
    }
  } else {
    errorEmail.innerText = "Email không hợp lệ";
    errorPassword.innerText = "Password không hợp lệ";
  }

  if (inputEmail.value === "") {
    errorEmail.innerText = "Vui lòng nhập thông tin";
  }

  if (inputEmail.value === "" && password.value) {
    errorPassword.innerText = "";
  }

  if (!regex.test(inputEmail.value) && password.value) {
    errorPassword.innerText = "";
  }
};

password.oninput = function () {
  if (password.value === "") {
    errorPassword.innerText = "Password không hợp lệ";
  } else {
    errorPassword.innerText = "";
  }

  if (inputEmail.value === "" && password.value) {
    errorPassword.innerText = "";
  }
};

showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    hiddenShow.classList.remove("fa-eye");
    hiddenShow.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    hiddenShow.classList.remove("fa-eye-slash");
    hiddenShow.classList.add("fa-eye");
  }
});

//Register
var nameRegister = document.querySelector("#form-register .name-input");
var inputEmailRegister = document.querySelector("#form-register .email-input");
var passwordRegister = document.querySelector("#form-register .password-input");
var showPasswordRegister = document.querySelector("#form-register .btn-show");
var hiddenShowRegister = document.querySelector("#form-register .btn-show i");
var errorEmailRegister = document.querySelector("#form-register .error-email");
var errorPasswordRegister = document.querySelector(
  "#form-register .error-pass"
);
var errorNameRegister = document.querySelector("#form-register .error-name");

// check email
inputEmailRegister.oninput = function () {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  errorEmailRegister.innerText = "Email không hợp lệ";

  if (regex.test(inputEmailRegister.value)) {
    errorEmailRegister.innerText = "";
    if (passwordRegister.value === "") {
      errorPasswordRegister.innerText = "Password không hợp lệ";
    }
  } else {
    errorEmailRegister.innerText = "Email không hợp lệ";
    errorPasswordRegister.innerText = "Password không hợp lệ";
    errorNameRegister.innerText = "Vui lòng nhập thông tin";
  }

  if (inputEmailRegister.value === "") {
    errorEmailRegister.innerText = "Vui lòng nhập thông tin";
  }

  if (inputEmailRegister.value === "" && passwordRegister.value) {
    errorPasswordRegister.innerText = "";
  }

  if (inputEmailRegister.value === "" && nameRegister.value) {
    errorPasswordRegister.innerText = "";
  }

  if (
    nameRegister.value &&
    passwordRegister.value &&
    inputEmailRegister.value
  ) {
    errorPasswordRegister.innerText = "";
    errorNameRegister.innerText = "";
  }

  if (inputEmailRegister.value && nameRegister.value) {
    errorNameRegister.innerText = "";
  }
};

//pass check
passwordRegister.oninput = function () {
  if (!inputEmailRegister.value) {
    errorPasswordRegister.innerText = "Password không hợp lệ";
  } else {
    errorPasswordRegister.innerText = "";
  }
  if (passwordRegister.value === "") {
    errorPasswordRegister.innerText = "Password không hợp lệ";
  }

  if (passwordRegister.value) {
    errorPasswordRegister.innerText = "";
    if (inputEmailRegister.value === "") {
      errorEmailRegister.innerText = "Email không hợp lệ";
    }
    if (inputFullNameRegister.value === "") {
      errorNameRegister.innerText = "Vui lòng nhập thông tin";
    }
  }
  if (passwordRegister.value.length === 0) {
    errorPasswordRegister.innerText = "Password không hợp lệ";
  }
};

//name check
nameRegister.oninput = function () {
  if (!nameRegister.value) {
    errorNameRegister.innerText = "Vui lòng nhập thông tin";
  } else {
    errorNameRegister.innerText = "";
  }
  if (nameRegister.value === "") {
    errorNameRegister.innerText = "Vui lòng nhập thông tin";
  }

  if (nameRegister.value) {
    errorNameRegister.innerText = "";
    if (inputEmailRegister.value === "") {
      errorEmailRegister.innerText = "Vui lòng nhập thông tin";
    }

    if (passwordRegister.value === "") {
      errorPasswordRegister.innerText = "Vui lòng nhập thông tin";
    }
  }
};

showPasswordRegister.addEventListener("click", function () {
  if (passwordRegister.type === "password") {
    passwordRegister.type = "text";
    hiddenShowRegister.classList.remove("fa-eye");
    hiddenShowRegister.classList.add("fa-eye-slash");
  } else {
    passwordRegister.type = "password";
    hiddenShowRegister.classList.remove("fa-eye-slash");
    hiddenShowRegister.classList.add("fa-eye");
  }
});

var email = document.querySelector("#form-register .email-input");
