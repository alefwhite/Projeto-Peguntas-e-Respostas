const Sequelize = require('sequelize');
const connection = require('./database');

// Criação de tabela com sequelize
const Pergunta = connection.define('pergunta', {
    titulo : {
        type : Sequelize.STRING,
        alloNull : false
    },
    descricao : {
        type : Sequelize.TEXT,
        alloNull : false
    }
});

Pergunta.sync({force : false}).then(() => {
    //console.log("Tabela Criada Com Sucesso");
});

module.exports = Pergunta;