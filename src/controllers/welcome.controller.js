module.exports = {
    index(req, res, next) {
        res.send("Welcome to the server");
    },

    count(req, res, next) {
        res.send("Count = " + req.count);
    }
}
