const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','root', {
    host : 'localhost',
    dialect : 'mysql'
});

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'root'
module.exports = connection;