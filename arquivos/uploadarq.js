const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomedoarquivo, callbackimgcriada) => {

    const tiposvalidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoehvalido = tiposvalidos.indexOf(tipo.substring(1))

    
    if(tipoehvalido == -1){
        console.log('Tipo de imagem invalido.')
    }else {
    const novocaminho = `./assets/imagens/${nomedoarquivo}${tipo}`
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novocaminho))
    .on('finish', () => callbackimgcriada(novocaminho)) 
    }
}
