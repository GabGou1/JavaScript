
function writeMyName(nome){
    return 'Meu nome é ' + nome;
}

function ageTest(age){
    if(age >= 18){
        console.log(writeMyName('Gabriel') + ' e sou maior de idade');
    }
    else{
        console.log(writeMyName('Gabriel') + ' e sou menor de idade');
    }
}

ageTest(20);
