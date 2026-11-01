class Vehicle { //base class
    constructor(weight, maxSpeed) {
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }
}
class Car extends Vehicle {
    constructor(weight, maxSpeed, name, seatsNumber, enginePower) {
        super(weight, maxSpeed);
        this.name = name;
        this.seatsNumber = seatsNumber;
        this.enginePower = enginePower;
    }
    showCharacteristics() {
        console.log("________________");
        console.log("Car's characteristics");
        console.log("Name: " + this.name);
        console.log("Weight: " + this.weight);
        console.log("Max speed: " + this.maxSpeed);
        console.log("Seats number: " + this.seatsNumber);
        console.log("Engine power: " + this.enginePower);
        console.log("________________");
    }
}
class Motorbike extends Vehicle {
    constructor(weight, maxSpeed, name, enginePower) {
        super(weight, maxSpeed);
        this.name = name;
        this.enginePower = enginePower;
    }
    showCharacteristics() {
        console.log("________________");
        console.log("Motorbike's characteristics");
        console.log("Name: " + this.name);
        console.log("Weight: " + this.weight);
        console.log("Max speed: " + this.maxSpeed);
        console.log("Engine power: " + this.enginePower);
        console.log("________________");
    }
}

const car = new Car(1200, 300, "HT-50", 4, 500);
const motorbike = new Motorbike(170, 320, "DO-32", 190);

car.showCharacteristics();
motorbike.showCharacteristics();
