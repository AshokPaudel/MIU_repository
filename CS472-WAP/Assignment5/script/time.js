async function showtime(){
    // console.log("hello");
    
   
                    // const newP=document.createElement("p")
    // const newContent = document.createTextNode(timeString);
    // newP.appendChild(newContent);
    // const timeformField=document.getElementById("timeform");
    // document.body.insertBefore(timeformField,newP);
    // console.log(timeString);
    let timeField=document.getElementById("timePara");
    while(true){
        let tt=getTime();
        timeField.innerHTML=tt;
        await new Promise(resolve => setTimeout(resolve, 1000));

    }

    timeField.innerHTML=setTimeout(getTime(), 1000);
    // console.log(timeField.value);
    // showtime();

}
function getTime(){
    let now= new Date();
    let timeString =now.getFullYear() +"-"+now.getMonth()+"-"+now.getDate()
                    +" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    return timeString

}