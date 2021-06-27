const nodemailer = require('nodemailer');
const cron = require('node-cron');
const Mail = require('../models/Mail');

// 24 * 60 * 60 * 1000 * 7

const sendMail = function (props) {
  // const { to, cc, subject, body } = props;
  const user = 'hermina.daniel@ethereal.email';
  const pass = 'vKN2zKQ5h2g3hTDKZN';
  const transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //   user: 'deeyasrewna@gmail.com',
    //   pass: '',
    // },
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: [user],
      pass: [pass],
    },
  });

  const mailOptions = {
    from: [user],
    to: 'amy.keebler@ethereal.email',
    cc: '',
    subject: 'Hey',
    text: 'hi',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Mail.find({}).then((Mails) => {
//   for (let Mail of Mails) {
//     // 20 seconds
//     if (Mail.frequency == 0) {
//       if (
//         // Date.now() >= mail.scheduleDate + 20 * mailCounter &&
//         user.isActive == true
//       ) {
//         // update mailcounter++ in database
//         cron.schedule('*/20 * * * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//     // 30 seconds
//     else if (Mail.frequency == 1) {
//       if (
//         // Date.now() >= mail.scheduleDate + 30 * mailCounter &&
//         user.isActive == true
//       ) {
//         cron.schedule('*/30 * * * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//     // daily
//     else if (Mail.frequency == 2) {
//       if (
//         // Date.now() >= mail.scheduleDate + 24 * 60 * 60 * mailCounter &&
//         user.isActive == true
//       ) {
//         cron.schedule('* */24 * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//     // weekly
//     else if (Mail.frequency == 3) {
//       if (
//         // Date.now() >= mail.scheduleDate + 24 * 60 * 60 * 7 * mailCounter &&
//         user.isActive == true
//       ) {
//         cron.schedule('* */24 * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//     // monthly
//     else if (Mail.frequency == 4) {
//       if (
//         // Date.now() >= mail.scheduleDate + 24 * 60 * 60 * 30 * mailCounter &&
//         user.isActive == true
//       ) {
//         // update mailcounter++ in database
//         cron.schedule('* */24 * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//     // yeary
//     else {
//       if (
//         // Date.now() >= mail.scheduleDate + 24 * 60 * 60 * 365 * mailCounter &&
//         user.isActive == true
//       ) {
//         // update mailcounter++ in database
//         cron.schedule('* */24 * * *', () => {
//           sendMail(Mail.to, Mail.subject, Mail.body);
//         });
//       }
//     }
//   }
// });

module.exports = sendMail;
