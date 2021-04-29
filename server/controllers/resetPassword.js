/**
 * CU There Team
 * @component resetPassword - performs actions after user enters a correct password
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by ResetPasswordForm
 * PURPOSE: This controller updates password in database
 */

// Require
const mongoose = require('mongoose');
const cipher = require('../cipher');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function resetPassword(req, res) {
  // Fetch request body
  const { email, password } = req.body;

  // Fetch client by email
  const client = Client.findOne({ email });

  client.then((data) => {
    if (password === cipher.decrypt(data.password.hex, data.password.iv)) {
      return res.status(422).send({
        error: 'duplicatePasswordError',
      });
    }

    data
      .update({
        $set: {
          password: cipher.encrypt(password),
        },
      })
      .exec();

    return res.status(200).send({ msg: 'Password Updated.' });
  });
};
