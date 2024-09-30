const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/user');
let {todos} = require('../db/index')
let todoId = 1;
router.post('/setTodo',authMiddleware.auth,(req,res)=>{
    let title = req.body.title;
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = {
        id: todoId,
        title,
        isCompleted: false
    };
    todos.push(newTodo); 
    todoId++;
    res.json({ message: "Todo successfully added", todos });
})

router.put('/changeTodo/',authMiddleware.auth,(req,res)=>{
    let changeTodoId = parseInt(req.query.id);
    let todo = todos.find((todo)=> todo.id===changeTodoId);
    if(todo)
    {
        todo.title = req.body.title;
        res.json(todos);
    }
    else{
        res.status(404).json({
            message : "Todo Not found."
        })
    }
})
router.put('/markDone/',authMiddleware.auth,(req,res)=>{
    let changeTodoId = parseInt(req.query.id);
    let todo = todos.find((todo)=> todo.id===changeTodoId);
    if(todo){
        if(todo.isCompleted===true)
        {
            todo.isCompleted = false
        }
        else{
            todo.isCompleted = true
        }
        res.json({
            todos
        })
    }else{
        res.status(404).json({
            message : "Todo Status Not Changed."
        })
    }
})

router.delete('/deleteTodo/',authMiddleware.auth,(req,res)=>{
    let deleteTodoId = parseInt(req.query.id);
    let idx = todos.findIndex((todo)=>todo.id===deleteTodoId);
    if(idx!==-1)
    {
        todos.splice(idx,1);
        res.json(todos);
    }else {
        res.status(404).json({ message: "Todo not found" });
    }
    
})

router.get("/showTodos",authMiddleware.auth,(req, res) => {
  const username = req.username;
  if (username) {
    res.json(todos);
  }
}); 

module.exports = router;
