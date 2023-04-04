
const number = 100;

//Dois igual ignora o tipo da variável, três igual verifica também o tipo da variável
const isPar = (number % 2) === 0;

if(number > 100 || number < -100){
    console.log('\n Digite um número menor que 100 e maior que -100 \n');
}
else{
    if(number === 0){
        console.log('\n Numero inválido \n');
    }
    else if(isPar){
        console.log('\n Par \n');
    }
    else{
        console.log('\n Ímpar \n');
    }
}
