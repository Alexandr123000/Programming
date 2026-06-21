function numbersDeletion(firstArray, secondArray, twoLengthsDifference, mark = false)
{
    for (let i = 0; i < twoLengthsDifference; i++) //last numbers deletion
    {
        if (mark == false)
        {
            firstArray.pop();
        }
        else
        {
            secondArray.pop();
        }
    }
    return [firstArray, secondArray];
}

let firstArray = [4, 8];
let secondArray = [6, 10, 35, 14, 2, 12, 4];
let twoLengthsDifference, mark = false;

console.log("First array: " + firstArray);
console.log("Second array: " + secondArray);

if (firstArray.length > secondArray.length)
{
    twoLengthsDifference = firstArray.length - secondArray.length;
    const [firstArrayReturned, secondArrayReturned] = numbersDeletion(firstArray, secondArray, twoLengthsDifference, mark);
    
    console.log("First array: " + firstArrayReturned);
    console.log("Second array: " + secondArrayReturned);
}
else if(firstArray.length < secondArray.length)
{
    twoLengthsDifference = secondArray.length - firstArray.length;
    mark = true;
    const [firstArrayReturned, secondArrayReturned] = numbersDeletion(firstArray, secondArray, twoLengthsDifference, mark);
    
    console.log("First array: " + firstArrayReturned);
    console.log("Second array: " + secondArrayReturned);
}
else
{
    console.log("The lengths of the two arrays are equal.");
}
