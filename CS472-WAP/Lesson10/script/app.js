// app.js

"use strict"


class User{
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log(`Hello , ${this.name}`);
    }
}

const userJohn = new User("John");
userJohn.sayHello();
console.log(userJohn instanceof User);
console.log(typeof User);
console.log(userJohn);

// alert(User);
// User("mina");

//javaScript getter and setter
//get name
//set name

//Student class with getter setter prototype methods

class Student{
    //can declare properties here
    constructor(studdentId,name,admissionDate,cgpa){
        this.studdentId=studdentId;
        this.name=name;
        this.admissiionDate=admissionDate;
        this.cgpa=cgpa;
    }
    //Getters and setters
    get studdentId(){
        return this._studentId;
    }
    get name(){
        return this._name;
    }
    get admissiionDate(){
        return this._admissionDate;
    }
    get cgpa(){
        return this._cgpa;
    }
    set studdentId(value){
        //some data validation check
        if(value==null){
            throw new Error("Invalid studentId data");
        }
        this._studentId=value;
    }
    set name(value){
        this._name=value;
    }
    set admissiionDate(value){
        this._admissiionDate=value;
    }
    set cgpa(value){
        this._cgpa=value;
    }

}
//Usage
const bob=new Student("000-01-0001","Bob Johns",new Date(2021,11,15),3.97);
console.log(bob);
console.log("name of bob = "+bob.name);//returns undefined if get name is commented
console.log("another way : "+bob["name"]);

//bob.name::invokes bob. get name
//variables are automatically private; function level
console.log(bob.__proto__);
Student.prototype.toString=function(){
    return `{ StudentId: ${this.studdentId} Name : ${this.name}}`;
}
console.log(bob.toString());


//Explicit methods, getName(), setName(), throw syntax error for typo

//Defining getters and setters using getXXX and setXXX methods, java way
//Also using private variables syntax

class Person{
    //private fields declaration
    role="default";
    #name=null;
    #dateOfBirth=null;
    constructor(name,dateOfBirth){
        this.#name=name;
        this.#dateOfBirth=dateOfBirth;
    }
    //gettersand setters
    getName(){
        return this.#name;
    }
    getDateOfBirth(){ return this.#dateOfBirth;}
    setName(value){
        this.#name=value;
    }
    setName(value){
        this.#dateOfBirth=value;
    }
    toString(){
        return`{Name: ${name}, DateOfBirth: ${this.dateOfBirth} }`
    }
}
const anna=new Person("Anna Smith",new Date(1988,2,15));
console.log(anna);
anna.setName("anna lynn smi")

anna.name="hihi";
console.log(anna.getName());
console.log(anna.role);
