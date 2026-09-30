var foodArray = ["Bread", "Milk", "Cherry", "Lemon", "Orange", "Banana"];
var sortedFoodArray = [];

for (var i = 0; i < foodArray.length; i++)
{
    if (foodArray[i].length <= 5) //sort the array
    {
        sortedFoodArray.push(foodArray[i]);
    }
}

console.log("Sorted food array: ", sortedFoodArray);
