const {promisify} = require('util')
const fs = require('fs')

const readFileAsync = promisify(fs.readFile)

// getMessageJSON :: null -> Promise JSON
const getMessageJSON = () =>
      readFileAsync('../message.json', 'utf8').then(JSON.parse)

// getMessageText :: null -> Promise String
const getMessageText = () => getMessageJSON().then(x => x.message)

module.exports = {
  getMessageJSON,
  getMessageText
}
