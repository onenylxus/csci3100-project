/**
 * CU There Team
 * @controller verify - performs actions after successful verification,
 *                      including removing token and creating new client
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 *
 * Used by VerificationForm and ForgotPasswordForm
 * PURPOSE: This controller creates new client if request is registration,
 *          delete token if finishes forgot password verification
 */

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
  // Fetch request body
  const { email, code } = req.body;

  // Fetch token
  const token = Token.findOne({ email });

  token.then((data) => {
    // Check token existence
    if (!data) {
      return res.status(422).send({});
    }

    // Check code match
    if (code !== data.code) {
      return res.status(422).send({});
    }

    switch (data.type) {
      case 'register':
        // Create client
        const client = new Client({
          username: data.username,
          password: data.password,
          email: data.email,
          isPublic: true,
          popularity: 0,
        });
        client.save();

        // Remove token
        data.remove();

        // Return
        return res.status(200).send({ type: data.type });

      case 'forgotPassword':
        // Remove token
        data.remove();

        // Return
        return res.status(200).send({ type: data.type });

      default:
        return res.status(422).send({});
    }
  });
};
