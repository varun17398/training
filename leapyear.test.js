var func = require('./leapyear')

describe('testing leap year',() => {
    it('Given year is a leap year', () => {
        expect(func(2004)).toBe(true);
    })
    it('Given year is not a leap year', () => {
        expect(func(1900)).toBe(false);
    })
    it('Given year is not a integer', () => {
        expect(func('1901')).toBe(false);
    })
})