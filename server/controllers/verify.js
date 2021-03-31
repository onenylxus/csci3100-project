// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Export
module.exports = function verify(req, res) {
  // Get token
  const { token } = req.params;

  // Find token
  Token.exists({ token }).then((err, bool) => {
    if (err) {
      console.log(err);
    } else if (!bool) {
      return res.status(422).send({ msg: 'Token not found.' });
    }
  });

  // Get token
  Token.findOne({ token }).then((data) => {
    // Create client
    const client = new Client({
      username: data.username,
      password: data.password,
      email: data.email,
    });
    client.save();

    // Remove token
    data.remove();

    // Return
    return res.status(200).send({ msg: 'Client created.' });
  });
};
