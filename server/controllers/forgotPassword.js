/**
 * CU There Team
 * @component forgotPassword - verifiy if email is correct and send email if it is correct
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by forgotPasswordForm
 * PURPOSE: Control whether they should send an email to the user provided email address
 */

// Require
const mongoose = require('mongoose');
const sender = require('../sender');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Exports
module.exports = function forgotPassword(req, res) {
  // Fetch request body
  const { email } = req.body;

  // Fetch client and token by email
  const clientEmail = Client.findOne({ email });
  const tokenEmail = Token.findOne({ email });

  tokenEmail.then((data1) => {
    if (data1) {
      return res.status(422).send({
        error: 'tokenEmailError',
      });
    }
    // Check email existence
    clientEmail.then((data2) => {
      if (!data2) {
        return res.status(422).send({
          error: 'wrongEmailError',
        });
      }
      const token = new Token({
        email,
        code: String(Math.trunc(Math.random() * 10 ** 6)).padStart(6, '0'),
        type: 'forgotPassword',
      });
      token.save();

      // Send email
      try {
        sender(token);
        return res.status(200).send({ msg: 'Email sent.' });
      } catch (err) {
        console.log(err);
      }
    });
  });
};
