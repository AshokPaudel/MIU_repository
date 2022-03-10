//app.js censusform
window.onload = function() {

    //assign time
    // document.getElementById(displayTime).innerHTML="Sat"
    
    var btnOk = document.getElementById("submitForm");
    // btnOk.onclick = function() { // anonymous function as event handler
    //     alert("Button ok is clicked");
    // };
    btnOk.onsubmit = () => { // arrow function as event handler
        let displayString="";
        const isOpt = document.getElementById('senior').checked == true ? 'Yes' : 'No';
        // alert(isOpt);
        displayString+="citizen Id: "+document.getElementById("citizen").value;
        displayString+="\nSSN: "+document.getElementById("ssnnumber").value;
        displayString+="\nFullName: "+document.getElementById("citizen").value;
        displayString+="\nState: "+document.getElementById("inputState").value;
        displayString+="\nSenior: "+isOpt;

        alert(displayString);
    }; 
};