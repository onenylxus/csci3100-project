/**
 * CU There Team
 * @component fetchData - A controller to fetch profile information
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by EditProfileForm
 * PURPOSE: This controller fetches profile data in client database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchData(req, res) {
  // Fetch request body
  const { username } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    if (!data) {
      return res.status(422).send({});
    }

    return res.status(200).send({
      msg: 'Client fetched',
      name: data.name,
      gender: data.gender,
      major: data.major,
      college: data.college,
      bio: data.bio,
      image: data.profilePicture ? data.profilePicture.toString('base64') : '',
    });
  });
};
