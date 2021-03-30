// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Export
module.exports = async function verify(req, res) {
  // Fetch parameters
  const { token } = req.query;

  // Find token
  await Token.findOne({ code: token }).then((data1) => {
    // Check token existence
    if (!data1) {
      return res.status(422).json({
        error: 'Not exist',
      });
    }

    Client.findById(data1._clientId)
      .update({ $set: { isVerified: true } })
      .then((data) => {
        console.log(data);
        res.status(200).send({
          message: 'User verified',
        });
        return res;
      });
  });
};
