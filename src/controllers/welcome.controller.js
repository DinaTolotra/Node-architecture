module.exports = class Welcome {
    static index(req, res, next) {
        res.send("Welcome to the server");
    }
    static count(req, res, next) {
        res.send("Count = "+req.count);
    }
}