// Require
const express = require('express');
const mongoose = require('mongoose');

const ChatroomSchema = require('./Chatroom');
const ClientSchema = require('./Client');
const CommentSchema = require('./Comment');
const MessageSchema = require('./Message');
const PostSchema = require('./Post');

// Variables
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

// Schema settings
const Chatroom = mongoose.model('chatroom', ChatroomSchema, 'chatrooms');
const Client = mongoose.model('client', ClientSchema, 'clients');
const Comment = mongoose.model('comment', CommentSchema, 'comments');
const Message = mongoose.model('message', MessageSchema, 'messages');
const Post = mongoose.model('post', PostSchema, 'posts');

// Use body parser
app.use(express.json());

// Mongoose setup
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// Build express application
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
});

// Create
app.post('/create', (req, res) => {
  console.log(req.body);
  const client = new Client({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  client
    .save()
    .then((data) => {
      console.log(data);
      res.send('Data created');
    })
    .catch((err) => console.log(err));
});

// Read
// app.post('/read', (req, res) => {});

// Update
app.post('/update', (req, res) => {
  Client.findByIdAndUpdate(req.body.id, {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
    .then((data) => {
      console.log(data);
      res.send('Data updated');
    })
    .catch((err) => console.log(err));
});

// Delete
app.post('/delete', (req, res) => {
  Client.findByIdAndRemove(req.body.id).then((data) => {
    console.log(data);
    res.send('Data deleted');
  });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
