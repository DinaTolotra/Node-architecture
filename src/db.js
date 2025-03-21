const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'mabase',
    port: 3306,

})
module.exports = pool;