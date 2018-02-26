const moment = require('moment')

const daysOfWeek = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
}

// outputOutlookDateString :: String -> String
const outputOutlookDateString = date => moment(date).format('dddd, MMMM D, ')

module.exports = {
  outputOutlookDateString
}
