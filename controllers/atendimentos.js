const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get('/atendimentos',(req,res) => res.send('Voce esta na rota de atendimentos, realizando um get'));


    app.post('/atendimentos', (req, res) => { 
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        console.log('Atendimento enviado')
        
        res.send('Voce esta na rota de atendimentos e esta realizando um post');
        
    })

};

