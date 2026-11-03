let text = "a bc def ghij klmno";
let substring = "";

for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
        substring += text[i];
    }
}

substring = substring.toUpperCase(); //transform the substring

console.log(`A transformed substring of "${text}": ` + substring);
