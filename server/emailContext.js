// Email text
const text = (code) =>
  `Hi there,\n\n We are happy that you signed up for CUThere! To continue the verification process, please copy the following key and paste it in the verification page.\n\n Your key: ${code}\n\nWelcome to CUThere!\nThe CUThere Team`;

// Email HTML
const html = (code) =>
  `Hi there,<br /><br /> We are happy that you signed up for CUThere! To continue the verification process, please copy the following key and paste it in the verification page.<br /><br /> Your key: ${code}<br /><br />Welcome to CUThere!<br />The CUThere Team`;

// Export
module.exports = { text, html };
