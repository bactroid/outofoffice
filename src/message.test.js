const message = require('./message')

describe('getMessageJSON', () => {
  test('Returns message.json', () => {
    const expected = {
      'message': 'I will be out of the office from STARTDT through ENDDT.\n\nFor immediate assistance, please reach out the UF Computing Help Desk at 352-392-4357. Their service desk will create a support ticket and will get in touch with UFIT personnel who can assist you in my absence.'
    }

    message.getMessageJSON()
      .then(resp => {
        expect(resp).toBe(expected)
      })
      .catch(err => {
        console.error(err)
      })
  })
})
