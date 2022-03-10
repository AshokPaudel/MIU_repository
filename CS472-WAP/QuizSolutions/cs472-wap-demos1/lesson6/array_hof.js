// array_hof.js
//higher order functions

const elements = [
    "hydrogen",
    "helium",
    "lithium",
    "Beryllium"
];

// var result = elements.map(function(element) {
//     return element.length;
// });

// result.forEach((s) => console.log(s));
// result.forEach(console.log);

// elements.map(function(element) {
//     return element.length;
// }).forEach(s => console.log(s));

// const elemsLongerThan7 = elements.filter(function(elem) {
//     return elem.length > 7;
// });
// const elemsLongerThan6 = elements.filter((elem) => elem.length > 6);
// elemsLongerThan6.forEach(elem => console.log(elem));

// elements.filter((elem) => elem.length > 6)
//     .forEach(elem => console.log(elem));

// Lab 5 - Q7 solution
// Option 1: Using Imperative programming
// const filterLongWords = function(words, i) {
//     const result = [];
//     for(let n = 0; n < words.length; n++) {
//         if(words[n].length > i) {
//             result.push(words[n]);
//         }
//     }
//     return result;
// };
// filterLongWords(elements, 7).forEach(e => console.log(e));

// Option 1: Using Functional programming

// const filterLongWordsFunc = (words, i) => words.filter(w => w.length > i);
// filterLongWordsFunc(elements, 7).forEach(e => console.log(e));

// Array.reduce
// const nums = [1,2,3,4,5];
// const sum = nums.reduce((acc, val) => acc + val);
// console.log(sum);

// const sumAndAdd10 = nums.reduce((acc, val) => acc + val, 10);
// console.log(sumAndAdd10);

// const result = elements.reduce((acc, s) => acc + ", " + s, "");
// console.log(result);

// var i;
// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }
// console.log(i);

// 
// let i = 0;
// while(i <= 5) {
//     var isum = 0;
//     console.log(i);
//     i++; // i = i + 1;
// }
// console.log(isum);

// const calcSumArgs = function() {
//     return Object.values(arguments).reduce((sum, n) => sum+n);
// };
// console.log(calcSumArgs(1,2,3));

function doubler(x) {
    return 2 * x;
}

const a = [1,2,3];
const r = a.map(doubler);
console.log(r);