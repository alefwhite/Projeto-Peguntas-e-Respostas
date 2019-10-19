const express = require('express');
const app = express();
const port = 3333;

// Estou dizendo para o Express usar o ejs como View engine para desenhar meu html
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    let nome = "Victor Lima";
    let lang = "Javascript";
    let produtos = [
        {nome : "Doritos", preco : 5.00},
        {nome : "Cheetos", preco : 3.00},
        {nome : "Nescau", preco : 6.00},
        {nome : "Fanta Laranja", preco : 5.00},
        {nome : "Trakinas", preco : 2.00},
        {nome : "Kit kat", preco : 1.50}
        
    ];

    res.render("index", {
        nome,
        lang,
        msg : false,
        produtos
    });    
});

// yarn dev 
app.listen(port, function() {
    console.log(`Servidor rodando na porta: ${port}.`);
});