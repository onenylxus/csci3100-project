// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function editProject(req, res) {
  // Fetch request body
  const { username, name, gender, major, college, bio, image } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    if (!data) {
      return res.status(422).send({});
    }

    data
      .update({
        $set: {
          name,
          gender,
          major,
          college,
          bio,
          profileImage: Buffer.from(image, 'base64'),
        },
      })
      .exec();

    return res.status(200).send({ msg: 'Client updated.' });
  });
};
