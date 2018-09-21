//Function types

function add(num1 : number, num2 :number) : number{
    return num1 + num2 ;
}

/*
 Here addNumbers is a variable of type function which take two number param
 and return a number.
 */
var addNumbers : (n1 : number, n2 : number) => number;

addNumbers = add;

console.log(addNumbers(10,20));