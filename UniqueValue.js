let array = [1, 1, 2, 2, 3, 4, 4];
let tempValue = null;
let uniqueValue = null;
let checkedValues = [];

outerLoop: for (let i = 0; i < array.length; i++) {
    tempValue = false;
    uniqueValue = array[i];
    for (let v = 0; v < checkedValues.length; v++) {
        if (uniqueValue === checkedValues[v]) {
            continue outerLoop;
        }
    }
    for (let j = i + 1; j < array.length; j++) {
        if (uniqueValue === array[j]) {
            tempValue = true;
            checkedValues.push(uniqueValue);
        }
    }
    
    if (tempValue === false) { //check for a unique value
        break outerLoop;
    }
}

console.log("A unique value: " + uniqueValue);
