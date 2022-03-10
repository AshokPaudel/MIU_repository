//HolyCross Medical Cener
document.getElementsByName("opd").required=true;

var formSubmit =document.getElementById("formID");
formSubmit.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("default prevented");

});