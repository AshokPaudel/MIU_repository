/***
 * account.js
 * @author ashok
 * @since 2022-03-10
 */
"use strict"

export class Account{
    #accounNo = null;
    #customerName = null;
    #accountType = null;
    constructor(accountNo,customerName,accountType){
        this.#accounNo = accountNo;
        this.#customerName = customerName;
        this.#accountType = accountType;
    }
    getAccountNo(){
        return this.#accounNo;
    }
    getCustomerName(){
        return this.#customerName;
    }
    getAccountType(){
        return this.#accountType;
    }
    setAccountNo(accounNo){
        this.#accounNo = ccounNo;
    }
    setCustomerName(customerName){
       this.#customerName = customerName;
    }
    setAccountType(accountType){
        this.#accountType = accountType;
    }
    toString(){
        return `{AccountNumber: ${this.#accounNo}, CustomerName: ${this.#customerName}, AccountType: ${this.#accountType}}`;
    }

}