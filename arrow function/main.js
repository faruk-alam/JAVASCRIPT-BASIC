// normal function
function cube(x){
    return x*x*x;
}
console.log(cube(5));
// Arrow function
let arrowcube = x =>{
    return x*x*x;
}
console.log(arrowcube(7));
// another example

// function bill(products,tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }
let bill = (products,tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
}
console.log(bill([24,7,35],0.4));



