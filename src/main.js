const token = localStorage.getItem("token");

// Se token não tiver valor...
if (!token) {
  window.location.href = "login.html";
}
// Separar ações em objetos

// Separar ações em objetos

let tasks = [{ name: "fazer prova de cpw" }, { name: "fazer prova de LP" }];

updateTasks();

function mountTask(task) {
  return (
    `<div id="task-${task.name}" class="container-task  is-medium">
    <input onClick="deleteTask('${task.name}')"type="checkbox" />
    <span class="name-task is-medium">${task.name}</span>` + "</div>"
  );
}

function writeTask(tasks) {
  document.getElementById("tasks").innerHTML = tasks;
}

function updateTasks(tasksFiltered) {
  let elements = "";
  const valueInput = document.getElementById("value-filter").value;

  order();

  if (valueInput !== "") {
    tasksFiltered.forEach((task) => {
      elements += mountTask(task);
    });
  } else {
    tasks.forEach((task) => {
      elements += mountTask(task);
    });
  }

  writeTask(elements);
}

window.add = () => {
  const input = document.getElementById("value");
  if (input.value !== "") {
    tasks.push({
      name: input.value,
    });

    updateTasks();
    input.value = "";
  }
};

window.deleteTask = (taskName) => {
  const index = tasks.findIndex((task) => {
    return task.name === taskName;
  });

  if (index > -1) {
    tasks.splice(index, 1);
  }

  document.getElementById(`task-${taskName}`).remove();
};

function order() {
  tasks.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
}

window.filterTask = () => {
  const valueInput = document.getElementById("value-filter").value;

  const todosFiltered = tasks.filter((currentTodo) =>
    currentTodo.name.toLowerCase().includes(valueInput)
  );
  updateTasks(todosFiltered);
};
