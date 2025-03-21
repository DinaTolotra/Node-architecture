const {Sequelize} = require("sequelize");
const {db} = require("./env");

const uri = `${db.dialect}://${db.host}:${db.port}/${db.dbName}`;

module.exports = new Sequelize(uri, {
    username: db.user,
    password: db.password
});