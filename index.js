const express = require('express');

//Adiciona as rotas de importação de lead e loop de requisições para o Argus
const indexRoutes = require('./routes/endpoint-checker'); 

const app = express();

//Impede a finalização da aplicação em caso de erro
process.on('uncaughtException', (err) => { 
    console.error('Unhandled Exception:', err); 
});

app.use(express.json());

app.use('/', indexRoutes);

const port = 3040;

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
});