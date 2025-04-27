//CHALLENGES

//Task 1: Shopping Cart Total with Discounts

let cart = [
    { name: "Shirt", price: 20, quantity: 3 },
    { name: "Jeans", price: 40, quantity: 2 },
    { name: "Hat", price: 15, quantity: 1 }
  ];
  
  let subtotal = 0;
  let totalQuantity = 0;
  
  for (let item of cart) {
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;
  }
  
 
  let discountRate = 0;
  if (totalQuantity > 10) {
    discountRate = 0.2;
  } else if (totalQuantity > 5) {
    discountRate = 0.1;
  }
  
 
  let discountAmount = subtotal * discountRate;
  let finalTotal = subtotal - discountAmount;
  
 
  console.log(`Subtotal: $${subtotal}`);
  console.log(`Discount: $${discountAmount}`);
  console.log(`Final Total: $${finalTotal}`);


  //Task 2: Type Validator

let values = [42, "hello", true, null, { name: "Bob" }, [1, 2]];


let typeCounts = { number: 0, string: 0, boolean: 0, object: 0, array: 0, null: 0
};


for (let value of values) {
  if (Array.isArray(value)) {
    typeCounts.array++;
  } else if (value === null) {
    typeCounts.null++;
  } else {
    typeCounts[typeof value]++;
  }
}

console.log(typeCounts);


//Task 3: Compound Interest Calculator

let principal = 1000;  
let rate = 0.05;       
let years = 5;         


if (principal > 0 && rate > 0 && years > 0) {
 
  let finalAmount = principal * Math.pow(1 + rate, years);
  let interestEarned = finalAmount - principal;


  let compoundResult = {
    finalAmount: finalAmount.toFixed(2),
    interestEarned: interestEarned.toFixed(2)
  };

  
  console.log(compoundResult);
} else {
  console.log("Please enter positive values for principal, rate, and years.");
}



