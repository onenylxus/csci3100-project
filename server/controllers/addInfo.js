// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function addInfo(req, res) {
  // Fetch request body
  const { email, name, gender, major, college } = req.body;

  // Fetch client
  const client = Client.findOne({ email });

  client.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'Client not found.',
      });
    }

    data
      .update({
        $set: {
          name,
          gender,
          major,
          college,
        },
      })
      .exec();

    return res
      .status(200)
      .send({ msg: 'Client updated.', username: data.username });
  });
};
