/**
 * CU There Team
 * @component cipher - To encrypt and decrypt the password data
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by login, register, resetPassword
 * PURPOSE: This module encrypts and decrypts the password data so that
 *          other users and administrator cannot view this data
 */

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
