//ONE

const scores = [85, 92, 78, 95, 88];

// Add 5 points to each score
const adjustedScores = scores.map(score => score + 5);

// Select scores >= 90
const highScores = scores.filter(score => score >= 90);

// Output
console.log(`Adjusted scores: [${adjustedScores.join(", ")}]`);
console.log(`High scores: [${highScores.join(", ")}]`);


//TWO

const student = {
  name: "Emma",
  age: 20,
  grade: "A",
  subjects: ["Math", "Science"]
};

// Destructure name and grade
const { name, grade } = student;

// Create new profile object using shorthand
const profile = {
  name,
  grade,
  school: "Tech High"
};

// Output
console.log(`Name: ${name}, Grade: ${grade}`);
console.log(`Profile: ${JSON.stringify(profile)}`);

//THREE

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge arrays using spread
const combined = [...arr1, ...arr2];

// Use reduce to calculate product
const product = combined.reduce((acc, val) => acc * val, 1);

// Create stats object
const stats = {
  combined,
  product
};

// Output
console.log(`Combined Array: [${combined.join(", ")}]`);
console.log(`Product: ${product}`);
console.log(`Stats: ${JSON.stringify(stats)}`);
    

//MINIPROJECT

// Sample inventory
const inventory = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Phone", price: 500, stock: 10 },
  { id: 3, name: "Tablet", price: 300, stock: 0 }
];

// Arrow function to manage inventory
const manageInventory = (items, action) => {
  const { type, minStock = 0 } = action;

  switch (type) {
    case "filterStock":
      return items.filter(item => item.stock > minStock);

    case "highValue":
      return items.filter(item => item.price > 600);

    case "summary":
      const totalValue = items.reduce((sum, item) => sum + item.price * item.stock, 0);
      const itemCount = items.length;
      return { totalValue, itemCount };

    default:
      return "Invalid action type";
  }
};

// ===== 🔍 Test Cases =====

const stockFiltered = manageInventory(inventory, { type: "filterStock", minStock: 3 });
console.log(`Stock > 3:\n${JSON.stringify(stockFiltered, null, 2)}\n`);

const highValueItems = manageInventory(inventory, { type: "highValue" });
console.log(`High Value Items (Price > 600):\n${JSON.stringify(highValueItems, null, 2)}\n`);

const summary = manageInventory(inventory, { type: "summary" });
console.log(`Inventory Summary:\n${JSON.stringify(summary, null, 2)}\n`);

