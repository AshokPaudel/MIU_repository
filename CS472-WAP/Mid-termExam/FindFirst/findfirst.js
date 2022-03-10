function findFirstN( num,arr ){
    if(num>arr.length){
        console.log("Error: Insufficient items");
        return
    }else{
        let retArr =[];
        for(let i=0;i<num;i++){
            retArr.push(arr[i]);
        }
        return retArr;
    }
}
console.log(findFirstN(3,[1,2,3]));
console.log(findFirstN(6,[1,2,3,4,5]));