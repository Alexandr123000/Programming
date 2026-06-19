let array = [1, 5, 5, 9, 0, 3, 3, 1, 10];

console.log("Array: " + array);

for (let i = 0; i < array.length - 1; i++)
{
    if (array[i] == array[i+1]) //checking for identical adjacent numbers
    {
        console.log("The array has identical adjacent numbers.");
        break;
    }
}
