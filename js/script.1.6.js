(function() {
    'use strict'
    
    let dollars;
    do {
        dollars = +prompt('Введите колличество долларов, $');
    } while(isNaN(dollars) || dollars === 0);
    dollars = Math.abs(dollars)

    const EURO = dollars * 0.81;

    alert(`Ваши доллары превратятся в ${EURO.toFixed()} евро`)
    
})()