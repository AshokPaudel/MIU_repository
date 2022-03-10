/**
 * main.js
 */
import { greeting } from "./greeting.js";

import {add,subtract,multiply} from "./arithops.js"
import { Account } from "../bankingappmodule/model/account.js";

const greet = function(name){
    console.log(`greeting ${name}`);
};

greet("Anna");

console.log(add(2,3));
console.log(subtract(3,2));
console.log(multiply(4,5));

const accounts =[
    new Account("A001","Anna Smit",250),
    new Account("A002","Bob Dylan",190)
];
accounts.forEach(a=>console.log(a));