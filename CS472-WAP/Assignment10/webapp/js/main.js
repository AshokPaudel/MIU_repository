//main.js
//Assignment 10, Q.N 1

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const persons =[
    new Person("Ana Smith",new Date(1998,11,15)),
    new Person("Bob Jane",new Date(1945,10,16)),
    new Person("Carlos Slim Helu", new Date(1976,8,24))
];

persons.forEach(p=>console.log(p.toString()));

const emp= new Employee("Jim Hanson ",null,245900,null);
emp.doJob("Software Engineer");