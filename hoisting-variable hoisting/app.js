function greet(){
    b ="hi janu"
    console.log(b);
    var b;
}
greet();
console.log(b);
// In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. 
// Hence b is only accessible inside the function. b does not become a global variable.