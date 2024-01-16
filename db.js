const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'roundhouse.proxy.rlwy.net',
    port: 57439,
    user: 'root',
    password: '4EAC6DA2aA6aEa3365-h6Gbfdee1DA25',
    database: 'railway',
    insecureAuth: true  
});

module.exports = {
    pool
};