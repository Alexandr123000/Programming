let array = [1, 5, 3, 2, 9, 3, 1, 3, 2, 6, 8, 4, 10];

console.log("Array: " + array);

for (let i = 0; i < array.length; i++)
{
    if (i % 4 == 0 && i != 0) //deleting an element of the array
    {
        array.splice(i, 1);
    }
}

console.log("Changed array: " + array);
