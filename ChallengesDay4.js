//TASK 1

// Arrow function to flatten a nested object
const flattenObject = (obj) => {
  const flatten = (current, parentKey = "") => {
    return Object.entries(current).reduce((acc, [key, value]) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        // Recursively flatten nested objects
        return { ...acc, ...flatten(value, fullKey) };
      } else {
        acc[fullKey] = value;
        return acc;
      }
    }, {});
  };

  return flatten(obj);
};


const user = {
  user: {
    name: "Alice",
    age: 25,
    address: {
      city: "Accra",
      zip: "00233"
    }
  },
  active: true
};

const flatUser = flattenObject(user);
console.log(`Flattened Object:\n${JSON.stringify(flatUser, null, 2)}`);


//TASK 2

// Arrow function to group array items by a given key
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    const groupKey = item[key];

    // If the key doesn't exist yet, create an array; else spread the existing and add new item
    return {
      ...acc,
      [groupKey]: [...(acc[groupKey] || []), item]
    };
  }, {});
};


const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "Dave", role: "user" },
  { name: "Eve", role: "guest" }
];

const groupedByRole = groupBy(people, "role");

// Output the result
console.log(`Grouped by Role:\n${JSON.stringify(groupedByRole, null, 2)}`);


//TASK 3

// Arrow function to transform data based on a config object
const transformData = (arr, config) => {
  // Validate inputs
  if (!Array.isArray(arr) || typeof config !== 'object') {
    return "Invalid input";
  }

  // Destructure config properties with defaults
  const { rename = {}, filter = {}, add = {} } = config;

  return arr
    // Filter items based on config.filter
    .filter(item => {
      return Object.entries(filter).every(([key, value]) => item[key] === value);
    })
    // Map items to rename keys and add new properties
    .map(item => {
      // Rename keys
      const renamedItem = Object.entries(item).reduce((acc, [key, value]) => {
        const newKey = rename[key] || key;
        acc[newKey] = value;
        return acc;
      }, {});

      // Add new properties using spread operator
      return {
        ...renamedItem,
        ...add
      };
    });
};



const data = [
  { name: "Alice", age: 30, role: "admin", country: "USA" },
  { name: "Bob", age: 25, role: "user", country: "UK" },
  { name: "Charlie", age: 35, role: "admin", country: "Canada" },
  { name: "Eve", age: 28, role: "user", country: "USA" }
];

// Configuration object for transformation
const config = {
  rename: { name: "fullName", age: "years" },
  filter: { role: "admin" },
  add: { active: true }
};

// Apply transformation
const transformedData = transformData(data, config);

// Output the result
console.log(`Transformed Data:\n${JSON.stringify(transformedData, null, 2)}`);


