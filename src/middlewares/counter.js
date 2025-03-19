let count = 0;

module.exports = function counter(req, res, next) {
    // Store the count value in the request object
    req.count = ++count;
    // A middle ware must call the next() function
    next();
};
