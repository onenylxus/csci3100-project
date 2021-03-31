// Require
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

// Controller
const controller = {};
fs.readdirSync('./controllers')
  .endsWith('.js')
  .forEach((ctrl) => {
    // eslint-disable-next-line import/no-dynamic-require
    controller[ctrl.slice(-3)] = require(`./controllers/${ctrl}`);
  });

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

// Register
app.post('/register', controller.register);

// Verification link
app.post('/verify', controller.verify);

// Add Info-form
app.post('/addInfo', controller.addInfo);

// Other requests
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
