document.addEventListener("DOMContentLoaded", () => {
  setDrag();
});

let addTaskBtns = document.querySelectorAll(".addTasks");
addTaskBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let task = prompt("Enter the task of the todo");
    let desc = prompt("Enter the desc of the todo");
    if (task === "" || desc === "") {
      alert("Please enter a task and description.");
      return;
    }

    let child = document.createElement("div");
    child.classList.add("todo");
    child.setAttribute("draggable", "true");

    let title = document.createElement("h2");
    title.innerHTML = task;

    let descHolder = document.createElement("h3");
    descHolder.innerHTML = desc;
    descHolder.classList.add("desc");

    child.appendChild(title);
    child.appendChild(descHolder);

    let container = btn.closest(".dropzone");
    if (container) {
      container.querySelector(".todos").appendChild(child);
    }

    setDrag();
  });
});

function setDrag() {
  let dragged;

  let todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    todo.addEventListener("dragstart", (e) => {
      dragged = e.target;
      e.target.classList.add("dragging");
    });

    todo.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  });

  let dropzones = document.querySelectorAll(".dropzone");
  dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    zone.addEventListener("dragenter", (e) => {
      e.preventDefault();
      if (zone.querySelector(".todos")) {
        zone.classList.add("dragover");
      }
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("dragover");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("dragover");

      let todosContainer = zone.querySelector(".todos");
      if (todosContainer && dragged) {
        todosContainer.appendChild(dragged);
        dragged = null;
      }
    });
  });
}
