// Clase producto, ahora mismo sin funcionalidad pero en caso de necesidad irian aquí las funcionalidades y métodos de los productos
class Product {
    constructor({ code, name, price, discount }) {
        this.code = code
        this.name = name
        this.price = price
        this.discount = discount
    }
}

module.exports = Product