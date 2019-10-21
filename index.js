const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const connection = require('./database/database');
const PerguntaModel = require('./database/Pergunta');
const RespostaModel = require('./database/Resposta');

//database connection
connection.authenticate()
.then(() => {
    console.log("Conexão feita com o banco de dados! ");
})
.catch((erro) => {
    console.error(erro);
})

// Estou dizendo para o Express usar o ejs como View engine para desenhar meu html
app.set('view engine', 'ejs');
app.use(express.static('public'));

//O body-parser é um módulo capaz de converter o body da requisição para vários formatos.
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/*** Rotas */
app.get("/", (req, res) => {
    PerguntaModel.findAll({ raw : true, order : [
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas : perguntas
        });  
    });     
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    let _titulo = req.body.titulo;
    let _descricao = req.body.descricao;
    // Equivalente ao INSERT do mysql
    PerguntaModel.create({
        titulo : _titulo,
        descricao : _descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id;
    PerguntaModel.findOne({
        where : {id : id}
    }).then(pergunta => {
        if(pergunta != undefined ) { // Pergunta achada

            RespostaModel.findAll({
                where : {perguntaId : pergunta.id},
                order : [ ['id', 'DESC'] ]

            }).then((respostas) => {

                res.render("pergunta", {
                    pergunta : pergunta,
                    respostas : respostas
                });                
            });
        } else { // Não encontrada
            res.redirect("/");
        }
    });
});

app.post('/responder', (req, res) => {
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;

    RespostaModel.create({
        corpo : corpo,
        perguntaId : perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    });
});

/*** Rotas */


// yarn dev 
app.listen(port, function() {
    console.log(`Servidor rodando na porta: ${port}.`);
});