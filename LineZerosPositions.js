let line = "This0is0a0line.";
let array = [];

console.log("Line: " + line);

for (let i = 0; i < line.length; i++)
{
    if (line[i] == "0") //checking for zeros
    {
        array.push(i+1);
    }
}

console.log("Line zeros positions: " + array);
