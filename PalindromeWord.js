let word = "level";
let mark = false;

console.log("A word: " + word);

for (let i = 0, j = word.length - 1; i < word.length; i++, j--)
{
    if (word[i] != word[j]) //checking for palindrome
    {
        mark = true;
        break;
    }
}

if (mark == false)
{
    console.log("The word is a palindrome.");
}
else
{
    console.log("The word is not a palindrome.");
}
