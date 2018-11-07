const productList = require('../product-list') // La lista de productos debería estar en una base de datos, y no aquí definidos

class CashRegister {
    constructor() {
        this.buying = {} // Donde se almacenan los productos a comprar
    }
    clear() {
        this.buying = {}
    }
    buy(productCodeArray) {
        productCodeArray.forEach(productCode => {
            // Añadir producto a la compora, si existe ya se suma 1 a la cantidad, si no se inicializa
            this.buying[productCode] ? this.buying[productCode]++ : this.buying[productCode] = 1
        })
    }
    totalAmomunt() {
        // Inicializar el total con valores a 0
        let total = {
            products: {},
            total: 0,
            discount: 0,
            totalAfterDiscount: 0
        }
        for (var key in this.buying) {
            // Recorrer los productos que estan en la compora e ir sumando al total, se calcula los descuentos también
            total.products[key] = {
                amount: this.buying[key],
                total: this.buying[key] * productList[key].price,
                discount: this.discount(key)
            }
            total.total += total.products[key].total
            total.discount += total.products[key].discount
        }
        total.totalAfterDiscount = total.total - total.discount //Calculo de total con descuentos incluidos
        return total
    }
    discount(productCode) {
        // Calculo del descuento, hay que pasar la cantidad de productos y su precio individual
        return productList[productCode].discount(this.buying[productCode], productList[productCode].price)
    }
}

module.exports = CashRegister
