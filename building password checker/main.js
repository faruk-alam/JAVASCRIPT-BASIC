var password = "mypass";
var response;
var entrycount = 0;
var entrylimit = 3;
var error = false;
while(password!=response && !error){
    if(entrycount<entrylimit){
    response = prompt("Enter password");
    entrycount++;
    }
    else{
        error = true;
    }
 }
if(error){
    document.write("Too many entry,please try again later.");
}
else{
    document.write("You have done it successfully");
}
    
    




