const customExpress = require('./config/customexpress');
const conexao = require('./infraestrututa/conexao.js');
const Tabelas = require('./infraestrututa/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('conectado com sucesso');
        Tabelas.init(conexao)
        
        const app = customExpress();

        app.listen(8080, () => console.log('Servidor rodando na porta 8080.'));

    }
});

