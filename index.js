const customExpress = require('./config/customexpress');

const app = customExpress();
app.listen(8080, () => console.log('Servidor rodando na porta 8080.'));



