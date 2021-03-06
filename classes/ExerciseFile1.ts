// Exercise 1 - How was your TypeScript Class?
/*function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);*/

//Solution
class Car {

    acceleration:number = 0

    constructor(public name : string){

    }

    honk(){
        console.log("Toooooooooot!");
    }

    accelerate(speed : number){
        this.acceleration = this.acceleration + speed;
    }

}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);