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
  // Fetch parameters
  const { token } = req.query;

  // Find token
  Token.findOne({ code: token }).then((data1) => {
    // Check token existence
    if (!data1) {
      return res.status(422).json({
        error: 'Not exist',
      });
    }

    // Update client verify status by token code
    Client.updateOne(
      { _id: data1._clidentId },
      {
        $set: { isVerified: true },
      },
      (err, data) => {
        if (err) {
          return console.log(err);
        }

        // Send status
        console.log(data);
        res.status(200).send({
          message: 'User verified',
        });
        return res;
      }
    );
  });
};