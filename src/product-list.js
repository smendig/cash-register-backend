// La lista de productos debería estar en una base de datos, y no aquí definidos

Product = require('./classes/Product')
discounts = require('./helpers/discounts')

const productList = {
    CAP: new Product({ code: 'CAP', name: 'Cap', price: 5, discount: discounts.x2 }),
    TSHIRT: new Product({ code: 'TSHIRT', name: 'Summer t-shirt ', price: 15, discount: discounts.discount6after3 }),
    HOODY: new Product({ code: 'HOODY', name: 'Hoody', price: 20, discount: discounts.none })
}

module.exports = productList
