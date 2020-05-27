(function() {
    'use strict'
    
    let a
    do {
        a = +prompt('Введите длину стороны квадрата, мм')
    } while (isNaN(a) || a === 0)
    a = Math.abs(a)
    
    alert(`Периметр вашего квадрата ${a * 4} мм`)

})();