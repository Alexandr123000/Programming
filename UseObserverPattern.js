class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} received notification "${data}"`);
    }
}

const companyPC1 = new Observer("J-1020");
const companyPC2 = new Observer("T-2040");
const companyPC3 = new Observer("Q-3060");
const informationService = new Subject();

informationService.subscribe(companyPC1);
informationService.subscribe(companyPC2);
informationService.subscribe(companyPC3);
informationService.notifyObservers("The grapics card needs to be changed.") //send a notification to PCs
informationService.unsubscribe(companyPC2);
informationService.notifyObservers("The processor needs to be changed.") //send a notification to PCs
