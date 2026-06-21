let number = 10;
let line = "-";

for (let i = 1; i < number; i++) //line formation
{
    line = line + (i.toString() + '-');
}

console.log("Line: " + line);
