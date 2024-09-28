// start writing from here
const express = require('express')
const app = express();
require('dotenv').config()
const userRoute = require('./routes/user');
const todoRoute = require('./routes/todo');

app.use(express.json());
app.use('/user',userRoute);
app.use('/todo',todoRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
