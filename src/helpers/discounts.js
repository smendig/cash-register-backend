const discounts = {
    none() {
        return 0
    },
    x2(amount, price) {
        return Math.floor(amount / 2) * price
    },
    discount6after3(amount, price) {
        if (amount >= 3) {
            return amount * 6
        }
        return 0
    }
}

module.exports = discounts
