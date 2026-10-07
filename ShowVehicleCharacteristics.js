let vehicle = {
    wheels: 4,
    passengerSeats: 2,
    enginePower: 500,
    weight: 1000
};

console.log("The vehicle's characteristics");

for (const value in vehicle) //show the vehicle's characteristics
{
    console.log(value);
}
