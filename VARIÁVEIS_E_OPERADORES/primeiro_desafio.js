const preco = 5.08;
const gastoCombustivelKM = 10;
const distanciaKM = 100;

const gastoTotal = distanciaKM/gastoCombustivelKM * preco;

console.log(gastoTotal.toFixed(2));