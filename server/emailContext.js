// Email text
const text = (url) =>
  `Hi there,\n\n We are happy that you signed up for CUThere! To continue the verification process, please click the following link.\n\n Click this: ${url}\n\nWelcome to CUThere!\nThe CUThere Team`;

// Email HTML
const html = (url) =>
  `Hi there,<br /><br /> We are happy that you signed up for CUThere! To continue the verification process, please click the following link.<br /><br /> Click this: ${url}<br /><br />Welcome to CUThere!<br />The CUThere Team`;

// Export
module.exports = { text, html };
