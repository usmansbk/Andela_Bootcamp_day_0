const isPrime = (number) => {
	for (let counter = 2; counter <= Math.trunc(number/2); counter++) {
		if (number % counter == 0) return false;
	}
	return true;
}

const getPrimes = (n)=> {
	let array = [];
	for (let number = 2; number <= n; number++) {
		if (isPrime(number)) {
			array.push(number);
		}
	}
	return array;
}

console.log(getPrimes(20));