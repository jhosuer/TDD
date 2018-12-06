const concatArrays = require('./techie/solution');

test('a simple case where the two arrays are of different lengths', () => {
    expect(concatArrays([1,5,4,6,8],[7,1,0,6])).toEqual([1,7,5,1,4,0,6,6,8]);
});

test('a simple case where both arrays are of the same length', () => {
    expect(concatArrays([1,5,4,6,8],[7,1,0,6,3])).toEqual([1,7,5,1,4,0,6,6,8,3]);
});

test('returns an empty array when both arrays are empty', () => {
    expect(concatArrays([],[])).toEqual([]);
});

test('returns the other array when one array is empty', () => {
    expect(concatArrays([1,5,4,6,8],[])).toEqual([1,5,4,6,8]);
});

test('a simple case of arrays of mixed elements type', () => {
    expect(concatArrays(['k',5,'5',6,'d'],['h','y'])).toEqual(['k','h',5,'y','5',6,'d']);
});
