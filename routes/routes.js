const router = require('express').Router()
const Produto = require('../models/produto')

//ENDPOINTS
router.get('/', async (req, res) => {
    const produtos = await Produto.find()
    return res.status(200).json({ produtos: produtos })
})

module.exports = router
