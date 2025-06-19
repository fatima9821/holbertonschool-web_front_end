function countPrimeNumbers() {
  let count = 0;

  for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return count;
}

const startTime = performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);

