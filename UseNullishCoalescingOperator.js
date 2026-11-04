let nullValue = null;
let undefinedValue = undefined;
let testValue = nullValue ?? "Not null value"; //check the values

console.log(testValue);

testValue = undefinedValue ?? "Not undefined value"; //check the values

console.log(testValue); 

testValue = "Not null or undefined value" ?? "Value"; //check the values

console.log(testValue);
