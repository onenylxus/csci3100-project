// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Token');

// Models
const Token = mongoose.model('token');

// Exports
module.exports = function abort(req, res) {
  // Fetch request body
  const { email } = req.body;

  // Fetch token and delete
  const token = Token.findOne({ email });

  token.then((data) => {
    if (data) {
      data.remove();
    }
  });

  return res.status(200).send({ msg: 'Aborted request' });
};
