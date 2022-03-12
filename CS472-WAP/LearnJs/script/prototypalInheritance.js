let animal={
    eats:true
};
let rabbit={
    jumps:true
}
// console.log(rabbit);
// console.log("Hello");

rabbit.__proto__=animal;
// console.log(rabbit);
// alert(rabbit.eats);

//can set proto inside object

let longear={
    earLength:12,
    __proto__:rabbit
};
console.log(longear);


let user={
    name:'john',
    surname:'smith',
    set fullName(value){
        [this.name,this.surname]=value.split(" ");
    },
    get fullName(){
        return `${this.name} ${this.surname}`;
    },
    dance(){
        console.log("Hello I cannot dance");
    },
    sing(){
        //empty method
    }
}
let admin={
    isAdmin:true
};

Object.setPrototypeOf(admin,user);
console.log(admin);
console.log(admin.fullName);
console.log(admin.name);
console.log(admin.surname);
console.log(admin);
admin.sing=function(){
    console.log("I can sing YAYYYYYYY !!!!!!11");
}
admin.sing();
console.log(admin);
admin.dance();
admin.dance=function(){
    console.log("This is admin, who can dance");
}
admin.dance();
console.log(admin);
for(let prop in admin){
    if(admin.hasOwnProperty(prop)){
        console.log(`"${prop}" is the property of admin`);
    }else{
        console.log(`"${prop}" is inherited to admin`);
    }
}
//writting doesn't use prototype
//Meaning: If you override method, that overridden method lies in the existing object, don't need to
//pass through prototypical chain


/*
Exercise Why are both hamsters full?
importance: 5
We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How can we fix it?
This is interesting problem
*/

let hamster = {
    stomach: [],
    name:"",
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  speedy.name="speedy";
  lazy.name="lazy";
  // This one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  alert( lazy.stomach ); // apple

  console.log("speedy :"+speedy.name);
  console.log("lazy : "+lazy.name);
