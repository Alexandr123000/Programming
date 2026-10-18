class Vehicle {
    model = null;
    type = null;
    wheels = null;
    enginePower = null;
    weight = null;
    
    constructor(model, type, wheels, enginePower, weight) {
        this.model = model;
        this.type = type;
        this.wheels = wheels;
        this.enginePower = enginePower;
        this.weight = weight;
    }
    start = function() {
        console.log("Engine has started.")
    }
    stop = function() {
        console.log("Engine has stopped.")
    }
    drive = function() {
        console.log(`${this.type} is moving.`);
    }
}

let vehicle = new Vehicle("MD-V", "Car", 4, 500, 1200)

function vehicleTest(vehicle) {
    let counter = 0;
    
    console.log("Vehicle properties");
    
    for (let property in vehicle) {
        counter++;
        if (counter == 6) {
            break;
        }
        console.log(property + " : " + vehicle[property]); //show vehicle information
    }
    
    vehicle.start();
    vehicle.drive();
    vehicle.stop();
}

vehicleTest(vehicle);
