function add(a, b) {
	return a+b;
}

function subtract(a, b) {
	return a-b;
}

function sum(myArray) { //sum of empty array.  sum of array of one number.  Two.  Many.
	return myArray.reduce((total, current) => total + current, 0)
};


function multiply(myArray) { //multiplies two numbers.  multiplies several numbers
	return myArray.reduce((total, current) => total * current, 1)
	
	/*
	let totalProduct = 1;
	for (let i = 1; i <= myArray.length; i++) {
		totalProduct *= myArray[i-1];
	}
	return totalProduct;
	*/
	
};

function power(a, b) {//raises one number to the power of another
	return a**b;
}

function factorial(myNum) {//does factorials
	if (myNum <= 1) {
		return 1;
	} else {
		let myProduct = 1;
		for (let i = 2; i <= myNum; i++) {
			myProduct *= i;
		} // there's a way to do this recursively, but you haven't learned recusion yet.  So.  Maybe later, bro.
	return myProduct;
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}