const express = require('express');
const app = express();
const port = 3333;

// Estou dizendo para o Express usar o ejs como View engine para desenhar meu html
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
   
    res.render("index", {
      
    });    
});

// yarn dev 
app.listen(port, function() {
    console.log(`Servidor rodando na porta: ${port}.`);
});