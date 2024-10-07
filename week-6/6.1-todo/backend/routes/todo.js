let todos = []; 
let todoId = 1;
async function getAllTodo(req, res, next) {
  res.json(todos);
  next();
}

async function createTodo(req, res, next) {
    console.log("Incoming request to add todo:", req.body);

    let title = req.body.title;
    if (!title) {
        res.status(400).json({ error: "Title is required" });
        return;
    }

    let newTodo = {
        id: todoId,
        title: title
    };
    todos.push(newTodo);
    todoId++;  // Increment the ID for the next todo

    console.log("New todo created:", newTodo);
    res.json(newTodo);  // Send back the newly created todo
    next();
}

async function updateTodo(req, res, next) {
  let changeId = parseInt(req.params.id);
  let title = req.body.title;
  let todo = todos.find((todo) => todo.id === changeId);
  if (todo) {
    todo.title = title;
    next();
  }
}

async function deleteTodoById(req, res, next) {
  let deleteId = parseInt(req.params.id);
  let todo = todos.find((todo) => todo.id === deleteId);
  if (todo) {
    todos.splice(deleteId - 1, 1);
    next();
  }
}
module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodoById,
};
