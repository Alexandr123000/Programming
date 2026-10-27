class Singleton {
    constructor() {
        if (Singleton.instance) { //check for the instance
            return Singleton.instance;
        }
        this.importantData = "Unique data";
        Singleton.instance = this;
    }
}

const firstInstance = new Singleton();
const secondInstance = new Singleton();

console.log(`Singleton: ${firstInstance === secondInstance}`);
