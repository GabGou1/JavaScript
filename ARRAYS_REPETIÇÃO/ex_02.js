
function Tabuada(numero){
    let result;
    for (let i = 1; i < 10; i++) {
        result = numero * i;
        console.log(numero + ' * ' + i + ' = ' + result + '\n');
    }
}

Tabuada(2);
