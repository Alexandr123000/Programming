let array = [1, -1, 2, -2, 3, -3];
let numberOfPositiveNumbers = 0;

console.log("Array: " + array);

for (let i = 0; i < array.length; i++)
{
    if (array[i] > 0) //counting positive numbers
    {
        numberOfPositiveNumbers += 1;
    }
}

console.log("Number of positive numbers of the array: " + numberOfPositiveNumbers);
