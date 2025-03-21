const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000,
    db: {
        dialect: process.env.DB,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PSSWD,
        dbName: process.env.DB_NAME
    }
};