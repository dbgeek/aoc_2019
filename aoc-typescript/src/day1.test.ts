import { fuelForMass, totalFuel } from './day1'

test('example 1', () => {
    expect(fuelForMass(12)).toBe(2);
});
test('example 2', () => {
    expect(fuelForMass(14)).toBe(2);
});
test('example 3', () => {
    expect(fuelForMass(1969)).toBe(654);
});
test('example 4', () => {
    expect(fuelForMass(100756)).toBe(33583);
});
test('example 3a', () => {
    expect(totalFuel(14)).toBe(2);
});
test('example 3c', () => {
    expect(totalFuel(1969)).toBe(966);
});
test('example 3b', () => {
    expect(totalFuel(100756)).toBe(50346);
});