//Assignment 10 Q.N1
//person.js
export class Person{
    constructor(name,dateOfBirth){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(dob){
        this.dateOfBirth=dob;
    }
    toString(){
        const dob=this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)+"-"+this.dateOfBirth.getDate();
        return `{Name:${this.name}, DateOfBirth: ${dob}}`;
    }
}
