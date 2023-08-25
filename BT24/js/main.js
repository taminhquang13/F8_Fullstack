var todoForm = document.querySelector(".todo-form");
var todoInput = document.querySelector(".task-input");
var todoList = document.querySelector(".todo-list");

function newHtml(valueInput) {
  return `
    <div class="todo-item">
      <p>${valueInput}</p>
      <div class="icon-btn">
        <i class="fa-solid fa-pen-to-square edit-todo"></i>
        <i class="fa-solid fa-trash remove-todo"></i>
      </div>
    </div>
  `;
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value) {
    todoList.innerHTML += newHtml(todoInput.value);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-todo")) {
    e.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("edit-todo")) {
    var html = `<form class="todo-form">
    <input
      type="text"
      name="task"
      placeholder="What is the task today?"
      class="task-input"
    />
    <button type="submit" class="btn">Add Task</button>
  </form>`;
    var newInput = e.target.parentElement.parentElement;
    // console.log(newInput);
    var newValue = e.target.parentElement.previousElementSibling.textContent;
    // console.log(newValue);
    newInput.insertAdjacentHTML("beforebegin", html);
    newInput.parentElement.querySelector(".task-input").value = newValue;
    // console.log(newInput.parentElement.querySelector(".task-input"));
    newInput.remove();
  }
  if (e.target.classList.contains("btn")) {
    var submit = e.target.parentElement;
    var value = e.target.parentElement.querySelector(".task-input").value;
    var html = newHtml(value);
    submit.insertAdjacentHTML("beforebegin", html);
    submit.remove();
  }
});
