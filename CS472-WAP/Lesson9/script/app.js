//demonstrate inheritance
console.log("Hello , PROTOTYPE INHERITANCE");


const person={
    name:null,
    dateOfBirth:null
};
const student={
    cgpa:0.00
};
console.log(person.__proto__);
//student.__proto__=person;//you are not using this, this is legacy way 
//denotes prototype, every object has this property, which is hidden by default

Object.setPrototypeOf(student,person);

console.log(student);
console.log("prototype of student:  "+Object.getPrototypeOf(student));
//every object has prototype property

const employee={
    job:null,
    salary:0.00
};
employee.__proto__=person;
console.log(employee);

//
const anna=Object.create(student);
anna.name="Anna smith";
anna.dateOfBirth=new Date(1988,2,11);
anna.cgpa=3.55;
console.log(anna);

const bob=Object.create(student,{
   name:{
       writable: true,
       configurable: true,
       enumerable:true,
       value:"bob smith"
   },
   dateOfBirth:{
    writable: true,
    configurable: true,
    enumerable:true,
       value:new Date(1990,11,13)
   },
   cgpa:{
       value:3.9
   }

});
console.log(bob);
bob.name="Bob Lynn smith";
console.log(bob);
bob.dateOfBirth=new Date(1980,11,5);
console.log(bob.dateOfBirth);

console.log(bob.person);//cannot do bob.person..


//constructros functions
//conventions: start with capital leter
//Executed only with "new" operator
function Animal(name){
    this.name=name;
}
function Animal(name, food){
    this.name=name;
    this.food=food;
}
//lattest Animal will override the previous Animal, no constructor overloading
const animal1_rabbit=new Animal("rabbit");
const animal2_cat=new Animal("cat");
const animal3_rat=new Animal("rat","maize");
Animal("Dog");
console.log(animal3_rat);
console.log(animal1_rabbit);

//Using object.prototype property and "new operator"
const animal={
    eats:true
};

function Rabbit(name){
    this.name=name;
}
Rabbit.prototype=animal;
let rabbit= new Rabbit("White Rabbit");
console.log(rabbit);
console.log(rabbit.eats);

Array.prototype.join