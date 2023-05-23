
class aluno{
    nome;
    rN;
    
    constructor(nome, rN){
        this;nome = nome;
        this.rN = rN;
    }
    
    randomizer(){
        return Math.floor(Math.random() * 100 + 1);
    }
}

function criarAlunos(){
    const listaAluno = [];
    i = 0;
    while(i <= 4){
        listaAluno[i] = new aluno;
        listaAluno[i].nome = "aluno " + (i + 1);
        listaAluno[i].rN = listaAluno[i].randomizer();
        i++;
    }

    return listaAluno;
}

function winner(lista){
    let nm = lista[0].nome, rNW = lista[0].rN;
    for (let i = 0; i < lista.length; i++) {
        if(rNW < lista[i].rN){
            nm = lista[i].nome;
            rNW = lista[i].rN;
        }
    }

    console.log('\nO ' + nm + ' venceu o sorteio com o número ' + rNW);
    console.log('\nVeja qual foi o valor que cada aluno tirou -');
    i=0
    while(i <= 4){
        console.log(lista[i]);
        i++
    }
}

module.exports = {aluno, criarAlunos, winner};
