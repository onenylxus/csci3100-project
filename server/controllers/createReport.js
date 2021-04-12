// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Report');

// Models
const Report = mongoose.model('report');

// Exports
module.exports = function createReport(req, res) {
  // Fetch request body
  const { username, postId, content } = req.body;

  if (content === '') {
    return res.status(422).send({
      error: 'missingContentError',
    });
  }

  // Create report and save to database
  const report = new Report({
    postId,
    username,
    content,
  });
  report.save();
  return res.status(200).send({
    msg: 'Report sent successfully.',
  });
};
