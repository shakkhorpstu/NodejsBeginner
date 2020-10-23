const nodemailer = require('nodemailer');

const sendMail = (req, res) => {
    let transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
           user: process.env.MAIL_USERNAME,
           pass: process.env.MAIL_PASSWORD
        }
    });

    const message = {
        from: process.env.MAIL_FROM, // Sender address
        to: 'to@email.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        html: "<h1>Have the most fun you can in a car. Get your Tesla today!</h1>" // Plain text body
    };

    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err);
          res.status(500).send('failed');
        } else {
          console.log(info);
          res.status(200).send('success');
        }
    });
}

module.exports = {
    sendMail
}