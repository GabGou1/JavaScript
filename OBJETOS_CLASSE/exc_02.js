
class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
}

function IMC(peso, altura){
    const IMC = peso / Math.pow(altura,2);

    if(IMC < 18.5){
        console.log('Peso abaixo do esperado - ' + IMC.toFixed(2));
    }
    else if(IMC > 40){
        console.log('Obesidade grave - ' + IMC.toFixed(2));
    }
    else if(IMC >= 18.5 && IMC < 25){
        console.log('Peso normal - ' + IMC.toFixed(2));
    }
    else if(IMC >= 25 && IMC < 30){
        console.log('Acima do peso - ' + IMC.toFixed(2));
    }
    else{
        console.log('Obesidade - ' + IMC.toFixed(2));
    }
}

const jose = new Pessoa("José", 70, 1.75);
IMC(jose.peso, jose.altura);
