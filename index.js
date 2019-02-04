const isTeacher = require('./isTeacher')
const config = require('./config')
const async = require('async')

const find = (obj, cb) => {
  isTeacher({ id: obj.personalIdNumber, config }, (err, data) => {
    if (err) {
      console.error(err)
      return cb(err, null)
    }
    return cb(data)
  })
}

module.exports = (list, callback) => {
  async.filter(list, (obj, cb) => {
    find(obj, (data) => {
      cb(null, data)
    })
  }, (err, results) => {
    if (err) {
      return callback(err)
    }
    return callback(null, results)
  })
}
