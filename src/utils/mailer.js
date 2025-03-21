const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "virtualmachinedebian@gmail.com",
        pass: "vpkseoedoqvpdhkl"
    }
});

function sendMail(dest, subj, msg) {
    const mailOptions = {
        from: "virtualmachinedebian@gmail.com",
        to: dest,
        subject: subj,
        text: msg
    };

    return transporter.sendMail(mailOptions);
}

function sendOpt(dest, otp) {
    const destination = dest;
    const subject = "Verification";
    const message = "Votre 'one-time password' est "+otp;
    return sendMail(destination, subject, message);
}

module.exports = sendOpt;