// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function follow(req, res) {
  // Fetch request body
  const { followState, self, other } = req.body;

  const otherClient = Client.findOne({ username: other });
  const selfClient = Client.findOne({ self });

  otherClient.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'Client not found.',
      });
    }
    if (followState === false) {
      data
        .update({
          $push: { follower: self },
          $inc: { popularity: 1 },
        })
        .exec();
      selfClient.then((data1) => {
        if (!data1) {
          return res.status(422).send({
            error: 'Client not found.',
          });
        }
        data1
          .update({
            $push: { following: data.username },
          })
          .exec();
        return res.status(200).send({
          msg: 'follower, following updated. User followed',
          follower: data.follower,
          following: data1.following,
        });
      });
    } else {
      data.follower.splice(data.follower.indexOf(self), 1);
      data
        .update({
          $set: { follower: data.follower },
          $inc: { popularity: -1 },
        })
        .exec();

      selfClient.then((data1) => {
        if (!data1) {
          return res.status(422).send({
            error: 'Client not found.',
          });
        }

        data1.following.splice(data1.following.indexOf(other), 1);

        data1
          .update({
            $set: { following: data1.following },
          })
          .exec();
        return res.status(200).send({
          msg: 'unfollowed',
          follower: data.follower,
          following: data1.following,
        });
      });
    }
  });
};
