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


//Object Types
var obj : {name : string, age : number, active : boolean};

obj = {
    name : "Tausif",
    age : 23,
    //act : true
    active : true
}

//Exercise

let bankAccount = {
    money: 2000,
    deposit(value : number) : void {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);