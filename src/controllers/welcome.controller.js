const pool = require('../db')
const envoyerEmail = require('../mail')
const genererOTP = () => Math.floor(100000 + Math.random() * 900000)
const  otpStore= {}
module.exports = class Welcome {
    static index(req, res, next) {
        res.send("Welcome to the server");
    }
    static count(req, res, next) {
        res.send("Count = "+req.count);
    }
    static recupere(req, res){
       const email = req.body.email;
       
        if(!email)
        {
            res.send("Erreur lors de la recuperation d'email")
        }
        else{ 
       
            pool.getConnection().then(conn => {conn.query("SELECT * FROM users WHERE email = ?", [email]).then(rows => {
            conn.release();
            
            if(rows.length > 0){
                const otp= genererOTP()
                otpStore[email] = otp
                const sujet = "Vous etes connecté à l'app"
                const message = 'Votre code est' +otp
                envoyerEmail(email, sujet, message, (err, info)=>{
                    if(err){
                        console.error("Erreur d'envoi d'email",err.message)
                        res.status(500).json({message: "Erreur d'envoi d'email"})
                    }
                    else {
                        console.log("Email envoyé")
                        res.json({message: "Email envoyé"})
                    }
                })
                return res.json({ message: "email présent dans la base de donées"})
            }
            else{
                return res.json({message: "email non présent dans la base de données"})
            }
        })})
       }
       
    }
    static verifierotp(req, res){
        const {email, otp } = req.body
        if(!email || !otp){
            return res.status(400).json({message: "Email et otp manquant"})
        }
        if(otpStore[email] === otp)
         {  delete otpStore[email]
            return res.json({ message: "OTP correct"})}
            else{
                return res.status(400).json({message: "OTP incorrect"})
            }
        }
}
