
function numerosPar(lista){
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 === 0){
            console.log(lista[i]);
        }
    }
}

const listaNumeros = [1, 4, 6, 7, 9, 10, 5];
numerosPar(listaNumeros);
