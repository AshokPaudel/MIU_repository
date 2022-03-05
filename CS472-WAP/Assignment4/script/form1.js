function display(){
   let emailField= document.getElementById("email");
   let pwdField=document.getElementById("password");
   console.log("Email id ="+emailField.value);
   console.log("Password = "+pwdField.value);
}

formLogin.addEventListener("submit", function(event) {
   event.preventDefault();
   const txtEmail = document.querySelector("#txtEmailAddr");
   const txtPwd = document.querySelector("#txtPwd");

   console.log(txtEmail.value);
});  