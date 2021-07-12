const express = require('express')
const bodyparser = require('body-parser')

const app = new express()
const faker = require('faker')

app.use(bodyparser())

app.get('/:cpf', (req, res) => {
    const { cpf } = req.params
    
    res.status(200).json({
        cpf,
        nome: faker.name.findName(),
        datadenascimento: faker.date.past()
    })
})

app.listen(8084, () => console.log('api rodando'))