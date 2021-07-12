const mysql = require('mysql');

const conexao = mysql.createConnection({
    host:'localhost',
    port: 8081,
    user: 'giosql',
    password:'giovanni123',
    database:'dadossave'

});


module.exports = conexao
