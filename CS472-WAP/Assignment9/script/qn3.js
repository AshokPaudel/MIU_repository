//Assignment 9, Question number 3
"use strict"
function Person(name,DOB){
    this.name=name;
    this.dateOfBirth=DOB;
}

const john=new Person("john",new Date(1998,11,10));

Person.prototype.toString=function(){
    return ( "name: "+this.name +" DateOfBirth: "+
    this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)+
    "-"+this.dateOfBirth.getDate()
    );
}

console.log(john.toString());