const list = require('./test/data/teachers.json')
const vismaFilter = require('./index')

vismaFilter(list, (err, results) => {
  console.log(err || results)
})
