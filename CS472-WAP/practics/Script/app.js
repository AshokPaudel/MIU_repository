//app.js
//practice index

const myfunc = function (a, b) {
  return a * b;
};
function apply(a, b, func) {
  return myfunc(a, b); //this will return number
}
const x = apply(2, 3);
console.log(x);
console.log(typeof x);

//return function

function getAlert(str) {
  return function () {
    alert(str);
  };
}
const try1 = getAlert("hello");
console.log(typeof try1);
// try1();

//arrow function

const mul = (a, b) => a * b;
console.log(mul(2, 2));

//reduce for objects

let objArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];

let sum = objArray.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue.x,
  0
);
console.log(sum);

//the concept of accumulator and currentvalue is important, so as the naming convention to understand
//notice accumulator doesn't have property x whereas currentvalue has property x
//0 is initial value; initial value is required for objects to reduce

//for in example, used for objects

person = {
  name: "ashok",
  age: 18,
  occupation: "student",
  nationality: "Nepal",
  "Phone number": "Try again",
};

for (key in person) {
  console.log("key : " + key + ", value : " + person[key]);
}
//same concept to loop through array of objects
console.log("same concept to loop through array of objects");

objArray.forEach((x) => {
  for (key in x) {
    console.log("key : " + key + ", value :" + x[key]);
  }
});

for (i of objArray) {
  console.log(i); //print each element of array, in this case object
}

let letters = ["x", "y", "z"];

for (i in letters) {
  console.log(i); //0,1,2
}
for (i of letters) {
  console.log(i); //x,y,z
}
//missing arguments ignored, excess arguments ignored let's check

function myfunc2(a, b) {
  console.log(a);
  console.log(b);
  for (key in arguments) {
    console.log("invoked using argument object =" + arguments[key]);
  }
  // if(a||a==0){
  //     console.log(a);
  // }
  // if(b||b==0){
  //     console.log(b);
  // }
}
console.log("calling my func2");
console.log("calling with a=1 only ");
myfunc2(1);
console.log("calling with a=1 b=2 ");
myfunc2(1, 2);
console.log("calling with a=1 b=2  and 4,5,6");
myfunc2(1, 2, 4, 5, 6);

//timer practices
//SetInterval
console.clear();
function display(str = "Hello I am ashok") {
  console.log(str);
}
timer = null;
function delayMSg2(str) {
  if (timer == null) {
    timer = setInterval(display, 3000, str); //setInterval returns timer
    timer = setTimeout(() => {}, display, 3000, str);
  } else {
    clearInterval(timer); //this will clear the timer
  }
  // console.clear();
  console.log("I am outside of if where setInterval is defined");
  return;
}
// delayMSg2("I live in fairfield");
//If timer is not cleared, the display function will be called repeatedly
//set time interval calls the same function on certain delay,
//it is not useful to have timeout between two different operations ??
//The function delayMSg2 will be visited(top-bootom execution) only once, but setInterval is executed in a loop
//you can pass arguments of target function in setInterval/setTimeout setInterval(fn,delayms,argument1,...);

//set timeout repeatedly

//await demonstration
async function awaitDemo(a, b) {
  console.log(a);
  await sleep(4000);
  console.log(b);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//await is only valid in async function

// awaitDemo(3,"Hello");

//hoisting
console.log("hoisting demo");
console.log(h);
console.log(hj);
var h;
var hj = 9;
f1();
function f1() {
  console.log("fan");
}

//Scope Example1
function encloseme() {
  console.log("goingthrough encloseme");
  function a() {
    console.log(x); // consult     Global for x and print 20     from Global
  }
  function b() {
    var x = 10;
    a(); // consult Global for a
  }
  var x = 20;
  b();
}
encloseme();
