import { day5a, day5b, adds, equals, lessThan, multiplies, inPut, getParameterByMode, getInstruction } from './day5';

describe('Test for day', () => {
    test('getInstruction test1 day5a', () => {
        expect((getInstruction(1))).toEqual([0,0,0,0,1]);
    })
    test('getInstruction test2 day5a', () => {
        expect((getInstruction(1003))).toEqual([0,1,0,0,3]);
    })
    test('getInstruction test3 day5a', () => {
        expect((getInstruction(1102))).toEqual([0,1,1,0,2]);
    })
    test('getInstruction test3 day5a', () => {
        expect((getInstruction(1102))).toEqual([0,1,1,0,2]);
    })
    test('getParameterByMode test3 day5a', () => {
        const memory = [0,2,-4,5,6,-7,5,7,4,6]
        expect((getParameterByMode(0, memory, 4))).toEqual(5);
    })
    test('getParameterByMode test3 day5a', () => {
        const memory = [0,2,-4,5,6,-7,5,7,4,6]
        expect((getParameterByMode(1, memory, 4))).toEqual(6);
    })
    test('adds test1', () => {
        const memory = [1,2,2,5,6,-7,5,7,4,6]
        adds(2,2,5,memory)
        expect(memory).toEqual([1,2,2,5,6,4,5,7,4,6]);
    })
    test('multiplies test1', () => {
        const memory = [2,2,6,5,6,-7,5,7,4,6]
        multiplies(2,6,5,memory)
        expect(memory).toEqual([2,2,6,5,6,12,5,7,4,6]);
    })
    test('inPut test1', () => {
        const memory = [3,2,6,5,6,-7,5,7,4,6]
        inPut(2,6,memory)
        expect(memory).toEqual([3,2,6,5,6,-7,2,7,4,6]);
    })
    test('lessThan test1', () => {
        const memory = [3,2,6,5,6,-7,5,7,4,6]
        lessThan(2,6,5,memory)
        expect(memory).toEqual([3,2,6,5,6,1,5,7,4,6]);
    })
    test('lessThan test2', () => {
        const memory = [3,2,6,5,6,-7,5,7,4,6]
        lessThan(6,2,5,memory)
        expect(memory).toEqual([3,2,6,5,6,0,5,7,4,6]);
    })
    test('equals test1', () => {
        const memory = [3,2,6,5,6,-7,5,7,4,6]
        equals(6,6,5,memory)
        expect(memory).toEqual([3,2,6,5,6,1,5,7,4,6]);
    })
    test('equals test2', () => {
        const memory = [3,2,6,5,6,-7,5,7,4,6]
        equals(6,2,5,memory)
        expect(memory).toEqual([3,2,6,5,6,0,5,7,4,6]);
    })
})