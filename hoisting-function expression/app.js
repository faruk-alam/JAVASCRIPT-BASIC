greet();
function greet(){
    console.log("Hi everyone....");
}
// In the above program, the function greet is called before declaring it and the program shows the output
//  This is due to hoisting.
// However, when a function is used as an expression, an error occurs because only declarations are hoisted
greet();
const greet = function(){
    console.log("Hi everyone....");
}
