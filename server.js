const express = require('express');
const app = express();
const data = require("./data.json"); // o lugar de onde puxa os dados

app.use(express.json()); // avisa o express que ele deve usar a notação json

// Verbos HTTP
// GET
// POST
// PUT
// DELETE


app.get("/clients", function(req, res) {  // pede os clientes
    res.json(data); // responde com todos os dados do arquivo data (clientes)
});


app.get("/clients/:id", function(req, res) {  // pede um cliente que possui um id específico
    const { id } = req.params;  // atribui o numero do id recebido à variavel id recém criada
    const client = data.find(cli => cli.id = id);  // procura no arquivo data o cliente que possui o atributo id == o id requerido

    if (!client) return res.status(204).json(); // avisa se não houver cliente com o ID recebido

    res.json(client);  // responde com o resource (cliente)
});


app.post("/clients", function(req, res) {
    const { name, email } = req.body;

    // Salvar
    res.json({ name, email });
});


app.put("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id = id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);
});


app.delete("/clients/:id", function(req, res) {});

app.listen(3000, function() {
    console.log("Server is running");
});