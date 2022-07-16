const express = require('express')
const app = express()
const cors = require('cors')
const Produto = require('./models/produto')
const mongoose = require('mongoose')
const config = require('./config.json')
const port = 8081

//middlewares
app.use(cors())
app.use(express.json())

//ENDPOINTS
app.get('/', async (req, res) => {
    const produtos = await Produto.find()
    return res.status(200).json({ produtos: produtos })
})

mongoose.connect(config['connectionString'], {
    dbName: 'Shop'
}).then(() => {
    console.log('MONGODB UP!')
    console.log(`SERVER LISTENING ON: http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
