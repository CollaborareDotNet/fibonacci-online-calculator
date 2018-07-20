
/*
	For reference, here is the formula as described in wikipedia (https://en.wikipedia.org/wiki/Fibonacci_number)

	Fn = Fn-1 + Fn-2
		where `n` is the array index of the fibnoacci number.  


	...and here is a small sample of the fibonacci series with respective indices in an array that'd store the numbers

	array index: 	0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12,  13,  14,  15,  16,   17,   18,   19,   20
	fib value: 		0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
*/

const maxIndex = 20;//to avoid over taxing system, for demo purposes.


function validateArg(n){

	//get command line arg
	if (!n){
		return new Error(`Please specify an index.`);
		
	}

	//convert command line arg to integer
	n = parseInt(n);
	if (isNaN(n)){
		return new Error(`Argument must be an integer value.`);
	}

	//ensure unsigned int
	if (n < 0){
		return new Error('Only unsigned integers allowed');
	}

	//ensure max value for command line arg is not surpassed.
	if (n > maxIndex){
		return new Error(`For demo purposes, max value allowed is ${maxIndex}`);
	}
}


//given the last (or max) index for a fibonacci number, calculate the series and return the series as an array.
function _calcSeriesAtIndex(maxFibIndex){
	let err = validateArg(maxFibIndex);
	if (err){
		return err;
	}

	let fibAra = [0, 1];
	if (maxFibIndex > 1){
		for(let i = 2; i <= maxFibIndex; i ++){
			fibAra.push(fibAra[i-1] + fibAra[i-2]);
		}
	}

	return fibAra;
}

module.exports = function calculateSeriesAtIndex(idx){
	let result = _calcSeriesAtIndex(idx);
	if (result instanceof Error){
		return { error: result };
		}
	else {
		return { data: result };
	}
};


