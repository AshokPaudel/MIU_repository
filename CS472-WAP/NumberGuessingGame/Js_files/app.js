const randomNumber=Math.floor(Math.random()*100)+1;
// console.log("random number ="+randomNumber);
//read value of textfield

let lowOrHi =document.getElementById("lowOrHi");
let guesses=document.getElementById("previousguesses");

let guessCount=1;

function checkGuess(){
    // console.log(document.getElementById("para").textContent)
    const userGuess=Number(document.getElementById("guess").value);
    console.log(userGuess);
    if(guessCount==1){
        // console.log("Inside if statement");
        guesses.innerHTML = 'Previous guesses: '+userGuess;
    }else{
        guesses.innerHTML=guesses.textContent+" "+userGuess;
    }
    // console.log("how to pring guess inner html"+guesses.innerHTML);
    guessCount++;
    if(guessCount>10){
        document.getElementById("submitButton").disabled=true;
    }
    // guesses.value+=userGuess+' ';
    // console.log("guessCount   :"+guessCount);
    if(userGuess===randomNumber){
        lowOrHi.innerHTML="congratulations you got it right";
        lowOrHi.style.backgroundColor = 'green';
        document.getElementById("submitButton").disabled=true;
        return 0;
    }else if(userGuess<randomNumber){   
        
        lowOrHi.innerHTML="Your input is too low";
        lowOrHi.style.backgroundColor = 'red';
        return -1;
    }else{
        lowOrHi.innerHTML="Your input is too high";
        lowOrHi.style.backgroundColor = 'red';
        return 1;
    }
    

    return;
}
function pcPlay(){
    let low=0,high=100;
    let mid=0;
    console.log("Hey Hey Hey");
    let count =1;
    while(count<=10){
        mid=low+Math.floor((high-low)/2);
        // console.log(63+())
        document.getElementById("guess").value=mid;
        let ret=checkGuess();
        setTimeout(console.log, 50000,"abcd");
        // console.log("ret = "+ret)
        if(ret==0) break;
        else if(ret>0){
            high=mid-1;
        }else{
            low=mid+1;
        }
        // console.log("what is this"+document.getElementById("guess").value);
        count++;
    }
}