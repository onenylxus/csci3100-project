// Email text
const text = (code) =>
  `Hi there,\n We are happy that you signed up for CUThere! To continue the verification process, please copy the following key and paste it in the verification page.\n Your key: ${code}`;

// Email HTML
const html = (code) => `${code}`;

// Export
module.exports = { text, html };
