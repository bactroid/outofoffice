const message = require('./message')

describe('getMessageJSON', () => {
  test('Returns message.json', async () => {
    const expected = {
      'message': 'I will be out of the office from STARTDT, through ENDDT.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.',
      'single-day': 'I will be out of the office on STARTDT.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    }

    await expect(message.getMessageJSON()).resolves.toEqual(expected)
  })
})

describe('getMessageText', () => {
  test('Returns date range text from message.json', async () => {
    const expected = 'I will be out of the office from STARTDT, through ENDDT.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    await expect(message.getMessageText()).resolves.toEqual(expected)
  })

  test('Returns the single-day text from message.json', async () => {
    const expected = 'I will be out of the office on STARTDT.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    await expect(message.getMessageText('single-day')).resolves.toEqual(expected)
  })
})

describe('replaceDatePlaceholders', async () => {
  test('Returns text from message.json with replaced date range', async () => {
    const expected = 'I will be out of the office from Monday, February 12, through Friday, February 16.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    await expect(message.replaceDatePlaceholders('2018-02-12', '2018-02-16')).resolves.toEqual(expected)
  })

  test('Returns text from message.json with replaced single date', async () => {
    const expected = 'I will be out of the office on Monday, February 12.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    await expect(message.replaceDatePlaceholders('2018-02-12')).resolves.toEqual(expected)
  })
})
