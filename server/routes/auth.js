
const express = require('express');
const authRouter = express.Router();

//Import jsonwebtoken
const jwt = require('jsonwebtoken');

//Import User model
const User = require('../models/user');


/* GET home page. */
authRouter.get('/signup', (req, res, next) => {

  res.send(`<h1>signup</h1>
            <a href='/auth/login'>login</a>
            <a href='/'>index</a>
  `);
});

authRouter.post('/signup', (req, res, next) => {
  let { email, password } = req.body;

  User.create({email, password})
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
});

authRouter.get('/login', (req, res, next) => {
  res.send(`<h1>login</h1>
            <a href='/'>index</a>
            <a href='/auth/signup'>signup</a>
  `);
});

authRouter.post('/login', (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email })
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});
module.exports = authRouter;