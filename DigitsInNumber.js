let number = 12153;
let numberLine = number.toString();
let mark = true;


for (let i = 0; i < numberLine.length - 1; i++)
{
    if (Number(numberLine[i]) > Number(numberLine[i+1])) //checking the number
    {
        console.log("The digits in the number are not in ascending order.");
        mark = false;
        break;
    }
}

if (mark == true)
{
    console.log("The digits in the number are in ascending order.");
}
