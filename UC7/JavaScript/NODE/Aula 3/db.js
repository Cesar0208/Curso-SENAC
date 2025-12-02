// Dia 18/11/2025
const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'senac',
    database: 'api_usuarios_node',
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection()
    .then(connection => {
        console.log("Conexão bem-sucedida ao banco de dados MySQL!");
        connection.release();
})
.catch(err => {
    console.error("Erro ao conectar ao banco de dados MySQL", err);
    console.error(err.message);
});

module.exports = pool;