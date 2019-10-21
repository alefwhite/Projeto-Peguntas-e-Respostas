const Sequelize = require('sequelize');
const connection = require('./database');

// Criação de tabela com sequelize
const Resposta = connection.define('respostas', {
    corpo : {
        type : Sequelize.TEXT,
        alloNull : false
    },
    perguntaId : {
        type : Sequelize.INTEGER,
        alloNull : false
    }
});

Resposta.sync({force : false}).then(() => {
    //console.log("Tabela Criada Com Sucesso");
});

module.exports = Resposta;