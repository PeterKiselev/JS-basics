(function() {
    'use strict'
    
    let a
    do {
        a = +prompt('Введите радиус окружности, мм')
    } while (isNaN(a) || a === 0)
    a = Math.abs(a)

    let square = Math.PI * Math.pow(a, 2)
    
    alert(`Площадь вашего круга ${Math.ceil(square)} мм`)

})();