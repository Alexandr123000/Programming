function operation(operation, firstValue, secondValue)
{
    console.log("Result of the operation: ", operation(firstValue, secondValue));
}
function add (firstValue, secondValue)
{
    return firstValue + secondValue;
}
function subtract (firstValue, secondValue)
{
    return firstValue - secondValue;
}
function multiply (firstValue, secondValue)
{
    return firstValue * secondValue;
}
function divide (firstValue, secondValue)
{
    return firstValue / secondValue;
}

operation(add, 10, 20); //pass the function as a parameter
