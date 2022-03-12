//script.js
/***
 * @author ashok
 * @since 2022-03-10
 */
"use strict"
let sampleData=[];
import {Patient} from "./module/patient.js"
window.onload=( function(){
    sampleData=[
        new Patient("EP-001-000001","Ana","J","Smith",new Date(1945,1,5),"Ear, Nose and Throat","No"),
        new Patient("P-001-000002","Bob","K","Jones",new Date(1985,4,4),"Cardiology","Yes"),
        new Patient("EP-001-000003","Carlos","A","Hernandez",new Date(1957,2,13),"Cardiology","Yes")
    ];
    loadData(sampleData,0,3)

})();

//capture form data
$("#btnRegisterPatient").click(function(event){
    event.preventDefault();
    const pid=$("#patientIdNumber").val();
    const fname=$("#firstName").val();
    const middleInitials=$("#middleInitials").val();
    const lastName=$("#lastName").val();
    const dateOfBirth=new Date($("#dateOfBirth").val());
    const ddlDepartment= $("#ddlDepartment").val();
    const radioIsOutPatient= $("input[name='radioIsOutPatient']:checked").val();
    
    console.log("type of DOB   "+typeof dateOfBirth);

    const data=
        new Patient(pid,fname,middleInitials,lastName,new Date(dateOfBirth),ddlDepartment,radioIsOutPatient)
    ;
    console.log(data);
    loadData([data],0,1);
    sampleData.push(data);

//    ---------------Shree Method---------------
// jQuery Form validation: copied from shree
    var valid = true;
  var fieldsToCheck = $("#patientForm").find(":required");
  $.each(fieldsToCheck, function (index, value) {
    if ($(value).val() == "") valid = false;
  });

  if (valid == false) {
    $("#patientForm").find(".formSubmit").click();
    return false;
  }

  //jQuery Form Validation : end
  
})

function loadData(patientData, startIndex,totalData){
    const tbodyPatientsList= document.querySelector("#tbodyPatientsList");
    for(let i=startIndex;i<(startIndex+totalData);i++){
        console.log(patientData[i]);
        console.log(patientData[i].getDateOfBirth())

        const dateStr=(patientData[i].getDateOfBirth()+"").substring(0,15);
        const row=`<tr>
                    <td> ${patientData[i]. getPatientIdNumber()}</td>
                    <td> ${patientData[i].getFirstName()}</td>
                    <td> ${patientData[i].getmiddleInitials()}</td>
                    <td> ${patientData[i].getLastName()}</td>
                    <td> ${dateStr}</td>
                    <td> ${patientData[i].getDdlDepartment()}</td>
                    <td> ${patientData[i].getRadioIsOutPatient()}</td>
                    </tr>`;
        $("#tbodyPatientsList").append(row);
    }
    $("#patientForm")[0].reset()
}
$(".checkbn").change(function(){
    const opd=  $("#chkShowOutPatients")[0].checked;
    const elder= $("#chkElderlyPatients")[0].checked; 
  
    let refreshData=sampleData;
    if(opd){
        refreshData=refreshData.filter(x=>x.getRadioIsOutPatient()=="Yes");
    }
    if(elder){
        refreshData=refreshData.filter(x=>getAge(x.getDateOfBirth())>=65)

    }
    $("#tbodyPatientsList").html("");
    loadData(refreshData,0,refreshData.length);
    
})

function getAge(dateOfBirth){
    const today=new Date();
    console.log(typeof dateOfBirth);
    let age=today.getFullYear()-dateOfBirth.getFullYear();
    const month=today.getMonth()-dateOfBirth.getMonth();
    if(month<0||(month === 0 && (today.getDate()< dateOfBirth.getDate()))){
        age--;
    }
    return age;
}