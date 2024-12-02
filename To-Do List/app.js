const input = document.querySelector("input");
const btn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const tasks = ["Code", "Eat", "Sleep"];

function displayTask() {
  taskList.innerHTML = ""; // Clear the task list

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Task Text
    const taskText = document.createElement("span");
    taskText.innerText = task;

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("complete");

    completeBtn.addEventListener("click", () => {
      taskText.style.textDecoration = "line-through";
    });

    //Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");

    editBtn.addEventListener("click", () => {
      const newTask = prompt("Edit The Task:", task);
      if (newTask) {
        tasks[index] = newTask;
        displayTask(); // Refresh the task list
      }
    });

    //Delete Button

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1); // Remove the Task
      displayTask(); // Refresh the task list
    });

    // Append Elements

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);
  });
}

//Function to add a new task
function addTask() {
  let inpVal = input.value.trim();
  if (inpVal.length === 0) {
    console.log(`Input is Null`);
  } else {
    tasks.push(inpVal);
    input.value = ""; // Clear the input field
    displayTask(); // Refresh the task list
  }
}

// Initial display of tasks
displayTask();

// Add task button click event
btn.addEventListener("click", addTask);
