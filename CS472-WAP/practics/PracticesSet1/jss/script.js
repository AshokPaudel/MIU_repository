//script for census 
//create watch

// let timeField=document.getElementById("clock");

setInterval(showTime,1000);

function showTime(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let now =new Date();
    let timeString = weekday[now.getDay()] +", "+now.getDate() +" "+ month[now.getMonth()] +" "+now.getFullYear() +" -"
                    +now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    document.getElementById("clock").innerHTML=timeString;
}
showTime();

var submitBtn=document.getElementById("submitForm")
submitBtn.addEventListener("submit", function(event) {
    event.preventDefault();
   
    //console.log(document.getElementById("fullname").value);
    console.log(document.getElementById("fullname").value);
    console.log(document.getElementById("citizen").value);
    console.log(document.getElementById("ssnnumber").value);
    console.log(document.getElementById("inputState").value);
    console.log(document.getElementById("seniorcitizen").value);


   
});  
// submitBtn.onclick=displayItem();


/*
123-45-6789
*/
//conses form javascript display

function displayItem(){
    console.log("Hello");
    var fullname=document.getElementById("fullname");
    console.log(fullname.value);
}