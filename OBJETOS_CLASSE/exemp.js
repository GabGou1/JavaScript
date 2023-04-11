
class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log('O ' + p1.nome + ' é mais velho');
    }
    else if(p1.idade < p2.idade){
        console.log('O ' + p2.nome + ' é mais velho');
    }
    else{
        console.log('Os dois tem a mesma idade');
    }
}

const gabGou = new Pessoa('Gabriel', 20);

const mattetJ = new Pessoa('Mateus', 18);

compararPessoa(gabGou, mattetJ);
