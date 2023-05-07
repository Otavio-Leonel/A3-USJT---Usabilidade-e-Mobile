const express = require ('express');
const app = express();
const cadastro = {};
const axios = require("axios")
app.use(express.json());

app.put ('/cadastro', async (req, res) => { /* Aqui  o POST é uma rota para /cadastro que esta no terminal e dai */
    const novoUsuario = req.body;
    cadastro.push(novoUsusario);
    res.status(201).json(novoUsuario)
});
await axios.post("http://localhost:9000/eventos", {
    tipo: "Usuario1",
    dados: {
        nome: "Maria",
        idade: "" ,
        email: " @gmail.com",
        senha: " ",
        cpf: "   .   .   -  "
    }

    }
)
app.listen (4000, () => {
    console.log('Cadastro rodando na Porta 4000')
});

