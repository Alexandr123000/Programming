const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let numbersSum = 0;

for (let i = 0; i < array.length; i++)
{
  numbersSum += Math.pow(array[i], 2);
}

console.log("The sum of the numbers: " + numbersSum);
