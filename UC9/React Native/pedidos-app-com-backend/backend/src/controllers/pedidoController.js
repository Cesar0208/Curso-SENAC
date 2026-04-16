const db = require('../config/db');

exports.criarPedido = (req, res) => {
    const {cliente, produto, quantidade, valor} = req.body;

    const sql = "INSERT INTO pedidos (cliente, produto, quantidade, valor) VALUES (?, ?, ?, ?)";

    db.query(sql, [cliente, produto, quantidade, valor], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: "Pedido criado!" });
    });
};

exports.listarPedidos = (req, res) => {
  db.query("SELECT * FROM pedidos", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};