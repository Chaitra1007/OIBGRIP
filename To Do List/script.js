const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task.");
  } else {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    const removeButton = document.createElement("button");
    taskText.textContent = task;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(taskText);
    li.appendChild(removeButton);
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});
