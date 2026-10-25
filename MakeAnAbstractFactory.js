const sportscar = {
    getVehicleName: () => ({name: "sportscar"}),
    getVehicleEngine: () => ({engine: 500}),
    getVehicleBody: () => ({body: "sportscar body"}),
    getVehicleWheels: () => ({wheels: 4})
};
const truck = {
    getVehicleName: () => ({name: "truck"}),
    getVehicleEngine: () => ({engine: 1500}),
    getVehicleBody: () => ({body: "sportscar body"}),
    getVehicleWheels: () => ({wheels: 6})
};

function getVehicle(type) {
    if (type === "sportscar") return sportscar;
    if (type === "truck") return truck;
}
function makeVehicle(vehicle) {
    const name = vehicle.getVehicleName();
    const engine = vehicle.getVehicleEngine();
    const body = vehicle.getVehicleBody();
    const wheels = vehicle.getVehicleWheels();
    
    console.log("Characteristics"); //show the vehicle information
    console.log("Name: " + name.name);
    console.log("Engine: " + engine.engine);
    console.log("Body: " + body.body);
    console.log("Wheels: " + wheels.wheels);
}

makeVehicle(getVehicle("sportscar"));
