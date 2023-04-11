
const pessoa = {
    nome: 'Raphael',
    idade: 22,

    descrever: function(){
        console.log('Meu nome é ' + this.nome +' e minha idade é ' + this.idade);
    }
};

pessoa.altura = 1.95;

console.log('\n' + pessoa.nome);
console.log(pessoa.idade);
pessoa.descrever();

const atributo = 'nome';
console.log(pessoa[atributo]);

delete pessoa.nome;

console.log(pessoa['idade']);

//Imprime tudo no objeto
console.log(pessoa + '\n');

//Alterar nome da variável
pessoa.idade = 'teste';
console.log(pessoa.idade);
