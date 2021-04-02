// Require
const express = require('express');
const mongoose = require('mongoose');

// Controller
const path = './controllers/';
const controller = {
  addInfo: require(path + 'addInfo'),
  createPost: require(path + 'createPost'),
  login: require(path + 'login'),
  register: require(path + 'register'),
  verify: require(path + 'verify'),
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
