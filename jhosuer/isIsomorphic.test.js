const isIsomorphic = require('./isIsomorphic');

test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('dgg','bgg')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('dga','bgg')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('joshuaj','darecbd')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('bag','sad')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('craig','drag')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('','')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('hugh','crude')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('smoothy','crudy')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('cocky','smoky')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('spoof','croof')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('join','dadf')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('smack','spark')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('jack','cat')).toBe(false);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('drag','crag')).toBe(true);
});
test('compares two strings to see if they are isomorphic', () => {
    expect(isIsomorphic('hooligan','jolyman')).toBe(false);
});