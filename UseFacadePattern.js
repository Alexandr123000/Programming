class CarEngine {
    startEngine() {
        console.log("The engine started");
    }
}
class CarHeater {
    startHeater() {
        console.log("The heater started");
    }
}
class CarHeadlights {
    turnOnHeadlights() {
        console.log("The headlights turned on");
    }
}
class StartCarFacade {
    constructor() {
        this.carEngine = new CarEngine();
        this.carHeater = new CarHeater();
        this.carHeadlights = new CarHeadlights();
    }
    startCar() { //use all methods of the classes
        this.carEngine.startEngine();
        this.carHeater.startHeater();
        this.carHeadlights.turnOnHeadlights();
    }
}

const car = new StartCarFacade();

car.startCar();
