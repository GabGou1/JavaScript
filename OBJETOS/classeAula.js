
class pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log('Meu nome é ' + this.nome +' e minha idade é ' + this.idade);
    }
}

const gabGou = new pessoa();

gabGou.nome = 'Gabriel';
gabGou.idade = 20;

const mattetJ = new pessoa();

mattetJ.nome = 'Mateus';
mattetJ.idade = 18;

console.log(gabGou);
console.log(mattetJ);

gabGou.descrever();
mattetJ.descrever();
