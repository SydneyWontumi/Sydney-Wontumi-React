// Challenges 

//Task 1

// Function that returns a memoized factorial calculator
const createFactorial = () => {
  const cache = {}; // closure to store cached factorials

  return (n) => {
    // Input validation
    if (!Number.isInteger(n) || n < 0) {
      return "Invalid input";
    }

    // Return cached result if available
    if (n in cache) {
      return `From cache: ${cache[n]}`;
    }

    // Calculate factorial iteratively
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    // Store in cache
    cache[n] = result;
    return `Calculated: ${result}`;
  };
};

// Create a memoized factorial function
const factorial = createFactorial();

// Test inputs
const inputs = [5, 3, 5, -1, 3.5, 0, 1];

inputs.forEach(num => {
  console.log(`Factorial of ${num}: ${factorial(num)}`);
});

//Task 2

// Arrow function to format a string based on options
const formatString = (str, options = { uppercase: false, reverse: false, trim: false }) => {
  // Validate input
  if (typeof str !== "string") {
    return "Invalid input";
  }

  let result = str;

  // Apply transformations based on options
  if (options.trim) {
    result = result.trim();
  }

  if (options.uppercase) {
    result = result.toUpperCase();
  }

  if (options.reverse) {
    result = result.split("").reverse().join("");
  }

  return `Formatted String: "${result}"`;
};

// Test cases
console.log(formatString("  hello world  "));
console.log(formatString("  hello world  ", { trim: true }));
console.log(formatString("  hello world  ", { trim: true, uppercase: true }));
console.log(formatString("  hello world  ", { trim: true, reverse: true }));
console.log(formatString("  hello world  ", { trim: true, uppercase: true, reverse: true }));
console.log(formatString(42, { uppercase: true }));

//Task 3

// Function that returns a dynamic filter function with closure for call tracking
function createFilter(condition) {
  let count = 0; // Closure to track number of filter calls

  // Validate condition
  const validConditions = ["even", "odd", "positive"];
  if (!validConditions.includes(condition)) {
    return () => "Invalid input";
  }

  // Return arrow function with filtering logic
  return (arr) => {
    // Validate input array
    if (!Array.isArray(arr)) {
      return "Invalid input";
    }

    count++; // Increment filter call count

    // Apply filter logic based on condition
    let filtered = arr.filter(num => {
      if (typeof num !== "number") return false;

      switch (condition) {
        case "even":
          return num % 2 === 0;
        case "odd":
          return num % 2 !== 0;
        case "positive":
          return num > 0;
      }
    });

    return {
      results: filtered,
      calls: count
    };
  };
}

// ====== 🔍 Example Usage ======

const evenFilter = createFilter("even");
const oddFilter = createFilter("odd");
const badFilter = createFilter("unknown");

const data = [1, 2, 3, -4, 0, -1, 8, 7, "x"];

console.log(`Even filter 1st call:`);
evenFilter(data).results.forEach(val => console.log(val));
console.log(`Call count: ${evenFilter(data).calls}\n`);

console.log(`Odd filter:`);
oddFilter(data).results.forEach(val => console.log(val));
console.log(`Call count: ${oddFilter(data).calls}\n`);

console.log(`Bad filter:`);
console.log(badFilter(data)); // Should print "Invalid input"


