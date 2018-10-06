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


//instance creation

let tausif = new Person("Tausif","tausif");
console.log(tausif);
console.log(tausif.name);