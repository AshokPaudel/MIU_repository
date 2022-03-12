//patient.js
export class Patient {
  #patientIdNumber = null;
  #firstName = null;
  #middleInitials = null;
  #lastName = null;
  #dateOfBirth = null;
  #ddlDepartment = null;
  #radioIsOutPatient = null;

  constructor(
    patientIdNumber,
    firstName,
    middleInitials,
    lastName,
    dateOfBirth,
    ddlDepartment,
    radioIsOutPatient
  ) {
    this.#patientIdNumber = patientIdNumber;
    this.#firstName = firstName;
    this.#middleInitials = middleInitials;
    this.#lastName = lastName;
    this.#dateOfBirth = dateOfBirth;
    this.#ddlDepartment = ddlDepartment;
    this.#radioIsOutPatient = radioIsOutPatient;
  }

  getPatientIdNumber() {
    return this.#patientIdNumber;
  }
  getFirstName() {
    return this.#firstName;
  }
  getmiddleInitials() {
    return this.#middleInitials;
  }
  getLastName() {
    return this.#lastName;
  }
  getDateOfBirth() {
    return this.#dateOfBirth;
  }
  getDdlDepartment() {
    return this.#ddlDepartment;
  }
  getRadioIsOutPatient(){
      return this.#radioIsOutPatient;
  }
}
