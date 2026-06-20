let array = [10, 4, 2, 7, 3, 9, 56, 3, 1, 4];
let evenPositionSum = 0;
let oddPositionSum = 0;
let twoSumsQuotient;

for (let i = 0; i < array.length; i++)
{
    if (i % 2 == 0) //checking if a number is even
    {
        evenPositionSum += array[i];
    }
    else
    {
        oddPositionSum += array[i];
    }
}
twoSumsQuotient = oddPositionSum / evenPositionSum;

console.log("Two sums quotient: " + twoSumsQuotient);
