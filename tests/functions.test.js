const functions = require('./../js/functions.js');



// discount for sub_total prices between [$1,000 , $5,000) being 3%
// state "UT" has 6.85% tax
test('2 items at $500 per item with state code "UT" is a total of $1036.445', ()=>{ 
	expect(functions.calculate(2,500,"UT")).toBe(1036.445);
});

// discount for sub_total prices between [$1,000 , $5,000) being 3%
// state "NV" has 8.0% tax
test('2 items at $500 per item with state code "NV" is a total of $1047.6', ()=>{ 
	expect(functions.calculate(2,500,"NV")).toBe(1047.6);
});

// discount for sub_total prices between [$1,000 , $5,000) being 3%
// state "TX" has 6.25% tax
test('2 items at $500 per item with state code "TX" is a total of $1030.625', ()=>{ 
	expect(functions.calculate(2,500,"TX")).toBe(1030.625);
});

// discount for sub_total prices between [$1,000 , $5,000) being 3%
// state "AL" has 4.0% tax
test('2 items at $500 per item with state code "AL" is a total of $1008.8', ()=>{ 
	expect(functions.calculate(2,500,"AL")).toBe(1008.8);
});

// discount for sub_total prices between [$1,000 , $5,000) being 3%
// state "CA" has 8.25% tax
test('2 items at $500 per item with state code "CA" is a total of $1050.025', ()=>{ 
	expect(functions.calculate(2,500,"CA")).toBe(1050.025);
});

//Test all discount ranges
//Test Boundaries
//Test negative value
//Test NaN
//Test for bad state input