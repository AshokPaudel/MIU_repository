// apps2.js
//"use strict";

// var eye = 1;
// var eye2 = 2;

// console.log("Eye: " + eye);
// console.log("Eye 2: " + eye2);

// function f() {
//     "use strict";
//     var eye3 = 3;
// }

// f();
// console.log("Eye 3: " + eye3);

var x = 10; 
function main() { 
	console.log("<br>x1 is " + x); 
	x = 20; 
	console.log("<br>x2 is " + x); 
	if (x > 0) { 
		var x = 30; // x=30; 
		console.log("<br>x3 is " + x); 
	} 
	console.log("<br>x4 is " + x); 
	var x = 40; // x=40; 
	var f = function(x) { 
			console.log("<br>x5 is " + x); 
		 } 
	f(50); 
	 console.log("<br>x6 is " + x); 
} 
main(); 
console.log("<br>x7 is " + x);

var i;
var i = 2;
console.log(i);
i = 8;

const anna = {
    studentId: "000-11",
    name: "Anna"
};

anna.name = "Annalise";
// anna = {};
var a = "2" + 1;
console.log(a);

console.log(Boolean(0));
console.log(Number("3"));
console.log(Number("A"));

