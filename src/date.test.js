const {outputOutlookDateString} = require('./date.js')

describe('outputOutlookDateString', () => {
  test('Returns a string in the format "Monday, February 26" based on ISO 8601 date string', () => {
    expect(outputOutlookDateString('2018-02-26')).toBe('Monday, February 26')
  })
})
