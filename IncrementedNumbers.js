let numbersArray = [10, 20, 30, 40, 50];

console.log("Array: " + numbersArray);

for (let i = 0; i < numbersArray.length; i++)
{
    numbersArray[i] = numbersArray[i] + numbersArray[i] / 100 * 10;
}

console.log("Array with incremented numbers: " + numbersArray);
