const express = require('express')
const app = express()
const cors = require('cors')
const database = require('./db/database')
const port = 8081

//middlewares
app.use(cors())

//routes
app.get('/', (req, res) => {
    return res.send(database)
})

app.listen(port, () => {
    console.log(`SERVER LISTENING ON: http://localhost:${port}`)
})
