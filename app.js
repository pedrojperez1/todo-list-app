const todo = document.querySelector("#todo-list");
const input = document.querySelector("#input");
const newTodo = document.querySelector("#newtodo");


if (localStorage.tasks) { // load in existing HTML that was in storage, if it exists
    todo.innerHTML = localStorage.tasks;
}

todo.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // if click on task, mark as done and update storage
        e.target.classList.toggle("done");
        updateStorage();
    } else if (e.target.tagName === "BUTTON") { // if click on button, remove parent and update storage
        e.target.parentElement.remove();
        updateStorage();
    }
})

input.addEventListener("submit", function(e) {
    e.preventDefault();
    let newTask = createNewTodoElement(newTodo.value);
    todo.prepend(newTask); // add new task when submit is clicked and then update storage
    updateStorage(); 
    newTodo.value = '';
})

function createNewTodoElement(text) {
    let newLi = document.createElement("li"); // create list item
    newLi.innerText = text;
    let newBtn = document.createElement("button"); // add remove button
    newBtn.innerText = "Remove";
    newLi.append(newBtn);
    return newLi;
}


function updateStorage() {
    localStorage.setItem("tasks", todo.innerHTML);
}