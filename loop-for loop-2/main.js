var sum = 0;
var x = parseInt(prompt("Enter intial Number"));
var y = parseInt(prompt("Enter last Number"));
for(var a=x;a<=y;a=a+1){
    sum = sum+a;
}
document.write(sum);