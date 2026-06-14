let array = [10, -20, 30, -40, 50, -60, 70, -80, 90, -100];

console.log("Array: " + array);

for (let i = 0; i < array.length; i++)
{
    if (array[i] < 0)
    {
        array.splice(i, 1);
    }
}

console.log("Array without negative numbers: " + array);
