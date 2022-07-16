const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config.json')
const router = require('./routes/routes')
const port = 8081

//middlewares
app.use(cors())
app.use(express.json())

//route
app.use('/v1/api', router)

mongoose.connect(config['connectionString'], {
    dbName: 'Shop'
}).then(() => {
    console.log('MONGODB UP!')
    console.log(`SERVER LISTENING ON: http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
