'use strict'

const getInfo = require('./getInfo')

module.exports = (person, callback) => {
  const personInfo = getInfo(person)
  if (person.employments) {
    let result = false
    person.employments.forEach((employment) => {
      let id = employment.employment[0].category[0].$.id
      personInfo.department = employment.employment[0].positions[0].position[0].positionStatistics[0].businessNumber[0].$.name
      personInfo.organizationNumber = employment.employment[0].positions[0].position[0].positionStatistics[0].businessNumber[0].$.value
      if (id === 'L' || id === 'PL' || id === 'ML') {
        result = true
      }
      return callback(result)
    })
  }
}

