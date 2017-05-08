
const getPrimes = (n)=> {
	if (isNaN(n) || n <= 0) return undefined
	let array = [];
	for (let number = 2; number <= n; number++) {
		if (number % 2 == 0 && number > 2) {
			continue;
		}
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