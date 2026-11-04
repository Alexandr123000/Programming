const car = {
    name: "MP-120",
    enginePower: 500,
    weight: 1100,
    maxSpeed: 330
};
const {name: vehicleName, enginePower: vehicleEnginePower, weight: vehicleWeight, maxSpeed: vehicleMaxSpeed} = car; //destructure the car object

console.log("Vehicle's characteristics");
console.log("Name: " + vehicleName);
console.log("Engine power: " + vehicleEnginePower);
console.log("Weight: " + vehicleWeight);
console.log("Max speed: " + vehicleMaxSpeed);
