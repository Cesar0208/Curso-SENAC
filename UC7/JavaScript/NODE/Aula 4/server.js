const express = require("express");
const cors = require("cors");
const db = require("./config/db")

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API está em funcionamento!")
});

app.get("/usuarios", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, resultado) => {
        if (err) return res.send(500).json({erro: err});
        res.json(resultado);
    });
});

app.post("/usuarios", (req, res) => {
    const {nome, email, senha} = req.body;

    db.query("INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)", [nome, email, senha], (err, resultado) => {
        if (err) return res.status(500).json({erro: err});

        res.status(200).json({mensagem: "Usuario adicionado!"});
    });
});

app.put("/usuarios/:id", (req, res) => {
    // Atualizar apenas nome e email
    const {nome, email} = req.body;
    const {id} = req.params;

    db.query("UPDATE usuarios SET nome = ?, email = ? WHERE id = ?", [nome, email, id], (err) => {
        if(err) return res.status(500).json({erro: err});
        res.json({mensagem: "Nome e senha de usuário atualizado!"});
    });
});

app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM usuarios WHERE id=?", [id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: "Usuário deletado!" });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})