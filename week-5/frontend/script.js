// Import axios if needed
// const axios = require("axios");
console.log("hi from script");

async function signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter your details");
    return;
  }

  try {
    let res = await axios.post("http://localhost:3000/user/signup", {
      username: username.toString(),
      password: password.toString(),
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    if (res) {
      alert("Signed up successfully.");
    }
  } catch (error) {
    alert(error);
  }
  username = "";
  password = "";
}

async function login() {
  let username = document.getElementById("signin_username").value;
  let password = document.getElementById("signin_password").value;

  if (username === "" || password === "") {
    alert("Please enter your login details");
    return;
  }

  try {
    let res = await axios.post("http://localhost:3000/user/signin", {
      username: username,
      password: password,
    });
    document.getElementById("signin_username").value = "";
    document.getElementById("signin_password").value = "";
    if (res.data && res.data.token) {
      alert("Logged in successfully");
      localStorage.setItem("token", res.data.token);
      setTimeout(sendToTodoPage, 2000);
    } else {
      alert(res.data.message || "Login failed");
    }
  } catch (error) {
    alert(error);
  }
}

function sendToTodoPage() {
  window.location.href = "todos.html";
}
