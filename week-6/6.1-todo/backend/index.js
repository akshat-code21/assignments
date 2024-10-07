const express = require('express');
const cors = require('cors');
const path = require('path');
const { getAllTodo, createTodo, updateTodo, deleteTodoById } = require('./routes/todo'); // importing callback functions for routes
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));
// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Update a todo
app.put('/todos/:id', updateTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodoById);


// TODO: can you implement search todo route ???

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
