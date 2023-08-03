const Sequelize = require('sequelize');

const sequelize = new Sequelize('userdb', 'root', 'Abhi@2018041077', {
     dialect : 'mysql', 
     host : 'localhost'
})

module.exports = sequelize;