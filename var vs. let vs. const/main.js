//Using var keyword
/*function foo(){
    var n=6;
    console.log(n);
 }
 
 var n=5;
 console.log(n);
 foo();
 /*The values of n inside the function and outside the function are different according to 
 their respective scopes.The value of n outside the function scope remains the same 
 regardless of what the value of n is inside the function scope. */

 //Using let keyword
//code will throw an error
/*function foo(n) {
    if (n == 6) {
        let num = 2;
    }
    console.log(num);
}

var n = 6;
console.log(n);
foo(6);*/
/*The above code has thrown an error because we initialized the num variable in the 
if-statement block. As it has been declared using let, we cannot access it outside the if 
block.This code will work fine if we use var as they are function-scoped and can be 
accessed throughout the function */

/*function foo(n) {
    if (n === 6) {
        var num = 2;
    }
      console.log(num);
    
}

var n = 6;
console.log(n);
foo(n);*/
// using const keyword
const pi=3.14
console.log(pi)
pi=3;
console.log(pi)
/*The code above will generate an error as we cannot assign a new value to the variable pi as we have declared it using 
const */

 