let symbolLine = "qwgp3nmdt7";

for (let i = 0; i < symbolLine.length; i++)
{
    if (isFinite(symbolLine[i])) //check for number
    {
        console.log("Position of a first number of the line: " + (i+1));
        break;
    }
}
