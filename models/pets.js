const pets = require('../controllers/pets')
const conexao = require('../infraestrututa/conexao')
const uploadarq = require('../arquivos/uploadarq')


class Pet{
    adiciona(pet, res){
        const query = 'INSERT INTO Pets SET ?'
        uploadarq(pet.imagem, pet.nome, (novocaminho) => {
            const novoPet = {nome: pet.nome, imagem: novocaminho}
            conexao.query(query, novoPet, erro => { 
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(200).json(novoPet)
                }
            })
        })
    }
}

module.exports = new Pet()
