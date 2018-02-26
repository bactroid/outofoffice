const {promisify} = require('util')
const fs = require('fs')
const date = require('./date')

const readFileAsync = promisify(fs.readFile)

// getMessageJSON :: null -> Promise JSON
const getMessageJSON = () =>
      readFileAsync('./message.json', 'utf8').then(JSON.parse)

// getMessageText :: null -> Promise String
const getMessageText = () => getMessageJSON().then(x => x.message)

const replaceDatePlaceholders = (startDate, endDate) => {
  return getMessageText()
    .then(s => s.replace('STARTDT', date.outputOutlookDateString(startDate)))
    .then(s => s.replace('ENDDT', date.outputOutlookDateString(endDate)))
}

module.exports = {
  getMessageJSON,
  getMessageText,
  replaceDatePlaceholders
}
