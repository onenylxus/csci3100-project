// Require
const crypto = require('crypto');

// Variables
const algorithm = 'aes-256-cbc';

// Encrypt function
function encrypt(text) {
  const iv = crypto.randomBytes(8).toString('hex').slice(0, 16);
  const cipher = crypto.createCipheriv(algorithm, process.env.CIPHER_KEY, iv);
  let hex = cipher.update(text, 'utf8', 'hex');
  hex += cipher.final('hex');
  return { hex, iv };
}

// Decrypt function
function decrypt(hex, iv) {
  const decipher = crypto.createDecipheriv(
    algorithm,
    process.env.CIPHER_KEY,
    iv
  );
  let text = decipher.update(hex, 'hex', 'utf8');
  text += decipher.final('utf8');
  return text;
}

// Export
module.exports = { encrypt, decrypt };
