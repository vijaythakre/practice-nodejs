/*
let iamGlobal = 'somevalue';

if(true) {
	console.log(iamGlobal);
	
	var iamLocal = 'somelocalValue';
	console.log(iamLocal);
}

console.log(iamGlobal);
console.log(iamLocal);

*//*/===========================================================

let iamGlobal = 'somevalue';

function scopeTest() {
	if(true) {
		console.log(iamGlobal);
		
		var iamLocal = 'somelocalValue';
		console.log(iamLocal);
	}
}

console.log(iamGlobal);
console.log(iamLocal);


*///======Kings Problem==========================================
// let king = 'John';

if (true) {
	// let king = 'Sam';
	
	if (true) {
		// let king = 'Ram';
		king = 'Ram';
		console.log(king);
	}
}

if (true) {
	console.log(king);
}