import { Image } from './day8';

describe('Password valid', () => {
    test('test1 day4a', () => {
        const img = new Image(2,3, [1,2,3,4,5,6,7,8,9,0,1,2]);
        expect(img.layers[0].rows).toEqual([[1,2,3],[4,5,6]]);
    })
});
