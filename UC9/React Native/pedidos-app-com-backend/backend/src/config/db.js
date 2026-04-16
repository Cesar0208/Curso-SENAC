const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senac",
    database: "pedidos_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Erro ao se conectar ao servidor.")
    } else {
        console.log("Conectado com sucesso.")
    }
});

module.exports = connection;