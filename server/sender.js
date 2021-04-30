/**
 * CU There Team
 * @component sender - To send email to client
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used in forgotPassword, register and resend
 * PURPOSE: This module sends email to client
 */

// Require
const transporter = require('./transporter');

// Export
module.exports = (data) => {
  switch (data.type) {
    case 'register':
      transporter.sendMail({
        from: 'csci3100cuthere@gmail.com',
        to: data.email,
        subject: `Confirmation email for CU There account`,
        html: `Hello, thank you for signing up to CU There!<br /></br >Your verification code is ${data.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
      });
      break;

    case 'forgotPassword':
      transporter.sendMail({
        from: 'csci3100cuthere@gmail.com',
        to: data.email,
        subject: `Change your password for CU There account`,
        html: `Hello,<br /></br >You seem to have forgot your password! Please copy the verification code below and paste it to the app so we know it is you that requested a change of password.<br /></br >Your verification code is ${data.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
      });
      break;

    default:
      return new Error();
  }
};
