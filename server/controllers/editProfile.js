/**
 * CU There Team
 * @component editProfile - A controller to edit profile information
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
 * PURPOSE: This controller updates profile information in client database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function editProfile(req, res) {
  // Fetch request body
  const { username, name, gender, major, college, bio, image } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    if (!data) {
      return res.status(422).send({});
    }

    data
      .update({
        $set: {
          name: !name ? data.name : name,
          gender: !gender ? data.gender : gender,
          major: !major ? data.major : major,
          college: !college ? data.college : college,
          bio: !bio ? data.bio : bio,
          profilePicture: image
            ? Buffer.from(image, 'base64')
            : Buffer.from([], 'base64'),
        },
      })
      .exec()
      .catch((err) => console.log(err));

    return res.status(200).send({ msg: 'Client updated.' });
  });
};
