const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','13509',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
