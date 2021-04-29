/**
 * CU There team
 * @component addInfo - A controller to add information in client database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by addInfoForm
 * PURPOSE: This controller updates client database
 */

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
