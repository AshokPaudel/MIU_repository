//find first N elements on the array
"use strict";
/**
 * This functions finds and returns first N elements on any array.
 * If the lenght of the array is less than N, then funcion throws an 
 * Error with error message
 * @returns subset of Array
 */
Array.prototype.findFirstN=function(n){
    if(n>this.length)
     throw new Error("Insufficient Items");
    const firstNElements=[];
    for(let i=0;i<n;i++){
            firstNElements.push(this[i]);
    }
    return firstNElements;
}
const number=[3,6,2,1];
console.log("using slice API :"+number.slice(0,2));
const names=["ashok","bob","charlie"];
try {
    const result=number.findFirstN(3);
    console.table(result); 

    const result2=names.findFirstN(2);
    console.table(result2); 
} catch (error) {
    console.log(error.message);
    
}
