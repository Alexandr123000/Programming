function Car(engine, seat) {
    this.engine = engine;
    this.seat = seat;
}

const sportscar = new Car(1000, 2);

sportscar.setName = function(name) { //add new functional
    this.name = name;
}
sportscar.setSpoiler = function(spoiler) { //add new functional
    this.spoiler = spoiler;
}
sportscar.setColor = function(color) { //add new functional
    this.color = color;
}

sportscar.setName("sportscar1");
sportscar.setSpoiler(true);
sportscar.setColor('white');

for (const [property, value] of Object.entries(sportscar)) {
    console.log(`${property} : ${value}`);
}
