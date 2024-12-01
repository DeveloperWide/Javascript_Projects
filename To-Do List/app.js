const input = document.querySelector("input");
const btn = document.getElementById("add-btn");
const tasks = ["Code", "Eat", "Sleep"];

function addTask() {
  let inpVal = input.value;
  if (inpVal.length === 0) {
    console.log(`Input is Null`);
  } else {
    tasks.push(inpVal);
    console.log(tasks);
  }
}

btn.addEventListener("click", () => {
  console.log(`Button Clicked`);
  addTask(); // Call the addTask function to add the task
});
