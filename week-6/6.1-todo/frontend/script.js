const API_URL = "http://localhost:3000/todos";

// Fetch existing todos when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchTodos();
});

// Fetch todos from backend
async function fetchTodos() {
  let response = await fetch(API_URL, {
    method: "GET",
  });
  let data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let putData = data[i];
    let ul = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.innerHTML = `${putData.id} : ${putData.title}`;
    ul.appendChild(li);
  }
}

// Add a new todo to the DOM
async function addTodoToDOM() {
  let inputTask = document.getElementById("todo-input").value;

  if (!inputTask) {
    console.log("Please enter a task");
    return;
  }

  try {
    let res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputTask,
      }),
    });

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`Failed to add todo: ${res.statusText}`);
    }

    let data = await res.json();
    console.log("Todo added:", data);

    // Update the DOM with the new todo
    addDOM(data);
  } catch (error) {
    console.error("Error during todo creation:", error);
    alert("Error adding todo. Please try again.");
  }
}

function addDOM(data) {
  if (!data || !data.id || !data.title) {
    console.error("Invalid data received:", data);
    return;
  }

  // Clear the input field
  document.getElementById("todo-input").value = "";

  // Create new list item for the todo
  let ul = document.getElementById("todo-list");
  let li = document.createElement("li");

  li.innerHTML = `${data.id} : ${data.title}`;
  ul.appendChild(li);
}

// Toggle todo completion
function toggleTodo(id, completed) {
  //    write here
}

// Delete a todo
function deleteTodo(id) {
  // write here
}
