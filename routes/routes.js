const router = require('express').Router()
const Produto = require('../models/produto')
const Validator = require('../validators/productValidator')

//ENDPOINTS
router.get('/', async (req, res) => {
    const produtos = await Produto.find()
    return res.status(200).json({ produtos: produtos })
})

router.post('/novo-produto', async (req, res) => {
    const { nome, descricao, valor } = req.body

    let validator = Validator(nome, descricao, valor)

    if(validator == false)
        return res.status(400).json({mensagem: "Necessário preencher todos os campos"})

    const produto = {
        nome,
        descricao,
        valor
    }

    await Produto.create(produto)
    return res.status(200).json({ mensagem: 'Producto adicionado com sucesso!' })
})

module.exports = router
