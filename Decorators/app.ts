function logged(constructor : Function) {
    console.log(constructor)
}

@logged 
class Aminals{

    constructor(){

    }
}


//factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Cat {

}