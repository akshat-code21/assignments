// start writing from here
const express = require('express')
const app = express()
const userRoute = require('./routes/user');
const todoRoute = require('./routes/todo');

app.use(express.json());
app.use('/user',userRoute);
app.use('/todo',todoRoute);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
