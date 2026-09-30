function countVowels(line)
{
    var vowelsNumber = 0;
    var vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < line.length; i++) //count vowels number
    {
        for (var j = 0; j < vowelsArray.length; j++)
        {
            if (line[i] === vowelsArray[j])
            {
                vowelsNumber++;
            }
        }
    }
    return vowelsNumber;
}

var line = "Text line.";

console.log(`Vowels number in "${line}": ` + countVowels(line));
