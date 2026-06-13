const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersSum = 0;

for (let i = 0; i < array.length / 2; i++)
{
    numbersSum += array[i];
}

console.log("First array half sum: " + numbersSum);
