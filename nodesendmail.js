const nodemailer = require('nodemailer')
var http = require('http');
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
     //   console.log("My public IP address is: " + ip);
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    secure: true,
    port: 465,
    auth: {
        user: 'user@zohomail.eu',
        pass: 'pas',
    },
});
const mailOptions = {
    from: 'nodejsxox@zohomail.eu',
    to: 'nodejsxox@yandex.com',
    subject:  'İp adres',
    text: "Public IP address is: " + ip,
    html: "Public IP address is: " + ip
}
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
        });
});
})



