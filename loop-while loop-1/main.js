// Make a program that will print the sum of all numbers that will be divisible by 3 and 5
// from 1-100
var a = 1;
var sum = 0;
while(a<=100){
    if(a%3==0 && a%5==0)
    sum = sum+a;
    a++;
}
document.write(sum);