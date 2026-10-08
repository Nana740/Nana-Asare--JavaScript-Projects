// Find the elements we need
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// Load saved tasks from localStorage (or start with an empty list)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save the current tasks array to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Draw every task on the page
function renderTasks() {
  taskList.innerHTML = ""; // clear the list first

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    // The task text: click it to toggle completed
    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // The Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1); // remove this task from the array
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return; // ignore empty input

  tasks.push({ text: text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
}

// Listen for events
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

// Show any saved tasks when the page first loads
renderTasks();