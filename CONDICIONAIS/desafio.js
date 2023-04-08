
const etanolPrice = 3.5;
const gasolinePrice = 5.51;
const fuelExpense = 10;
const distanceKM = 100;
const fuelType = 'Gasoline';
let amountSpent;

const consumedLIters = distanceKM / fuelExpense;

if(fuelType === 'Etanol'){
    amountSpent = consumedLIters * etanolPrice;
}
else{
    amountSpent = consumedLIters * gasolinePrice;
}

console.log(amountSpent.toFixed(2));
