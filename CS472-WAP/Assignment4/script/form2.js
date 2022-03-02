function display(){
    console.log("Hello js")
    const prodNumField=document.getElementById("productNumber");
    const prodNameField=document.getElementById("name");
    const unitPriceField=document.getElementById("unitPrice");
    const stockQuantityField=document.getElementById("stockQuantity");
    const supplierField=document.getElementById("supplier");
    const suppliedDateField=document.getElementById("suppliedDate");


// display
    alert(`Product Number :${prodNumField.value}`);   
    alert("product Name : "+prodNameField.value);    
    alert("Unit Price :"+unitPriceField.value);
    alert("Stock Quantity :"+stockQuantityField.value);
    alert("Supplier :"+supplierField.value);
    alert("Supplied Date : "+suppliedDateField.value);
   


}