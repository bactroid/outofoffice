const {promisify} = require('util')
const fs = require('fs')
const date = require('./date')

const readFileAsync = promisify(fs.readFile)

// getMessageJSON :: null -> Promise JSON
const getMessageJSON = () =>
      readFileAsync('./message.json', 'utf8').then(JSON.parse)

// getMessageText :: null -> Promise String
const getMessageText = (prop = 'message') => getMessageJSON().then(x => x[prop])

const replaceDatePlaceholders = (startDate, endDate) => {
  const prop = endDate
        ? 'message'
        : 'single-day'
  return getMessageText(prop)
    .then(s => s.replace('STARTDT', date.outputOutlookDateString(startDate)))
    .then(s => s.replace('ENDDT', date.outputOutlookDateString(endDate)))
}

module.exports = {
  getMessageJSON,
  getMessageText,
  replaceDatePlaceholders
}
