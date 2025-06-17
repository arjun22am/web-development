document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input"); // Fetching the elements through Ids
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Empty array for storing the tasks

  tasks.forEach((task) => {
    renderTasks(task);
  });

  // adding a event to what to do when the addtaskbutton will be clicked
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); //storing the value from todoInput to taskText and also removing extra spaces if user enters

    if (taskText === "") return; // if taskText is null don't return anything

    const newtask = {
      //storing the tasks in newtask
      id: Date.now(),
      task: taskText,
      completed: false,
    };

    tasks.push(newtask);
    savetasks(); //appending them to tasks array
    renderTasks(newtask);
    todoInput.value = ""; // after doing everthing making todoInput empty again
    console.log(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("completed");
    }
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.task} </span>
    <button>delete</button>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.id !== task.id;
      li.classList.toggle("completed");
      savetasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      // e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id); // tasks = [1, 2, 3] => 3 !== 2
      li.remove();
      savetasks();
    });

    todoList.appendChild(li);
  }

  function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
