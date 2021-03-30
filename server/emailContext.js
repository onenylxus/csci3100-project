// Email text
const text = (code) => {
  console.log('Email text creation');
  return `Hi there,\n\n We are happy that you signed up for CUThere! To continue the verification process, please click the following link.\n\n Click this: https://cu-there-server.herokuapp.com/verify?token=${code}\n\nWelcome to CUThere!\nThe CUThere Team`;
};

// Email HTML
const html = (code) => {
  console.log('Email HTML creation');
  return `Hi there,<br /><br /> We are happy that you signed up for CUThere! To continue the verification process, please click the following link.<br /><br /> Click this: <a href="https://cu-there-server.herokuapp.com/verify?token=${code}">https://cu-there-server.herokuapp.com/verify?token=${code}</a><br /><br />Welcome to CUThere!<br />The CUThere Team`;
};

// Export
module.exports = { text, html };
