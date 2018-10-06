class Person {
   name : string;
   private type : string;
   protected age : number;

   constructor(name : string, public username : string){
       this.name = name;
   }

   private increaseAgeByOne(){
       this.age++;
   }

   printAge(){
       console.log(this.age);
   }

   setType(type:string){
       this.type = type;
   }
    
}

class Tausif  extends Person{


    constructor(username : string){
        super("Tausif",username);
        this.age = 24;
    }

}