// app.js
// console.log("hello lab5");

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", printFormData);

function printFormData(event) {
    event.preventDefault();
    const txtEmail = document.getElementById("txtEmailAddr");
    const txtPassword = document.getElementById("txtPwd");
    console.log(txtEmail.value);
    console.log(txtPassword.value);
}