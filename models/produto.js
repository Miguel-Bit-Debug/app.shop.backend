const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, requires: true },
    valor: { type: Number, required: true }
},
    { timestamps: true }
)

const Produto = mongoose.model('Produtos', produtoSchema)

module.exports = Produto
