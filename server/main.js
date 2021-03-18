// Require
const express = require('express');
const mongoose = require('mongoose');
const { sendEmail } = require('./email');

const Chatroom = require('./schemas/Chatroom');
const Client = require('./schemas/Client');
const Comment = require('./schemas/Comment');
const Message = require('./schemas/Message');
const Post = require('./schemas/Post');
const Register = require('./schemas/Register');

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
  Register.find({}).then((data) => {
    res.send(data);
  });
});

// Create email
app.post('/createEmail', (req, res) => {
  sendEmail(req.body.email)
    .then(() => res.send('Email sent'))
    .catch((err) => console.log(err));
});

// Create client
app.post('/createClient', (req, res) => {
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

// Read client
// app.post('/readClient', (req, res) => {});

// Update client
app.post('/updateClient', (req, res) => {
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

// Delete client
app.post('/deleteClient', (req, res) => {
  Client.findByIdAndRemove(req.body.id).then((data) => {
    console.log(data);
    res.send('Data deleted');
  });
});

// Other requests
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
