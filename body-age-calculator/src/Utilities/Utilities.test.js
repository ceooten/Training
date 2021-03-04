import {formatDate, formatPastDate} from './Utilities'

describe('Utilities', () => {

    const testDate = new Date('3/1/2021');

    it('Should format a date object to YYYY-MM-DD', () => {
        expect(formatDate(testDate)).toBe('2021-03-01');
    });

    it('Should format a date object to YYYY-MM-DD, while subtracting the provided number of years', () => {
        expect(formatPastDate(testDate, 14)).toBe('2007-03-01');
    });

})