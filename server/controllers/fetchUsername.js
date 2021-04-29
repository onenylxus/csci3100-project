/**
 * CU There Team
 * @component fetchUsername - A controller to fetch users
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by LeaderBoardScreen
 * PURPOSE: This controller fetches users with top 10
 *          highest popularity in client database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchUsername(req, res) {
  const client = Client.find({}).sort({ popularity: -1 }).limit(10);
  client.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no client in database.',
      });
    }
    return res.status(200).send({
      msg: 'username fetched',
      data,
    });
  });
};
