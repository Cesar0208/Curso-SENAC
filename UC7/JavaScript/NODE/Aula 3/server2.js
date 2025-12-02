// Dia 18/11/2025
const express = require('express');
const pool = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API está em funcionamento!",
        timestamp: new Date().toISOString
    });
});

app.get("/usuarios", async (req, res) => {
    try {
        const [resultados] = await pool.query("SELECT * FROM usuarios");
        res.json({
            mensagem: "Lista de usuários",
            data: resultados,
            total: resultados.length
        });
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).json({ 
            mensagem: "Erro interno do servidor",
            erro: true
        });
    }
});

app.get("/usuarios/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const resultado = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);

        const usuario = resultado[0];

        if (!usuario){
            return res.status(404).json({
                mensagem: `Usuário com ID ${id} não encontrado.`,
                erro: true
            });
        }

        res.json({
            mensagem: "Usuário encontrado com sucesso",
            data: usuario
        });

    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).json({ 
            mensagem: "Erro interno do servidor",
            erro: true
        });
    }
});

app.post('/usuarios', async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios', error: true });
    }

    try {
        const resultado = await pool.query(
            'INSERT INTO usuarios (nome, email) VALUES (?, ?)', 
            [nome, email]
        );

        const novoUsuario = { id: resultado.insertId, nome, email };

        res.status(201).json({ 
            mensagem: 'Usuário criado com sucesso', 
            data: novoUsuario 
        });
        
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ mensagem: 'Email já cadastrado', error: true });
        }
        res.status(500).json({ mensagem: "Erro interno do servidor", error: true });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const { nome, email } = req.body;
    
    if (!nome || !email) {
        return res.status(400).json({ mensagem: "Nome e email são obrigatórios", error: true });
    }
    
    try {
        const resultado = await pool.query(
            'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
            [nome, email, id]
        );
        
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Usuário não encontrado", error: true });
        }
        
        const usuarioAtualizado = { id, nome, email };
        
        res.json({
            mensagem: "Usuário atualizado com sucesso",
            data: usuarioAtualizado
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor", error: true });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    try {
        const usuarioBuscado = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        
        if (usuarioBuscado.length === 0) {
             return res.status(404).json({ mensagem: "Usuário não encontrado", error: true });
        }
        
        const resultado = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        
        res.json({
            mensagem: "Usuário removido com sucesso",
            data: usuarioBuscado[0]
        });
    } catch (error) {
        console.error(`Erro no DELETE /usuarios/${id}:`, error);
        res.status(500).json({ mensagem: "Erro interno do servidor", error: true });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});