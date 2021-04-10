// Require
const transporter = require('./transporter');

// Export
module.exports = (data) => {
  switch (data.type) {
    case 'register':
      transporter.sendMail({
        from: 'csci3100cuthere@gmail.com',
        to: data.email,
        subject: `Confirmation email for ${data.username}`,
        html: `Hello, thank you for signing up to CU There!<br /></br >Your verification code is ${data.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
      });
      break;

    case 'forgotPassword':
      transporter.sendMail({
        from: 'csci3100cuthere@gmail.com',
        to: data.email,
        subject: `Change your password for ${data.username}`,
        html: `Hello,<br /></br >You seem to have forgot your password! Please copy the verification code below and paste it to the app so we know it is you that requested a change of password.<br /></br >Your verification code is ${data.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
      });
      break;

    default:
      return new Error();
  }
};
