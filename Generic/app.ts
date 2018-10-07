function echo<T>(data : T) {
    return data;
}

console.log(echo("Tausif").length);


//Built-in generaic
let num: Array<number> = [1,2,3,4];
//num.push("tausuif");
num.push(12);


//Generic class
class Maths<T> {
    base : T;
    index : T;

    calculate() : number{
        return +this.base + +this.index;
    }

}