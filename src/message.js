const {promisify} = require('util')
const fs = require('fs')

const readFileAsync = promisify(fs.readFile)

const getMessageJSON = () =>
      readFileAsync('../message.json', 'utf8').then(JSON.parse)

const getMessageText = () => getMessageJSON().then(x => x.message)

module.exports = {
  getMessageJSON,
  getMessageText
}
