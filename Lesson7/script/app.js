// function f(){
//     x=40;
// }
console.log(x);

function a() {
    var x;//because we redefined
    console.log(" inside a: "+x);
    }
    function b() {
        var x = 20;
        a();
    }
    var x = 30;
    b();
    console.log(x);
var x=20;


//Example 4

var x = 10;
function main() {
  console.log("x1 is:" + x);
  x = 20;
  console.log("x2 is:" + x);
  if (x < 0) {
    var x = 30; //regardless of the condition match or not, this x is hoisted
    console.log("x3 is:" + x);
  }
  console.log("x4 is:" + x);
  var x = 40;
  var f = function (x) {
    console.log("x5 is:" + x);
  };
  f(50);
  console.log("x6 is:" + x);
}
main();
console.log("x7 is:" + x);