const urlApi = "https://cpszqh-8080.csb.app/todolist";
const getTodoList = async () => {
  const res = await fetch(urlApi);
  const todoList = await res.json();
  return todoList;
};

const postTodoList = async (data) => {
  const res = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    console.log("Thêm thành công");
  }

  return res.json();
};

const deleteTodoList = async (id) => {
  const res = await fetch(`${urlApi}/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    console.log("Xóa thành công");
  }
  return res.json();
};

const updateTodoList = async (id, data) => {
  const res = await fetch(`${urlApi}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    console.log("Cập nhật thành công");
  }
  return res.json();
};

const listItem = document.querySelector(".list-item");
const listItemCompleted = document.querySelector(".list-item-completed");
const addTodoBtn = document.querySelector(".add-todo");
const todoCheck = document.querySelector(".add-todo-check");
const cancelBtn = document.querySelector(".cancel-btn");
const saveBtn = document.querySelector(".save-btn");
console.log(todoCheck);

//Render todo
async function render() {
  const todoList = await getTodoList();
  const todoListCompleted = todoList.filter((todo) => todo.isCompleted);
  const todoListUnCompleted = todoList.filter((todo) => !todo.isCompleted);

  const htmlUnCompleted = todoListUnCompleted
    .map((todo) => {
      return `
    <div class="todo-item">
    <span class="todo-name">${todo.name}</span>
    <div class="todo-action">
            <button class="todo-action-item remove-btn">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="todo-action-item edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="todo-action-item complete-btn">
                <i class="fa-solid fa-check"></i>
            </button>
        </div>
    `;
    })
    .join("");

  const htmlCompleted = todoListCompleted
    .map((todo) => {
      return `
    <div class="todo-item">
    <span class="todo-name">${todo.name}</span>
    <div class="todo-action">
            <button class="todo-action-item remove-btn">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="todo-action-item edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="todo-action-item complete-btn">
                <i class="fa-solid fa-check"></i>
            </button>
        </div>
    `;
    })
    .join("");

  listItem.innerHTML = htmlUnCompleted;
  listItemCompleted.innerHTML = htmlCompleted;


}

//Add todo

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoCheck.classList.toggle("hiden");
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoCheck.classList.toggle("hiden");
});

saveBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const todoValue = todoCheck.querySelector(".add-todo-input").value;
  const todo = {
    name: todoValue,
    isCompleted: false,
  };
  if (todoValue) {
    todo.name = todoValue;
  } else {
    alert("Vui lòng nhập tên công việc");
    return;
  }
  //   console.log(todo);
  await postTodoList(todo);
  todoCheck.classList.toggle("hiden");
  todoCheck.querySelector(".add-todo-input").value = "";
  render();
});

//Delete todo
function deleteTodo() {
  const removeBtnUN = listItemCompleted.querySelectorAll(".remove-btn");
  const removeBtnC = listItem.querySelectorAll(".remove-btn");

  removeBtnUN.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const todo = await getTodoList();
      const todoId = todo.find((todo) => todo.id === btn.id);
      await deleteTodoList(todoId.id);
      render();

    });
  });

  removeBtnC.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const todo = await getTodoList();
      const todoId = todo.find((todo) => todo.id === btn.id);
      await deleteTodoList(todoId.id);
      render();
    });
  });
}

