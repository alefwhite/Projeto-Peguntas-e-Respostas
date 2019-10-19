const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Testando");
});

// yarn dev 
app.listen(app, function() {
    console.log(`Servidor rodando na porta: ${port}`);
});