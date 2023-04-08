
const preco = 100;
const pagamento = 1;

let porcentagem;
let valorFInal;

if(pagamento === 1){
    porcentagem = preco * 0.1;
    valorFInal = preco - porcentagem;

    console.log('O valor pago pelo produto será de - ' + valorFInal.toFixed(2));
}
else if(pagamento === 2){
    porcentagem = preco * 0.15;
    valorFInal = preco - porcentagem;

    console.log('O valor pago pelo produto será de - ' + valorFInal.toFixed(2));
}
else if(pagamento === 3){
    valorFInal = preco;

    console.log('O valor pago pelo produto será de - ' + valorFInal.toFixed(2));
}
else if(pagamento === 4){
    porcentagem = preco * 0.1;
    valorFInal = preco + porcentagem;

    console.log('O valor pago pelo produto será de - ' + valorFInal.toFixed(2));
}
else{
    console.log('Forma de pagamento inválida');
}
