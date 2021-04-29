/**
 * CU There Team
 * @component fetchFollow - A controller to fetch followers and followings
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by ProfileScreen
 * PURPOSE: This controller fetches followers and followings in client database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchFollow(req, res) {
  // Fetch request body
  const { user } = req.body;
  const otherClient = Client.findOne({ username: user });

  otherClient.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'Client not found.',
      });
    }
    return res.status(200).send({
      msg: 'follower fetched',
      follower: data.follower,
      following: data.following,
    });
  });
};
