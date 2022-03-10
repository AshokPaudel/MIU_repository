//assignment 9
"use strict"
//Q.N 1
const person={
    "name":     "",
    dateOfBirth : null,
    setName: function(name){
        this.name=name;
    },
    getName: function(){
        return this.name;
    },
    getDOB:function(){
        return this.dateOfBirth.getFullYear()+"-"+(this.dateOfBirth.getMonth()+1)+"-"+this.dateOfBirth.getDate();
        //this.dateOfBirth.toGMTString().substring(0,16);
    }
}
// console.log(person.getName());
// console.log(`The person's name is ${person.getName()}`);
// console.log(`${person.getName()} was born on ${person.getDOB()}` );

const john=Object.create(person,
    {
     "name":{
    value:"John"
    },
    dateOfBirth:{
        value:new Date(1998,11,10)
    }
});

console.log(`The person's name is ${john.getName()}`);
console.log(`${john.getName()} was born on ${john.getDOB()}` );


//Q.N2

const employee={
    salary: 0.0,
    hireDate: new Date(),
    job: "",
    doJob: function(title){
        this.job=title;
    },
    getFormattedSalary:function(){
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options);
        return numberFormat.format(this.salary);

    },
    toString:function(){
        return this.name+" is a "+this.job +" who earns "+this.getFormattedSalary();
    }
}
Object.setPrototypeOf(employee,person);

const anna=Object.create(employee,{
    "name":{
        value:"anna"
    },
    salary:{
        value:249995.50
    }
});
anna.doJob("Programmer");
console.log(anna.toString());

//make to string method to print 

//formating number
