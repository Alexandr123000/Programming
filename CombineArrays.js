let firstArray = ['1', '2', '3'];
let secondArray = ['4', '5', '6'];

for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] = +firstArray[i];
}
for (let i = 0; i < secondArray.length; i++) {
    secondArray[i] = +secondArray[i];
}

let thirdArray = [...firstArray, ...secondArray]; //combine the values of the arrays
let maximalValue = Math.max(...thirdArray);

console.log("A maximal value = " + maximalValue);
