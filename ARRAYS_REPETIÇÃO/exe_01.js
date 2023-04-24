
let mediaFinal = 0;
const notas = [];

notas.push(5, 7, 8, 4);
console.log(notas.length);
media(notas);


function media(aluno = []){

    for (let i = 0; i < aluno.length; i++) {
        mediaFinal = mediaFinal + aluno[i];
    }

    mediaFinal = mediaFinal / aluno.length;
    console.log(mediaFinal);
}
