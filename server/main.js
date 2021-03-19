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

// Send email
/* app.post('/sendEmail', async (req, res) => {
  console.log(`Attempt to send email to ${req.body.email}`);
  Transporter.sendMail(
    {
      from: `csci3100cuthere@gmail.com`,
      to: req.body.email,
      subject: `Confirmation email for ${req.body.username}`,
      text: emailContext.text(req.body.code),
      html: emailContext.html(req.body.code),
    },
    (err, info) => {
      if (err) {
        return console.log(err);
      }
      res.send({ message: 'Email sent', message_id: info.messageId });
      return res;
    }
  );
}); */

// Create client
/* app.post('/createClient', (req, res) => {
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
}); */

// Create register
/* app.post('/createRegister', (req, res) => {
  const register = new Register({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    code: req.body.code,
  });
  register
    .save()
    .then((data) => {
      console.log(data);
      res.send('Register data created');
    })
    .catch((err) => console.log(err));
}); */

// Read client
/* app.get('/readClient', (req, res) => {
  Client.findById(req.body.id).then((data) => {
    console.log(data);
    res.send('Client data found');
  });
}); */

// Read register
/* app.get('/readRegister', (req, res) => {
  Client.findOne({ email: req.body.email }).then((savedUser) => {
    if (savedUser) {
      res.status(422).json({ error: 'This email has been registered' });
    } else {
      res.send(savedUser);
    }
  });
}); */

// Update client
/* app.post('/updateClient', (req, res) => {
  Client.findByIdAndUpdate(req.body.id, {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
    .then((data) => {
      console.log(data);
      res.send({ message: 'Data updated' });
    })
    .catch((err) => console.log(err));
}); */

// Delete client
/* app.post('/deleteClient', (req, res) => {
  Client.findByIdAndRemove(req.body.id).then((data) => {
    console.log(data);
    res.send({ message: 'Data deleted' });
  });
}); */

// Other requests
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Listen to port
app.listen(port, () => {
  console.log('Server is running');
});
