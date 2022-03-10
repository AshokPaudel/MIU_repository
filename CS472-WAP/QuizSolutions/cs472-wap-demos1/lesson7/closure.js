// closure.js

// console.log("hello closure!!!");

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// The Closure Bug
// const funcs = [];
// var i;
// for(i = 0; i < 5; i++) {
//     funcs[i] = function() {
//         return i;
//     }
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

// Solution using ES6+ let block scope
// const funcs = [];
// for(let i = 0; i < 5; i++) {
//     funcs[i] = function() {
//         return i;
//     }
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

// Use a helper function that  returns a function with bound var, n
const helper = function(n) {
    return function() {
        return n;
    }
}
const funcs = [];
for(var i = 0; i < 5; i++) {
    funcs[i] = helper(i);
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

let arrays=[1,2,3,4,5,6];
let div=3;
console.log(arrays.filter(x=>x%3==0).length);
console.log(arrays.filter(x=>x%3==0));
