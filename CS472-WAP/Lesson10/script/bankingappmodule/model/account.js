/***
 * account.js
 */

export class Account{
    constructor(accountNo, customerName, balance){
        this.accountNo=accountNo;
        this.customerName=customerName;
        this.balance=balance;
    }

    get accountNo(){
        return this._accountNo;
    }
    get customerName(){
        return this._customerName;
    }
    get balance(){
        return this._customerName;
    }
    set accountNo(value){
        this._accountNo=value;
    }
    set customerName(value){
        this._customerName=value;
    }
    set balance(value){
        this._balance=value;
    }
}