// Require
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Controller
const use = (filename) => require(path.join('./controllers', filename));
const controller = {
  addInfo: use('addInfo'),
  createPost: use('createPost'),
  forgotPassword: use('forgotPassword'),
  login: use('login'),
  register: use('register'),
  verify: use('verify'),
};

// Variables
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

// Use express JSON
app.use(express.json());

// Mongoose setup
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// Main site
app.get('/', (req, res) => {
  res.send('CU There');
});

// Add Info-form
app.post('/addInfo', controller.addInfo);

// Create post
app.post('/createPost', controller.createPost);

// Forgot password
app.post('/forgotPassword', controller.forgotPassword);

// Reset password
app.post('/resetPassword', controller.resetPassword);

// Login
app.post('/login', controller.login);

// Register
app.post('/register', controller.register);

// Verification link
app.post('/verify', controller.verify);

// Other requests
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
