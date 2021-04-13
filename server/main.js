// Require
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');

// Variables
const app = express();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

// Use CORS
app.use(cors);

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

// Controllers
fs.readdirSync('./controllers')
  .filter((file) => file.endsWith('.js'))
  .map((file) => file.slice(0, -3))
  .forEach((file) => {
    app.post(`/${file}`, require(`./controllers/${file}`));
  });

// Other requests
app.get('*', (req, res) => {
  res.status(404).json({});
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
