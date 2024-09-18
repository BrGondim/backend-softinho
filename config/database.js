const sql = require('mssql');

// Configuração de conexão com o MSSQL
const config = {
    user: 'seuUsuario',
    password: 'suaSenha',
    server: 'localhost',  // ou o IP do servidor
    database: 'SoftinhoDB',
    options: {
        encrypt: true, // Use isso apenas se o MSSQL estiver configurado para SSL
        trustServerCertificate: true, // Use se estiver usando uma configuração de desenvolvimento local
    }
};

// Função para conectar ao banco
const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('Conectado ao banco de dados MSSQL');
    } catch (err) {
        console.error('Erro ao conectar no banco de dados:', err);
    }
};

module.exports = { sql, connectDB };
