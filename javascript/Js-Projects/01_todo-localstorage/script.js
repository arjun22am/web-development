document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input"); // Fetching the elements through Ids
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("values")) || []; // Empty array for storing the tasks

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
    todoInput.value = ""; // after doing everthing making todoInput empty again
    console.log(tasks);
  });

  function renderTasks(task) {
    console.log(task);
  }

  function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
