import { day2a, day2b, stringToIntArray , add, multiply} from './day2'


test('example 1', () => {
    expect(day2a('1,0,0,0,99')).toBe('2,0,0,0,99');
});

test('example 2', () => {
    expect(day2a('2,3,0,3,99')).toBe('2,3,0,6,99');
});

test('example 3', () => {
    expect(day2a('2,4,4,5,99,0')).toBe('2,4,4,5,99,9801');
});

test('example 4', () => {
    expect(day2a('1,1,1,4,99,5,6,0,99')).toBe('30,1,1,4,2,5,6,0,99');
});

test('example 1b', () => {
    expect(day2b([1,0,0,0,99])).toEqual([2,0,0,0,99]);
});

test('example 2b', () => {
    expect(day2b([2,3,0,3,99])).toEqual([2,3,0,6,99]);
});

test('example 3b', () => {
    expect(day2b([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
});

test('example 4b', () => {
    expect(day2b([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
});

test('string to array of nummber', () => {
    expect(stringToIntArray('1,2,3,4,5,6')).toEqual([1,2,3,4,5,6]);
});

test('Add Instruction', () => {
    const got = add([1,2,3,4,0],2,3)
    expect(got).toBe(7);
})

test('Mulitply Instruction', () => {
    const got = multiply([1,2,3,4,0],2,3)
    expect(got).toBe(12);
})