(function() {
    'use strict'
    
    let money
    do {
        money = +prompt('Сколько денег у Вас в кошельке, грн?')
    } while(isNaN(money) || money === 0)
    money = Math.abs(money)
    money = Math.floor(money * 100) / 100

    let price
    do {
        price = +prompt('Сколько стоит одна шоколадка, грн?')
    } while(isNaN(price) || price === 0 || price > money)
    price = Math.abs(price)
    price = Math.floor(price * 100) / 100

    let amount = money / price
    amount = Math.floor(amount)

    let balance = money - (price * amount)
    
    alert(`Вы можете купить ${amount} шоколадок и у Вас останется ${balance.toFixed(2)} грн`)

})();