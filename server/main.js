// Require
const express = require('express');
const mongoose = require('mongoose');

// Controller
const controller = {
  addInfo: require('./controllers/addInfo'),
  createPost: require('./controllers/createPost'),
  fetchPost: require('./controllers/fetchPost'),
  fetchLikeAndDislike: require('./controllers/fetchLikeAndDislike'),
  editProfile: require('./controllers/editProfile'),
  fetchData: require('./controllers/fetchData'),
  forgotPassword: require('./controllers/forgotPassword'),
  login: require('./controllers/login'),
  like: require('./controllers/like'),
  register: require('./controllers/register'),
  resetPassword: require('./controllers/resetPassword'),
  verify: require('./controllers/verify'),
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

// Fetch post
app.post('/fetchPost', controller.fetchPost);

// Fetch like and dislike
app.post('/fetchLikeAndDislike', controller.fetchLikeAndDislike);

// Like post
app.post('/like', controller.likee);

// Edit profile
app.post('/editProfile', controller.editProfile);

// Fetch data
app.post('/fetchData', controller.fetchData);

// Forgot password
app.post('/forgotPassword', controller.forgotPassword);

// Login
app.post('/login', controller.login);

// Register
app.post('/register', controller.register);

// Reset password
app.post('/resetPassword', controller.resetPassword);

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
