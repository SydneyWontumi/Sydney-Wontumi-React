//Day 3 Exercise
// Task 1: Function to Calculate Area
function calculateArea(width, height = 1) {
  return width * height;
}


console.log(`Area (5, 3): ${calculateArea(5, 3)}`);
console.log(`Area (5): ${calculateArea(5)}`);

//  Function to Calculate Area using Arrow Function
const calculateAreaArrow = (width, height = 1) => width * height;

console.log(`Area (7, 2): ${calculateAreaArrow(7, 2)}`);
console.log(`Area (7): ${calculateAreaArrow(7)}`);


// Task  Scope and Parameters

// Global variable
let message = "Global greeting";

// Arrow function with local variable and default parameter
const sayHello = (name = "User") => {
  let message = "Hello from function";
  return `${message}, ${name}!`;
};

// Output
console.log(message); // Prints global message
console.log(sayHello("Alice")); // Uses provided name
console.log(sayHello()); // Uses default parameter


//Miniproject

// Task list
const tasks = [
  { name: "Study", priority: 3 },
  { name: "Shop", priority: 1 },
  { name: "Call", priority: 2 }
];

// Closure for counting how many times prioritizeTasks is called
const createTaskCounter = () => {
  let count = 0;
  return () => ++count;
};

const taskCounter = createTaskCounter();

// Arrow function to prioritize tasks
const prioritizeTasks = (taskArray, minPriority = 1) => {
  taskCounter(); // Increment counter

  return taskArray
    .filter(task => task.priority >= minPriority)
    .sort((a, b) => b.priority - a.priority);
};

// Test cases
const prioritized1 = prioritizeTasks(tasks);
console.log(`Prioritized Tasks (min 1):`, prioritized1);
console.log(`Function called ${taskCounter()} time(s)\n`);

const prioritized2 = prioritizeTasks(tasks, 2);
console.log(`Prioritized Tasks (min 2):`, prioritized2);
console.log(`Function called ${taskCounter()} time(s)\n`);

const prioritized3 = prioritizeTasks(tasks, 3);
console.log(`Prioritized Tasks (min 3):`, prioritized3);
console.log(`Function called ${taskCounter()} time(s)`);



