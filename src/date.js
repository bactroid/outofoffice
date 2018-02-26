const moment = require('moment')
const R = require('ramda')

const daysOfWeek = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}

// String -> String
const getDayOfWeek = date => daysOfWeek[moment(date).isoWeekday()]

module.exports = {
  getDayOfWeek
}
