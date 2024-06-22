const mysql = require("mysql2/promise");
require("dotenv").config();

const conexao = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
})

module.exports = conexao;