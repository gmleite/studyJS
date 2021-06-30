module.exports = app =>{
    app.get('/atendimentos',(req,res) => res.send('Voce esta na rota de atendimentos, realizando um get'));


    app.post('/atendimentos', (req, res) => { 
        console.log(req.body)
        res.send('Voce esta na rota de atendimentos e esta realizando um post');
        
    })

};

