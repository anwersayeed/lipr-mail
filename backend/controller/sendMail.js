const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deeyasrewna@gmail.com",
    pass: "$$$$$$$$$$$$$$$$",
  },
});

module.exports.sendResetEmail = async (email, token) => {
  // change first part to your domain
  var url = "http://localhost:8000/user/reset-password?token=" + token;

  await smtpTransport.sendMail({
    from: "deeyasrewna@gmail.com",
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
    from: "deeyasrewna@gmail.com",
    to: email,
    subject: "VERIFY Your EMAIL",
    text: `Click on this link to verify ${url}`,
    html: `<h3> Click on this link to verify your email : ${url} </h3>`,
  });
};

module.exports.sendComposedMail = async ({
  senderMail,
  primaryRecieverMail,
  ...otherProps
}) => {
  const mailOptions = {
    from: { senderMail },
    to: { primaryRecieverMail },
    cc: { secondaryRecieverMail },
    subject: { subject },
    text: { body },
  };

  await smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email send: ${info.response}`);
    }
  });
};

cron.schedule("* * * * * *", () => {
  console.log("email sent");
});
