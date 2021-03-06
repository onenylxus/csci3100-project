// Require
const express = require('express');
const mongoose = require('mongoose');

// Schema calls
require('./Client');

const Client = mongoose.model('client');

// Variables
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

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
  Client.find({}).then((data) => {
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
