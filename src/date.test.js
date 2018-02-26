const {getDayOfWeek} = require('./date.js')

describe('dayOfWeek', () => {
  test('Returns a String with English day of week for an ISO 8601 date string', () => {
    expect(getDayOfWeek('2018-02-26')).toBe('Monday')
  })
})
