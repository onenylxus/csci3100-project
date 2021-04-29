/**
 * CU There Team
 * @component resend - resend email through nodemailer
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by VerificationScreens and ForgotPasswordScreen
 * PURPOSE: Resend email if users want to do so
 */

// Require
const mongoose = require('mongoose');
const sender = require('../sender');

// Schemas
require('../schemas/Token');

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
      return res.status(200).send({
        msg: 'Email resent',
      });
    } catch (err) {
      console.log(err);
    }
  });
};
