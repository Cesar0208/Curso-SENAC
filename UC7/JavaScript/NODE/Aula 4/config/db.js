const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senac",
    database: "api_dashboard_1",
    port: 3307
});

connection.connect((err) => {
    if(err) {
        console.error("Erro ao conectar ao Mysql:", err);
        return;
    }
    console.log("MySQL conectado com sucesso!");
});

module.exports = connection;