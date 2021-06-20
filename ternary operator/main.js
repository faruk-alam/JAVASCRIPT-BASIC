var number = Number(prompt("Enter a number"));
/*if(number>0){
    document.write("Positive");
}
else{
    document.write("negative");
}*/
//var result = number > 0 ? "positive":"negative"
//document.write(result);
/*if(number>0){
    document.write("positive");
}
else if(number<0){
    document.write("negative")
}
else{
    document.write("zero")
}*/
var result = number > 0 ? "positive": number < 0? "negative" : "zero";
document.write(result);