'use strict'

module.exports = (person, callback) => {
  if (person.employments) {
    let result = false
    person.employments.forEach((employment) => {
      let id = employment.employment[0].category[0].$.id
      if (['L', 'ML'].includes(id)) {
        result = true
      }
      return callback(result)
    })
  }
}

