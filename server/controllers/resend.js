// Require
const mongoose = require('mongoose');
const sender = require('../sender');

// Schemas
require('../schemas/token');

// Models
const Token = mongoose.model('token');

// Models
module.exports = function resend(req, res) {
  // Fetch request body
  const { email } = req.body;

  // Fetch token
  const token = Token.findOne({ email });

  // Check token existence
  token.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'expiredError',
      });
    }

    // Send email
    try {
      sender(data);
    } catch (err) {
      console.log(err);
    }
  });
};
