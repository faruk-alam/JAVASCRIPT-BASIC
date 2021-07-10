//program print a text and show the local variables

var say="Hello";  //global variables
function greet(){
    var speak="whats up";   // local variables 
    console.log(say+" "+speak);
}
greet();
console.log(say+speak);
/*In the above program, variable say is a global variable and variable speak is a local variable.
The variable speak can be accessed only inside the function greet. Hence, when we try to access 
variable speak outside of the function, an error occurs.*/


