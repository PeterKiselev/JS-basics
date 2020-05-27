let name;
    do {
        name = prompt('Введите имя');
    } while(!isNaN(name));

let message = name[0].toUpperCase() + name.slice(1);

alert(`Привет, ${message}`)
