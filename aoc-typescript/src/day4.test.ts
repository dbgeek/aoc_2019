import { validPassword } from './day4';

describe('Password valid', () => {
    test('test1 day4a', () => {
        const password = 111111;
        expect(validPassword(password.toString())).toBe(false);
    })
    test('test2 day4a', () => {
        const password = 223450;
        expect(validPassword(password.toString())).toBe(false);
    })
    test('test3 day4a', () => {
        const password = 123789;
        expect(validPassword(password.toString())).toBe(false);
    })
    test('test4 day4a', () => {
        const password = 1237895;
        expect(validPassword(password.toString())).toBe(false);
    })
    test('test1 day4b', () => {
        const password = 112233;
        expect(validPassword(password.toString())).toBe(true);
    })
    test('test2 day4b', () => {
        const password = 123444;
        expect(validPassword(password.toString())).toBe(false);
    })
    test('test3 day4b', () => {
        const password = 111122;
        expect(validPassword(password.toString())).toBe(true);
    })
    test('test4 day4b', () => {
        const password = 112222;
        expect(validPassword(password.toString())).toBe(true);
    })
    test('test4 day4b', () => {
        const password = '112A22';
        expect(validPassword(password)).toBe(false);
    })
    test('test4 day4b', () => {
        const password = 'A12577';
        expect(validPassword(password)).toBe(false);
    })
});