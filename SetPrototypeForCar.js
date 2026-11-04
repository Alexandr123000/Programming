let vehicle = {enginePower: undefined, weight: undefined};
let car = {wheelsNumber: 4, maxSpeed: 250};

car.__proto__ = vehicle; //set car's prototype
car.enginePower = 300;
car.weight = 1200;

console.log("Car's engine power: " + car.enginePower + ". Car's weight: " + car.weight);
