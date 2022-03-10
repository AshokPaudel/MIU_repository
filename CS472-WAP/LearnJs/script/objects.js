//Objects

/***
 * create object with object literals
 * We can add, remove and read files from it any time.*
  *Property values are accessible using the dot notation:
 */

let user = {
    name: "john",
    age: 30
};
console.log(`this is ${user.name} and ${user.age} years old`);
// Outpu: this is john and 30 years old
console.log(user);
//lets add job property in user
user.job = "programmer";
//change age to 31
user.age = user.age + 1;
console.log(`this is ${user.name} and ${user.age} years old and is a ${user.job}`);
//this is john and 30 years old and is a programmer
console.log(user);
//In fact there is no need of setter and getter
console.log(user["name"]);
console.log(user["job"]);
//delete age from user
delete user.age;
console.log(user);
console.log(`this is ${user.name} and ${user.age} years old and is a ${user.job}`);

///Another example

function makeFruit(name, color) {
    return {
        name,
        color
    };
};

let apple = makeFruit("apple", "red");
console.log("apple : " + apple);//apple : [object Object]
console.log("MakeFruit: " + makeFruit);//all definitation displayed
console.log(`${apple.name} is ${apple.color}`);//correctly displayed apple is red

//can I add properties in makeFruit
makeFruit.age = "3 days";
console.log("Age :" + apple.age);

let fruit2 = makeFruit("orange", "red", "5 days");
console.log("Age :" + fruit2.age);//age is not ddefined here as well
//may be it is created but not returned
console.log(makeFruit.prototype)//not attached

//Exerciese
/*
We have an object storing salaries of our team: 
Write the code to sum all salaries and store in the variable sum
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sumSal=0;
for(key in salaries){
    sumSal+=salaries[key];
}
console.log("total Salary : "+sumSal);

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplier(obj){
    for(key in obj){
        if(typeof obj[key]=="number"){
            obj[key]*=2;
        }
    }
}
console.log(menu);
multiplier(menu);
console.log(menu);

/*---------------------------------------------------------------------------------*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
    console.log(this);
  }
  
  console.log("First call");
  let jack = new User("Jack");//In this context, this inside User refers to the object jack
  //User {name: 'Jack', isAdmin: false}
  
  //second call treat as obj
  User("rabi");
  //In this context, this inside User refers to Window object,
  //here treated as function
  //Window {window: Window, self: Window, document: document, name: 'rabi', location: Location, …}

  // how function turn into object,, clearly shown