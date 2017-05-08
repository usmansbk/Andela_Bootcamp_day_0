
const getPrimes = (n)=> {
	let array = [];
	for (let number = 2; number <= n; number++) {
		let isPrime = true;
		for (let counter = 2; counter <= Math.trunc(Math.sqrt(number)); counter++) {
			if (number % counter == 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			array.push(number);
		}
	}
	return array;
}

console.log(getPrimes(20));