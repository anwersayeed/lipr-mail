const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "rubye32@ethereal.email",
    pass: "GrMGueXp5upEJCPv9p",
  },
});

smtpTransport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports.sendResetEmail = async (email, token) => {
  // change first part to your domain
  var url = "http://localhost:8000/user/reset-password?token=" + token;

  await smtpTransport.sendMail({
    from: "rubye32@ethereal.email",
    to: email,
    subject: "RESET YOUR PASSWORD",
    text: `Click on this link to reset your password ${url}`,
    html: `<h3> Click on this link to reset your password : ${url} </h3>`,
  });
};

module.exports.sendVerifyEmail = async (email, token) => {
  // change first part to your domain
  var url = "http://localhost:8000/user/verifyemail?token=" + token;

  await smtpTransport.sendMail({
    from: "rubye32@ethereal.email",
    to: email,
    subject: "VERIFY Your EMAIL",
    text: `Click on this link to verify ${url}`,
    html: `<h3> Click on this link to verify your email : ${url} </h3>`,
  });
};
