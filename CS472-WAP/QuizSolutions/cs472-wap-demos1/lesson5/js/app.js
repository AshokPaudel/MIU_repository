// app.js -- hello world example

console.log("Hello JavaScript");

var address = {
    street: "Main street",
    "house number": 1000,
    apartment: {
        floor: 3,
        number: 301
    }
}

console.log(address);
console.log(address.street);
console.log(address["house number"]);
console.log(address.apartment.floor + ", " + address.apartment.number);

// ---------------------
// Lexical environment
// Global env
console.log(this);
var eye = 0;

// Function env
function sumNumber0(numbers, j) {
    var sum = 0;
    console.log(sum);
}

// Block env
function sumNumbers1(numbers) {
    var sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const j = "block env";
        sum += numbers[i];
        sumNumber0(numbers, j);
    }
    // console.log(j);
    // console.log(i);
    return sum;
}
console.log(sumNumbers1([1,2,3]));
// console.log(sum);
// alert("Hello JavaScript");