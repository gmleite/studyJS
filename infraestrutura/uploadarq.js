const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomedoarquivo, callbackimgcriada) => {

    const tiposvalidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoehvalido = tiposvalidos.indexOf(tipo.substring(1)) != -1

    
    if(tipoehvalido){
    const novocaminho = `./assets/imagens/${nomedoarquivo}${tipo}`
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novocaminho))
    .on('finish', () => callbackimgcriada(false, novocaminho)) 
    }else{
        const erro = 'Tipo de imagem invalido.'
        console.log('Tipo de imagem invalido.')
        callbackimgcriada(erro)
    }
}
