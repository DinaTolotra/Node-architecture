const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user:"virtualmachinedebian@gmail.com",
            pass: "vpkseoedoqvpdhkl"

        },
    }
)
const envoyerEmail = (destinataire, sujet, message, callback) =>{
    const mailOptions = { 
        from :"virtualmachinedebian@gmail.com",to: destinataire,subject: sujet,text: message}
        transporter.sendMail(mailOptions, callback)

}
module.exports = envoyerEmail;