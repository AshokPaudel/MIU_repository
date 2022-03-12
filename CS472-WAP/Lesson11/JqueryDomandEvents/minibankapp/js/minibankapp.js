// minibankapp.js
/***
 * @author ashok
 * @since 2022-03
 */
"use strict"
import {Account} from  "./model/account.js";
console.log("Hello MiniBankApp");
//Avoid polluting global namespace/environmen
//Method1
/*
(function(){
    console.log("wrapper minibank module loaded");
    const formNewAccount=document.getElementById("formNewAccount");
    formNewAccount.addEventListener("submit",createAccount);

    function createAccount(){
        console.log("New Account created");
    }
})();
*/
//Method2
//Using window.onload
/*
window.onload=function(){
    console.log("minibank module loaded - via window.onload");
    const formNewAccount=document.getElementById("formNewAccount");
    formNewAccount.addEventListener("submit",createAccount);

    function createAccount(){
        console.log("New Account created");
    }
}
*/
//Method3
//Using jQuery
$(document).ready(function(){
    const accountsData=[];
    console.log("minibank module loaded - via jQuery");
    $("#formNewAccount").submit(function(event){
        event.preventDefault();
        console.log(event.target);
        const accountNumber=$("#txtAccountNo").val();
        const customerName=$("#txtCustomerName").val();
        const accountType=$("#ddlAccountType").val();

        const newAccount = new Account(accountNumber, customerName,accountType);
        createAccount(newAccount);
        accountsData.push(newAccount);
        // const accountData=`Account Number: ${accountNumber} \nCustomer Name:${customerName}\nAccount Type:${accountType}`;
        // alert(accountData)

    })

    function createAccount(newAccount){
       
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);//append at the end
        const newCellRowId = newRow.insertCell(0);
        const nextRowId=accountsData.length+3;
        const strNewRowId = document.createTextNode(`${nextRowId}.`);
        // alert(strNewRowId);
        newCellRowId.appendChild(strNewRowId);//a
        const newCellAccountNo = newRow.insertCell(1);
        const strNewRowAccountNo = document.createTextNode(`${newAccount.getAccountNo()}`);
        newCellAccountNo.appendChild(strNewRowAccountNo);

        const newCellCustomerName = newRow.insertCell(2);
        const strNewRowCustomerName = document.createTextNode(`${newAccount.getCustomerName()}`);
        newCellCustomerName.appendChild(strNewRowCustomerName);


        const newCellTypeOfAccount = newRow.insertCell(3);
        const strNewRowTypeOfAccount = document.createTextNode(`${newAccount.getAccountType()}`);
        newCellTypeOfAccount.appendChild(strNewRowTypeOfAccount);




        console.log("New Account created");
    }
});