var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

// Viết hàm getError(field) có tham số truyền vào là field tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là lỗi đầu tiên của 1 nhóm

function getError(field) {
  var result = "";
  if (errors[field] === undefined) {
    result = "Không có lỗi đâu Lêu Lêu !";
  }
  if (errors[field]) {
    result = Object.values(errors[field])[0];
  }
  return result;
}

console.log(getError("hello"));

// bài 2

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var Customer = function (name, age, address) {
  var current = this;
  current.name = name;
  current.age = age;
  current.address = address;
};

function createCustomers(customers) {
  var newArr = customers.sort(function (a, b) {
    if (a.age < b.age) {
      return -1;
    }
  });

  var result = newArr.map(function (users) {
    var firtName = users.name.slice(0, users.name.indexOf(" "));
    var lastName = users.name.slice(users.name.lastIndexOf(" ") + 1);
    var newCustomer = new Customer(users.name, users.age, users.address);
    newCustomer.shortName = `${firtName} ${lastName}`;
    return newCustomer;
  });
  return result;
}

console.log(createCustomers(customers));

// Bài 3
var User = function (name, password, email) {
  var current = this;
  current.name = name;
  current.password = password;
  current.email = email;
};
var data = [];
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng nhập đầy đủ thông tin ♥");
    return;
  }
  var userCheck = data.find(function (user) {
    return user["email"] === email;
  });
  if (userCheck) {
    console.log("Email đã có người sử dụng ♥");
    return;
  } else {
    var newUser = new User(name, password, email);
    newUser.role = "user";
    data.push(newUser);
    console.log("Đăng ký thành công ♥");
    return newUser;
  }
}

function handleLogin(email, password) {
  for (var check of data) {
    if (check["email"] === email && check["password"] === password) {
      console.log("Đăng nhập thành công ♥");
      return check;
    } else if (check["email"] !== email) {
      return "Email không tồn tại";
    } else if (check["password"] !== password) {
      return "Mật khẩu không đúng";
    } else {
      return "Thông tin đăng nhập bị không hợp lệ";
    }
  }
}

handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "123456", "nguyenvanb@email.com");
handleRegister("Nguyen Van B", "123456", "nguyenvanb@email.com");
handleRegister("ThTrueMilk", "123456");
console.log(data);
console.log(handleLogin("nguyenvana@email.com", "123456"));
