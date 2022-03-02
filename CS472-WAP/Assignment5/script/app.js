console.log("Welcome to Javascript");

//Q.N1 return maximum of 2 
function max(i , j){
    if(i>j) return i;
    else return j;
}
//Q.N2 return maximum of 3
function maxOfThree(i,j,k){
    let m;
    // m= i>=j?(i>=k?i:k):j>=k?j:k;
    if (i>=j){
        if(i>=k) m=i;
        else m=k;
    }else{
        if(j>=k) m=j;
        else m=k;
    }
    return m;
}
//Q.N 3 check if the given character is vowel or not
function isVowel(c){
    return "aeiou".includes(c);
}
//Q.N4
//sum of elements in an array
function sum(nums){
    let result=0;
    for(let i=0;i<nums.length;i++){
        result+=nums[i];
    }
    return result;
}
//product of elements in an array
function multiply(nums){
    let result=1;
    for(let i=0;i<nums.length;i++){
        result*=nums[i];
    }
    return result;

}
//Q.N 5 reverse string
function reverse(str){
    let res="";
    for(let i=0;i<str.length;i++){
        res+=str.charAt(str.length-i-1);
    }
    return res;
}
//Q.N 6 return length of longest word in array
function findLongestWord(arr){
    let res=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>res) res=arr[i].length;
    }
    return res;

}
//Q.N 7 takes an array of words and an integer i and 
//returns a new array containing only those words that were longer than i character 
function filterLongWords(arr,len){
    let res=[];
        
    for(let i=0;i<arr.length;i++ ){
        if(arr[i].length>len){
            res.push(arr[i]);
        }
    }
    return res;

}

//Q.N 8 computeSumOfSquares use functional approach

function computeSumOfSquares(nums){
    // console.log(nums.reduce((x,y)=>x*x+y*y));
    return nums.map(x=>x*x).reduce((x,y)=>x+y);
    
}

//Q.N 9 printOddNumbersOnly 
function printOddNumbersOnly(nums){
    console.log(nums.filter(x=>x%2==1));
}
//Q.N 10 computeSumOfSquaresOfEvensOnly
function computeSumOfSquaresOfEvensOnly(nums){
    return nums.filter(x=>x%2==0).map(x=>x*x).reduce((x,y)=>x+y);
}

//Q.N 11 sum multiply elements in array
//sumf
function sumf(nums){
    return nums.reduce((x,y)=>x+y);
}
//multiplyf
function multiplyf(nums){
    return nums.reduce((x,y)=>x*y);
}

//Q.N 12 findSecondBiggest

function findSecondBiggest(nums){
    if(nums.length==0) return null;
    let big=nums[0];
    let secBig=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>big){
            secBig=big;
            big=nums[i];
        }else if(nums[i]>secBig){
            secBig=nums[i];
        }

    }


    return secBig;
}

// Q.N 13 printFibo , input length, starting val 1, starting val2
function printFibo(len, val1, val2){
    res=[val1];
    if(len>1){
        res.push(val2);
    }
    res=[val1,val2];
    for(let i=2;i<len;i++){
        res.push(res[i-2]+res[i-1]);
    }
    return res;
}

//Execute code
console.log("Maximum of 3 numbers 111,3, and 2 =" +maxOfThree(111,2,3));
console.log("Maximum of 2  numbers 3,100 ="+max(3,100) );
console.log("Is a vowel :"+ isVowel('a')+" is b vowel : "+ ","+isVowel('b'));
console.log("Sum of [1,2,3,4] = "+sum([1,2,3,4]) +", Product of [1,2,3,4] ="+multiply([1,2,3,4]));
console.log("Reverse of HELLO = "+reverse("HELLO"));
console.log("Find length of longest word in array: [Hello,My,name,is,ashok]  :"+findLongestWord(["Hello","My","name","is","ashok"]));
console.log("Get longer than 3 len words [hello, this, is me, ana] :"+filterLongWords(["hello","this","is","me","ana"],3));
console.log("Sum of Squares[1,2,3,4] = "+computeSumOfSquares([1,2,3,4]));
console.log("print odd numbers only [1,2,3,4,5,6] ");
printOddNumbersOnly([1,2,3,4,5,6])
console.log("compute sum of squares of even only [1,2,3,4,5] ="+computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
console.log(" functional::Sum of [1,2,3,4] = "+sumf([1,2,3,4]) +", Product of [1,2,3,4] ="+multiplyf([1,2,3,4]));
console.log("second big of [1,2,34,5,50] = "+findSecondBiggest([1,2,34,5,50]));
console.log("fibonacci of 10,0,1 = "+printFibo(10,0,1));