// start writing from here
const express = require('express')
const path = require('path');
const app = express();
var cors = require('cors')
require('dotenv').config()
const userRoute = require('./routes/user');
const todoRoute = require('./routes/todo');
const {users} = require('./db/index')
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/admin/users',(req,res)=>{
    res.json(users)
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})
app.use('/user',userRoute);
app.use('/todo',todoRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
