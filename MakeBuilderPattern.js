class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.tomato = builder.tomato || false;
        this.cheese = builder.cheese || false;
        this.cabbage = builder.cabbage || false;
        this.cutlet = builder.cutlet || false;
    }
}
class BurgerBuilder {
    constructor(size) {
        this.size = size;
    }
    addCutlet() {
        this.cutlet = true;
        return this;
    }
    addCabbage() {
        this.cabbage = true;
        return this;
    }
    addCheese() {
        this.cheese = true;
        return this;
    }
    addTomato() {
        this.tomato = true;
        return this;
    }
    build() {
        return new Burger(this);
    }
}

const burger = (new BurgerBuilder(10)).addCutlet().addCabbage().addCheese().addTomato().build(); //make a burger

console.log("Burger");

for (let property in burger) {
    console.log(`${property} : ${burger[property]}`);
}
