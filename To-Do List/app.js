const input = document.querySelector("input");
const btn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Initialize tasks with completion state
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTask() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskText = document.createElement("span");
    taskText.innerText = task.text;
    if (task.completed) {
      taskText.style.textDecoration = "line-through";
    }

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("complete");
    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveToLocalStorage();
      displayTask();
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", () => {
      const newTask = prompt("Edit The Task:", task.text);
      if (newTask) {
        task.text = newTask;
        saveToLocalStorage();
        displayTask();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveToLocalStorage();
      displayTask();
    });

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
  });
}

function addTask() {
  const newTask = input.value.trim();
  if (newTask) {
    tasks.push({ text: newTask, completed: false });
    saveToLocalStorage();
    input.value = "";
    displayTask();
  }
}

btn.addEventListener("click", addTask);
displayTask();
