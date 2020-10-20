const nodemailer = require('nodemailer');

const sendMail = (req, res) => {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: 'ca298c62f34c06',
           pass: '75ebc634256cd1'
        }
    });

    const message = {
        from: 'elonmusk@tesla.com', // Sender address
        to: 'to@email.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    };

    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}

module.exports = {
    sendMail
}