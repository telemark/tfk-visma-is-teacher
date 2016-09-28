'use strict'

module.exports = (person) => {
  const personResult = {
    firstName: person.givenName[0],
    middleName: null,
    lastName: person.familyName[0],
    fullName: person.givenName[0] + ' ' + person.familyName[0],
    username: person.authentication[0].alias[0].toLowerCase(),
    personalIdNumber: person.ssn[0],
    mail: person.contactInfo[0].email[0],
    mobilePhone: person.contactInfo[0].mobilePhone[0],
    privatePhone: person.contactInfo[0].privatePhone[0],
    department: null,
    organizationNumber: null
  }
  return personResult
}

