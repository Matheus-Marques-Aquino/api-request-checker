const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

//Adiciona as rotas de importação de lead e loop de requisições para o Argus
const indexRoutes = require('./routes/endpoint-checker'); 
const datalayerRoutes = require('./routes/datalayer'); 

dotenv.config();

process.on('uncaughtException', (err) => { 
    console.error('Unhandled Exception:', err); 
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//Impede a finalização da aplicação em caso de erro
process.on('uncaughtException', (err) => { 
    console.error('Unhandled Exception:', err); 
});

app.use(express.json());

app.use('/', indexRoutes);
app.use('/datalayer', datalayerRoutes);

const port = 3040;

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`); 
});