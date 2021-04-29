/**
 * CU There team
 * @component abort - A controller to remove token in token database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by ResetPasswordForm and VerificationForm
 * PURPOSE: This controller removes token database
 */

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
