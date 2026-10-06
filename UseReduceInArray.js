var numberArray = [10, 20, 30, 40, 50];

console.log("Number array: ", numberArray);

var sumNumber = numberArray.reduce((sumNumber, number) => { return sumNumber + number }, 0); //sum all numbers

console.log("Sum number of the numbers of the array: ", sumNumber);
