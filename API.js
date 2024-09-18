const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Importar as rotas
const clientRoutes = require('./routes/clients');
const ticketRoutes = require('./routes/tickets');

// Usar as rotas
app.use('/api/clients', clientRoutes);
app.use('/api/tickets', ticketRoutes);

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
