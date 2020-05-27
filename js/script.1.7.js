(function() {
    'use strict'
    
    let memory;
    do {
        memory = +prompt('Введите объем памяти флешки, ГБ');
    } while(isNaN(memory) || memory === 0);
    memory = Math.abs(memory)

    let quantity = memory * 1024 / 820

    alert(`В такую флешку помесится ${Math.floor(quantity)} файлов размеров 820МБ `)

})()