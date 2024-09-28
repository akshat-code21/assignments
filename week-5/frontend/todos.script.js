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
      let child = document.createElement("div");
      child.classList.add("todo");

      let todoTitle = document.createElement("h2");
      todoTitle.innerHTML = todo.title;

      let task_no = document.createElement("h4");
      task_no.innerHTML = `Task no. : ${index + 1}`;

      let statusDiv = document.createElement("div");
      statusDiv.classList.add("status");
      statusDiv.innerHTML = "In progress...";
      statusDiv.style.backgroundColor = "red"; 

      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
    

      let date_created = document.createElement("h5");
      date_created.innerHTML = `Date Created : ${currentDate}`;

      let ops = document.createElement("div");
      ops.classList.add("operations");
      ops.innerHTML =
        "<button class='done'>Mark Done</button><button class='edit'>Edit</button><button class='delete'>Delete</button>";

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
      document.getElementById("addTodo").value = ""
      showTodos();
    } else {
      console.log("Error adding todo.");
    }
  } catch (err) {
    console.error("Error adding todo:", err);
  }
}
