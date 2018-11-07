const express = require('express')
const bodyParser = require('body-parser')

const CashRegister = require('./classes/CashRegister')
const cash = new CashRegister()
const router = express.Router()


router.post('/comprar', bodyParser.json(), (req, res) => {
    // Falta verificación de que los datos que llegan son validos
    cash.clear() // Borrar items de la compra, dejar la lista de la compra vacía
    cash.buy(req.body.compra) // Añadir array de items que llega desde la api a la lista de la comproa
    res.json(cash.totalAmomunt()) // Responder con el calculo total de la compra, descuentos incluidos
})

module.exports = router
