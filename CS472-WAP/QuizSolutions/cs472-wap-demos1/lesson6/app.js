// app.js

//-- UnObstrusive JS


// function okClick() {
//     alert("Button ok is clicked");
// }
// var btnOk = document.getElementById("btnOk");
// btnOk.onclick = okClick;

window.onload = function() {
    
    // function okClick() {
    //     alert("Button ok is clicked");
    // }
    var btnOk = document.getElementById("btnOk");
    // btnOk.onclick = function() { // anonymous function as event handler
    //     alert("Button ok is clicked");
    // };
    btnOk.onclick = () => { // arrow function as event handler
        alert("Button ok is clicked");
    }; 
    // btnOk.addEventListener("click", okClick);
    // btnOk.addEventListener("click", function() {
    //     alert("Button ok is clicked");
    // })
};

// Not polluting the global namespace
// function okClick() {
//     alert("Button ok is clicked");
// }

