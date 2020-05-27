(function() {
    'use strict'
    
    let num
    do {
        num = +prompt('Введите трехзначное число')
    } while(isNaN(num) || num === 0 || num < 100 || num > 999)
    num = Math.abs(num)

    function getReversedNum(num) {
        let result = 0;
        while (num) {
          result = result * 10 + num % 10;
          num = Math.floor(num / 10);
        }
      
        return result;
    }

    alert(`${getReversedNum(num)}`)
    

})();