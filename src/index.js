const express = require('express')
const app = express()
const cors = require('cors')
const Api = require('./router')

// Habilitar cors de forma global para desarrollo
app.use(cors())
app.use('/api', Api)

// Abrir puerto de escucha
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
