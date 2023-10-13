const fuelConsumption = 4.5;
const distance = 100;
const pricePerLiter = 54;

const fuelCalc = (fuelConsumption, distance, pricePerLiter) => 
console.log(`${'Ваш расход на '}${distance} км: ${(fuelConsumption / distance) * distance * pricePerLiter} рубля`);

fuelCalc(fuelConsumption, distance, pricePerLiter);