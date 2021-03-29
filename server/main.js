// Require
const express = require('express');
const mongoose = require('mongoose');

// Schema
require('./schemas/Chatroom');
require('./schemas/Client');
require('./schemas/Comment');
require('./schemas/Message');
require('./schemas/Post');
require('./schemas/Token');

// Models
const Chatroom = mongoose.model('chatroom');
const Client = mongoose.model('client');
const Comment = mongoose.model('comment');
const Message = mongoose.model('message');
const Post = mongoose.model('post');
const Token = mongoose.model('token');

// Controller
const controller = {
  register: require('./controllers/register'),
  verify: require('./controllers/verify'),
};

// Variables
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

// Use express JSON
app.use(express.json());

// Mongoose setup
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// Main site
app.get('/', (req, res) => {
  Chatroom.find({}).then((data) => {
    res.send(data);
  });
  Client.find({}).then((data) => {
    res.send(data);
  });
  Comment.find({}).then((data) => {
    res.send(data);
  });
  Message.find({}).then((data) => {
    res.send(data);
  });
  Post.find({}).then((data) => {
    res.send(data);
  });
  Token.find({}).then((data) => {
    res.send(data);
  });
});

// Register
app.post('/register', controller.register);

// Verification link
app.get('/verify/:token', controller.verify);

// Other requests
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
