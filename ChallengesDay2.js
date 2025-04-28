// Task 1: Prime Number Finder

let limit = 20;
let primes = [];

for (let num = 2; num <= limit; num++) {
  let isPrime = true;
  for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
    if (num % divisor === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

primes.forEach(prime => {
  console.log(`Prime: ${prime}`);
});


// Task 2: Unique Character Counter

let text = "Hello World";
let counts = {};

let cleanText = text.toLowerCase().replace(/[^a-z]/g, '');

for (let char of cleanText) {
  counts[char] = (counts[char] || 0) + 1;
}

console.log(`Unique character counts: ${JSON.stringify(counts, null, 2)}`);



// Task 3: FizzBuzz with Custom Rules

let rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
let limitFizzBuzz = 21;
let numbers = [];

for (let i = 1; i <= limitFizzBuzz; i++) {
  numbers.push(i);
}

numbers.forEach(num => {
  let output = '';

  for (let key in rules) {
    if (num % key === 0) {
      output += rules[key];
    }
  }

  console.log(`${num}: ${output || num}`);
});

