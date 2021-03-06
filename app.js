const todo = document.querySelector("#todo-list");
const input = document.querySelector("#input");
const newTodo = document.querySelector("#newtodo");


if (localStorage.tasks) { // load in existing HTML that was in storage, if it exists
    todo.innerHTML = localStorage.tasks;
}

todo.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // if click on task, mark as done and update storage
        e.target.classList.toggle("done");
        localStorage.setItem("tasks", todo.innerHTML);
    } else if (e.target.tagName === "BUTTON") { // if click on button, remove parent and update storage
        e.target.parentElement.remove();
        localStorage.setItem("tasks", todo.innerHTML);
    }
})

input.addEventListener("submit", function(e) {
    e.preventDefault();
    let newTask = createNewTodoElement(newTodo.value);
    todo.prepend(newTask); // add new task when submit is clicked and then update storage
    localStorage.setItem("tasks", todo.innerHTML);
    newTodo.value = '';
})

function createNewTodoElement(text) {
    let newLi = document.createElement("li"); // create list item
    newLi.innerText = text;
    let newBtn = document.createElement("button"); // add remove button
    newBtn.innerHTML = "&#10006;";
    newLi.append(newBtn);
    return newLi;
}
