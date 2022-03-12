"use strict"
let animal={
    walks:true
};

function Rabbit(name){
    this.name=name;
}
let rab1=new Rabbit("white Rabbit");//internally rabbit.__proto__=animal
console.log(rab1);

let kingdom={
    livesAt:"Earth"
}
Rabbit.prototype=kingdom;

let rab2=new Rabbit("Black Rabbit");

console.log(rab1);
console.log(rab2);
console.log(rab1.walks);

console.log(rab1.constructor == Rabbit); 

function Cat(){
}
let cat=new Cat();
// alert

console.log({name:"ashok"});
console.log(new Object());