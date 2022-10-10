const taskArea = document.getElementById("task-container");
const taskContainer = document.getElementById("text");

const add = document.getElementById("addTask");
console.log(add);
add.addEventListener("click", () => {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerHTML = `${taskContainer.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class='fa-solid fa-check'></i>`;
  checkButton.classList.add("check");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class='fa-solid fa-trash-can'></i>`;
  deleteButton.classList.add("delete");
  task.appendChild(deleteButton);

  if (taskContainer.value === "") {
    alert("You haven't Enter a task");
  } else {
    taskArea.appendChild(task);
  }
  taskContainer.value = "";

  checkButton.addEventListener("click", () => {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", (e) => {
    let target = e.target;
    target.parentElement.remove();
  });
});
