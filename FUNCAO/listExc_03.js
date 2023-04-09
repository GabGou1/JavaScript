
function payDiscount(porcentagem, valorFInal, preco, pagamento){
    if(pagamento === 1){
        porcentagem = preco * 0.1;
        valorFInal = preco - porcentagem;
    
        console.log('O valor pago pelo produto será de - R$' + valorFInal.toFixed(2));
    }
    else if(pagamento === 2){
        porcentagem = preco * 0.15;
        valorFInal = preco - porcentagem;
    
        console.log('O valor pago pelo produto será de - R$' + valorFInal.toFixed(2));
    }
    else if(pagamento === 3){
        valorFInal = preco;
    
        console.log('O valor pago pelo produto será de - R$' + valorFInal.toFixed(2));
    }
    else if(pagamento === 4){
        porcentagem = preco * 0.1;
        valorFInal = preco + porcentagem;
    
        console.log('O valor pago pelo produto será de - R$' + valorFInal.toFixed(2));
    }
    else{
        console.log('Forma de pagamento inválida');
    }
}

payDiscount(null, null, 100, 1);
