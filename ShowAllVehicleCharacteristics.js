let vehicle = {
    wheels: 4,
    passengerSeats: 2,
    enginePower: 500,
    weight: 1000
};

console.log("All vehicle's characteristics");

for (const value in vehicle) //show all vehicle's characteristics
{
    console.log(value + " : " + vehicle[value]);
}
