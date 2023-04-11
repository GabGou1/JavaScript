
class Carro{
    marca;
    cor;
    gastoCombustível;

    constructor(marca, cor, gastoCombustível){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustível = gastoCombustível;
    }

    valorGasto(kmTotal, preco){
        const valorFinal = (kmTotal/this.gastoCombustível) * preco;
        console.log('O valor gasto da viagem será de R$' + valorFinal);
    }
}

const BumbleBee = new Carro('camaro', 'amarelo', 10);
BumbleBee.valorGasto(100, 5);
