const message = require('./src/message')

if (process.argv.length !== 4) {
  console.log('Usage: outofoffice start-date end-date')
  process.exit()
}

const printMessage = async (start, end) => {
  const text = await message.replaceDatePlaceholders(start, end)
  console.log(text)
}

printMessage(process.argv[2], process.argv[3])
