var letter = prompt("Enter a letter");
letter = letter.toLowerCase();
switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    document.write((letter)+" is a vowel.");
        break;
        default:
            document.write((letter)+" is a consonant.");
}