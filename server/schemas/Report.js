/**
 * CU There Team
 * @schema Report - report schema
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by createReport
 * PURPOSE: Model for storing report data
 */

// Require
const mongoose = require('mongoose');

// Post schema
const ReportSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Modeling
mongoose.model('report', ReportSchema);
