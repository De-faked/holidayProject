const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

function addItem() {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `<span class="todo-item">${todoInput.value}</span>`; 
    todoList.appendChild(newTodo);
    todoInput.value = "";
}