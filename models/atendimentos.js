const conexao = require('../infraestrututa/conexao')
const moment = require('moment')
const { restart } = require('nodemon')

class Atendimento {
    adiciona(atendimento, res) {

        
        const nomeValido = atendimento.cliente.lenght >= 5

        const validacao =[
            {
                nome: 'cliente',
                valido: nomeValido,
                mensagem: 'Nome do cliente deve ser valido, ao menos 5 caracteres.'
            }
        ]
        const erros = validacao.filter(campo => !campo.valido)
        const existemErros = erros.lenght   
        
        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Atendimentos SET ?';
            conexao.query(sql, atendimento, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }

    }

    lista(res){
        const sql = 'SELECT * FROM Atendimentos'
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(atendimento)
            }
        })
    }

    altera(){
        
    }
}


module.exports = new Atendimento