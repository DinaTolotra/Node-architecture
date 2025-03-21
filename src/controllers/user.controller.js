const User = require("../models/user.models");
const mailer = require("../utils/mailer");

// utility function
function genererOTP() {
    return Math.floor(Math.random() * 900000);
}

function processOTP(email, otp) {
    return Promise.all([
        sendOTP(email, otp),
        saveOTP(email, otp)
    ]);
}

function sendOTP(email, otp) {
    return mailer(email, otp);
}

function saveOTP(email, otp) {
    let user = new User();
    user.email = email;
    user.otp = otp;
    return user.save();
}


// request handler function
async function authenticate(req, res, next) {
    const email = req.body.email;
    if (!email) {
        res.status(400);
        res.send("Invalid email");
    } else {
        try {
            let otp = genererOTP();
            await processOTP(email, otp);
            res.status(200);
            res.send("SUCCESS: OTP sent to "+email);
        } catch (error) {
            res.status(500);
            res.send("ERROR: failed to send OTP, "+error);
        }
    }

}

async function verifyOTP(req, res, next) {
    const email = req.body.email;
    const otp = req.body.otp;

    if (!email) {
        res.status(400);
        res.send("ERROR: email field required");
    } else {
        try {
            let user = await User.findByPk(email);
            if (user.otp = otp) {
                res.status(200);
                res.send("SUCCESS: user authenticaded");
            } else {
                res.status(406);
                res.send("ERROR: user not authenticated");
            }
        } catch (error) {
            res.status(500);
            res.send("ERROR: failed to authenticate user");
        }
    }
}


// export
module.exports = {
    auth: authenticate,
    verif: verifyOTP
}
