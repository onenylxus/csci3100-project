/**
 * CU There Team
 * @component login - Checks if data matches with database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by LoginForm
 * PURPOSE: This controller sees if database contains entry that
 *          matches with login information, returns error if user
 *          enters invalid input
 */
// Require
const mongoose = require('mongoose');
const cipher = require('../cipher');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function login(req, res) {
  // Fetch request body
  const { username, password } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    // Account not exist
    if (!data) {
      return res.status(422).send({
        error: 'accountError',
      });
    }

    // Check password
    if (password !== cipher.decrypt(data.password.hex, data.password.iv)) {
      return res.status(422).send({
        error: 'passwordError',
      });
    }

    return res.status(200).send({ msg: 'User is verified' });
  });
};
