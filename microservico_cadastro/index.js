const express = require('express');
const app = express();
app.use(express.json());

let cadastro = {
  nome: "nome: ",
  cpf: "CPF: ",
  endereco: "Endereço: ",
  telefone: "Telefone: ",
  email: "E-mail: ",
  senha: "Senha: ",
};

const axios = require("axios");

app.put('/cadastro', (req, res) => {
  const { nome, cpf, endereco, telefone, email, senha } = req.body;
  cadastro = { nome, cpf, endereco, telefone, email, senha };
  res.status(201).send(cadastro);
});

app.post('/eventos', async (req, res) => {
  const { tipo, dados } = req.body;
  if (tipo === "Usuario01") {
    try {
      await axios.post("http://localhost:3000/eventos", {
        tipo: "Usuario01",
        dados: {
          nome: dados.nome,
          cpf: dados.cpf,
          endereco: dados.endereco,
          telefone: dados.telefone,
          email: dados.email,
          senha: dados.senha,
        },
      });
      res.status(200).send("Usuário cadastrado com sucesso!");
    } catch (error) {
      res.status(500).send("Erro ao cadastrar usuário.");
    }
  } else {
    res.status(400).send("Tipo de usuário inválido.");
  }
});

app.listen(4000, () => {
  console.log('Cadastro rodando na Porta 4000')
});
