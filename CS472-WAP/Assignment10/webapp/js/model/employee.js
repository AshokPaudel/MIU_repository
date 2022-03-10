//Employee.js
//Assignment 10. QN.2
import { Person } from "./person.js";

export class Employee extends Person{

    constructor(name,dateOfBirth,salary,hireDate){
        super(name,dateOfBirth);
        this.salary=salary;
        this.hireDate=hireDate;
    }
    doJob(jobTitle){
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options);
        const formattedSalary= numberFormat.format(this.salary);
        console.log(`${this.name} is a ${jobTitle} who earns ${formattedSalary}`);
    }

}