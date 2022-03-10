// app.js
// var x = 3;
// function foo() {
//     // var x = 4;
//     console.log(x);
// }

// foo();
// console.log(x);

// function a() {
//     for(var x = 1; x < 10; x++) {
//         console.log("x inside loop" + x);
//     }
//     console.log("x outside loop" + x);
// }

// function a() {
//     for(let x = 1; x < 10; x++) {
//         console.log("x inside loop" + x);
//     }
//     console.log("x outside loop" + x); // runtime error
// }

// a();

// const f = function() {};
// const student = {
//     "name": "Anna"
// }

// Nested function scope
// function b() {
//     // x = undefined
//     a();
//     function a() {
//         console.log(x); // 20
//     }
    
//     // var x = 10;
//     console.log(x); // 
// }
// b();
// var x = 20;
// console.log(x)

// var vs let/const declarations
// var declared variable is hoisted
// console.log(x);
// var x;
// x = 1;

// let declared variable is NOT hoisted like var
// console.log(y);
// let y;
// y = 1;

// const declared variable is NOT hoisted like var
// console.log(z);
// const z = 1;

// Scope Example 4:
var x = 10; // 10

function main() {
  console.log("x1  is:" + x); // undefined
  //x = 20;
  console.log("x2  is:" + x); // 20
  if (x > 0) {
    let x = 30; // not block scope bcos not let/const
    console.log("x3  is:" + x); // 30
  }
  console.log("x4  is:" + x); // 30
  var x = 40; 
  var f = function(x) {
    console.log("x5  is:" + x); // 50
  };
  f(50);
  console.log("x6  is:" + x); // 40
}
main();
console.log("x7  is:" + x); // 10


