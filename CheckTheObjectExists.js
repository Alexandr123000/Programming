let vehicle = {
    name: "car",
    enginePower: 300
};

console.log(`Vehicle: ${vehicle.name} --- ${vehicle.enginePower}`);

vehicle = null;

console.log(`Vehicle name: ${vehicle?.name}`); //check object's existing
