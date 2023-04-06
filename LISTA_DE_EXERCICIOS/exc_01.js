
const notaA1 = 8;
const notaA2 = 6;
const notaA3 = 10;

const notaFinal = (notaA1 + notaA2 + notaA3) / 3;

if(notaFinal < 5){
    console.log('Reprovado com a nota final de - ' + notaFinal.toFixed(2));
}
else if(notaFinal > 7){
    console.log('Aprovado com a nota final de - ' + notaFinal.toFixed(2));
}
else{
    console.log('Recuperação com a nota final de - ' + notaFinal.toFixed(2));
}