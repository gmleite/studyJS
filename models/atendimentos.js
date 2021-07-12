const conexao = require('../infraestrutura/database/conexao')
const moment = require('moment')
const { restart } = require('nodemon')
const { default: axios } = require('axios')
const repositorio = require('../repositorios/atendimento')

class Atendimento {
    adiciona(atendimento) {

        
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
            return new Promise((resolve, reject) => reject(erros))
        } else {
            return repositorio.adiciona(atendimento)
                .then((resultados) => {
                    const id = resultados.insertId
                    return { ...atendimento, id}
                })
        }

    }

    lista(){
        return repositorio.lista()
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if(erro){
                res.status(400).json(erro)
            }else{
                const { data } = await axios.get(`http://localhost:8084/${cpf}`)
                atendimento.cliente = data
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res){
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400),json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })

    }
    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'
        conexao.query(sql, id,(erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })


    }
}


module.exports = new Atendimento