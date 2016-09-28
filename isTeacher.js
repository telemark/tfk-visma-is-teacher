const parseString = require('xml2js').parseString
const request = require('request')
const findTeachers = require('./lib/findTeachers')

module.exports = (options, callback) => {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.id) {
    throw new Error('Missing required input: id key')
  }
  if (!callback) {
    throw new Error('Missing required input: callback function')
  }
  const url = options.config.baseurl + options.id
  options.config.url = url
  request.get(options.config, function (err, response, xml) {
    if (err) {
      return callback(err)
    }
    if (!xml) {
      return callback(null, false)
    } else {
      parseString(xml, function (err, result) {
        if (err) {
          return callback(err)
        }
        if (result.person.$.personIdHRM === '0') {
          return callback(null, false)
        } else {
          findTeachers(result.person, (data) => {
            return callback(null, data)
          })
        }
      })
    }
  })
}
