/**
 * CU There team
 * @component createReport - A controller to create report in report database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by CreateReportForm
 * PURPOSE: This controller creates report in report database
 */

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
  const checkReport = Report.findOne({ username, postId });
  checkReport.then((data) => {
    if (data) {
      return res.status(422).send({
        error: 'repeatedReportError',
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
  });
};
