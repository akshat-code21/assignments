console.log("hi from todos.script.js");

let token = localStorage.getItem("token");
let todoArrayC = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (!token) {
    window.location.href = "404.html";
  } else {
    showTodos();
  }
});

async function showTodos() {
  try {
    let response = await axios.get("http://localhost:3000/todo/showTodos", {
      headers: {
        token: token,
      },
    });
    let todos = response.data;
    let parent = document.getElementById("todos");
    parent.innerHTML = "";
    todos.forEach((todo, index) => {
      let todoId = todo.id;  

      let child = document.createElement("div");
      child.classList.add("todo");

      let todoTitle = document.createElement("h2");
      todoTitle.setAttribute("id", `todo-title-${todoId}`); 
      todoTitle.innerHTML = todo.title;

      let task_no = document.createElement("h4");
      task_no.innerHTML = `Task no. : ${index + 1}`;

      let statusDiv = document.createElement("div");
      statusDiv.classList.add("status");
      if(todo.isCompleted===false){
      statusDiv.innerHTML = "In progress...";
      statusDiv.style.backgroundColor = "red";
      }
      else{
        statusDiv.innerHTML = "Completed";
        statusDiv.style.backgroundColor = "green";
      }
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;

      let date_created = document.createElement("h5");
      date_created.innerHTML = `Date Created : ${currentDate}`;

      let ops = document.createElement("div");
      ops.classList.add("operations");
      ops.innerHTML = `
        <button class='done' onclick='changeStatus(${todoId})'>Mark Done</button>
        <button class='edit' onclick='editTodo(${todoId})'>Edit</button>
        <button class='delete' onclick='deleteTodo(${todoId})'>Delete</button>`;

      child.appendChild(todoTitle);
      child.appendChild(task_no);
      child.appendChild(statusDiv);
      child.appendChild(date_created);
      child.appendChild(ops);

      parent.appendChild(child);
    });
  } catch (err) {
    console.error("Error fetching todos:", err);
    return;
  }
}

async function editTodo(id) {
  
  let todoTitleElement = document.getElementById(`todo-title-${id}`);
  
  
  let originalTitle = todoTitleElement.innerHTML;
  
 
  todoTitleElement.innerHTML = `
    <input type="text" id="edit-input-${id}" value="${originalTitle}">
    <button onclick="saveTodoEdit(${id})">Save</button>
    <button onclick="cancelTodoEdit(${id}, '${originalTitle}')">Cancel</button>
  `;
}

async function saveTodoEdit(id) {
  let editedTitle = document.getElementById(`edit-input-${id}`).value;

  try {
    let res = await axios.put(
      `http://localhost:3000/todo/changeTodo/?id=${id}`,
      { title: editedTitle },
      {
        headers: {
          token: token,
        },
      }
    );

    if (res) {
      alert("Todo updated successfully");
      showTodos(); 
    }
  } catch (err) {
    console.error("Error updating todo:", err);
  }
}

function cancelTodoEdit(id, originalTitle) {
 
  let todoTitleElement = document.getElementById(`todo-title-${id}`);
  todoTitleElement.innerHTML = originalTitle;
}

async function changeStatus(id){
  try
  {
    let todotoBeMarked = await axios.put(`http://localhost:3000/todo/markDone/?id=${id}`,{}, {
      headers: {
        token: token,
      },
    });
    if(todotoBeMarked)
    {
      showTodos()
    }
  }
  catch(err)
  {
    console.error(err)
  }
}
async function deleteTodo(id) {
  try {
    let todotoBeDeleted = await axios.delete(`http://localhost:3000/todo/deleteTodo/?id=${id}`,{
      headers: {
        token: token,
      },
    });
    showTodos();
  } catch (err) {
    console.error("Error deleting todo:", err);
  }
}

async function addTodo() {
  let task = document.getElementById("addTodo").value;
  try {
    let res = await axios.post(
      "http://localhost:3000/todo/setTodo",
      {
        title: task.toString(),
      },
      {
        headers: {
          token: token,
        },
      }
    );

    if (res) {
      alert("Todo added successfully");
      document.getElementById("addTodo").value = "";
      showTodos();
    } else {
      console.log("Error adding todo.");
    }
  } catch (err) {
    console.error("Error adding todo:", err);
  }
}
