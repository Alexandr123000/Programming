let array = [];
let number = 20;

for (let i = 0; i < number; i++) {
    array.push(i);
}
for (let i = number - 1; i > -1; i--) {
    console.log(array[i]); //show values in reverse order
}
