let firstNumber = 10, secondNumber = 100;
let digit = 0;

for (let i = firstNumber; i < secondNumber; i++)
{
    digit = Number(i.toString()[0]);
    if (digit % 2 == 0) //checking if the digit is even
    {
        console.log(i);
    }
}
