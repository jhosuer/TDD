const stringRemoverSolution = require('./stringRemoverSolution');
test('that the sums the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([1,2,30],[2,30,4],[3,40,5])).toBe(100);
});

test('that  sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([1,20,3],[2,30,4],[30,4,5],[])).toEqual(80);
});

test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([10,10,10],[20,20,20],[30,30,30])).toEqual(60);
});


test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([-10,20,30],[20,30,-40],[30,-40,50])).toEqual(110);
});

test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([10,20,30,50,60],[21,30,41],[20,40,50],[10,20,30,50],[20,30,40],[30,40,50,20,100])).toEqual(330);
});

test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([-20,10,-40],[-30,-60,60],[30,-20,-50])).toEqual(100);
});

test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([1,2,3],[2,3,4],[3,4,5])).toEqual(0)
});


test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([],[],[],[])).toEqual(0)
});

test('that sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution([3.33,2.33,3.33],[2.22,3.33,4.32],[3.22,4.9,5.2])).toBe(0);
});

test('that d sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution(['a','b',30],['c',30,4],['d',4,50],[])).toBe(110);
});

test('that does not  sum the highest numbers in each array',() =>{
	
	expect(stringRemoverSolution(['a','b','c'],['d','e','f'],['g','h','i'])).toBe(0);
});



