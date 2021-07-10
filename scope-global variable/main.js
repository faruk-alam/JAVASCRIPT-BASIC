//program print a text and show the change in global variables
var say="Hello";//global variables
function greet(){
    say="whats up";  
}
//before the function call
document.write(say+"<br>");
// after the function call

greet();
document.write(say);


/*In the above program, variable a is a global variable. The value of a is hello. Then the 
variable a is accessed inside a function and the value changes to 3.Hence, the value of a 
changes after changing it inside the function.*/

/*Note: It is a good practice to avoid using global variables because the value of a global 
variable can change in different areas in the program. It can introduce unknown results in 
the program. */

/*In JavaScript, a variable can also be used without declaring it. If a variable is used 
without declaring it, that variable automatically becomes a global variable.*/
// For Example:
function greet(){
   say="what's up";
}
greet();
document.write(say);