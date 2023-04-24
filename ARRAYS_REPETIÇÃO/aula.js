
const lista = ['Gabriel', 'Mateus'];

//Adiciona na lista
lista.push('Renan');

console.log(lista);

//Substituí a varíavel no local
lista[2] = 'João';

console.log(lista + '\n');

//Remove a última variável da lista
lista.pop();
console.log(lista + '\n');

//Remove a primeira variável da lista
lista.shift();
console.log(lista + '\n');

//Tamanho da lista
console.log(lista.length);
