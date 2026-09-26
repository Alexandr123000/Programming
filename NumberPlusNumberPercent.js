let array = [10, 20, 30];
let percent = 10;
for (let i = 0; i < array.length; i++)
{
    array[i] = array[i] + ((array[i] * percent) / 100); //finding the result
}
console.log("Changed array:");
for (let element of array)
{
    console.log(element);
}
