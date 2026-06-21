const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
let arrayElementsSum = 0;

console.log("Array: " + array);

for (const row of array)
{
    for (const number of row)
    {
        arrayElementsSum += number; //elements addition
    }
}

console.log("Array elements sum: " + arrayElementsSum);
