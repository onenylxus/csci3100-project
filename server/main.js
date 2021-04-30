/**
 * CU There Team
 * @component main - To main modules that handle all stuffs related to server side
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * PURPOSE: This module provides a port to listen all server request and give response
 */

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
app.use(cors({ origin: '*' }));

// Use express JSON
app.use(express.json({ limit: '10mb' }));

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
