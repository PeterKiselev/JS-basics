(function() {
    'use strict'
    
    let yearBirth
    do {
        yearBirth = +prompt('Введите дату вашего рождения')
    } while(isNaN(yearBirth) || yearBirth === 0)
    yearBirth = Math.abs(yearBirth)

    const YEAR = new Date().getFullYear()

    let age = YEAR - yearBirth,
        text = '',
        cases

    function declOfNum(age, text) {
        cases = [2, 0, 1, 1, 1, 2]
        return age + " " + text [(age % 100 > 4 && age % 100 < 20) ? 2 : cases[(age % 10 <5 ) ? age % 10 : 5]] 
    }

    alert(`Вам ${declOfNum(age, ['год', 'года', 'лет'])} в этом году`)

})()





