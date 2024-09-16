//  start writing your code from here
const express = require("express");
const router = express.Router();
const { users } = require('../db/index');
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../middleware/user");

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }
  users.push({
    username,
    password,
  });
  res.json({
    message: "User successfully signed up.",
  });
});

router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = users.find((user) => user.username === username);
  if (foundUser) {
    let token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      message: "You are successfully signed in",
      token: token,
    });
  } else {
    res.json({
      message: "Not a user.Sign up",
    });
  }
});

module.exports = router;
