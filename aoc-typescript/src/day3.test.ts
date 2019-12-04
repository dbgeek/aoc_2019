import { Board, Wire } from './day3';
describe('Drawing wire to board', () => {
    test('test1 day3a', () => {
        let board = new Board();
        board.drawWire({name: 1},['R75','D30','R83','U83','L12','D49','R71','U7','L72']);
        board.drawWire({name: 1},['U62','R66','U55','R34','D71','R55','D58','R83']);
        expect(board.getDay3a()).toBe(159);
    })
    test('test2 day3a', () => {
        let board = new Board();
        board.drawWire({name: 1},['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51']);
        board.drawWire({name: 1},['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']);
        expect(board.getDay3a()).toBe(135);
    })
    test('test1 day3b', () => {
        let board = new Board();
        board.drawWire({name: 1},['R75','D30','R83','U83','L12','D49','R71','U7','L72']);
        board.drawWire({name: 1},['U62','R66','U55','R34','D71','R55','D58','R83']);
        expect(board.getDay3b()).toBe(610);
    })
    test('test2 day3b', () => {
        let board = new Board();
        board.drawWire({name: 1},['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51']);
        board.drawWire({name: 1},['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']);
        expect(board.getDay3b()).toBe(410);
    })
});