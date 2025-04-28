//Control Flow

//1. if else statement 

let age = 18;
if (age >= 18) {
    console.log ("You are an Adult");
} else {
    console.log ("You are a minor");
}

// tenary Operator

let T_age= age= 18;
let result= (T_age >= 18)? "You are Adult":"You are Minor";
console.log(result);

//if else if statement 

age = 16;
if (age <= 18 && age >=12) {
    console.log ("You are a Teenager");
} else if (age >= 19) {
    console.log ("You are an Adult");
}else {
    console.log ("Input Age");
}

// Tenary
age = 16;
console.log(
    (age <= 18 && age >= 12) ? "You are a Teenager" :
    (age >= 19) ? "You are an Adult" :
    "Input Age"
);


//tenary 
let T_score = 95;

let T_grade = (T_score >= 90) ? "A" :
            (T_score>= 80) ? "B" :
            (T_score >= 70) ? "C" :
            (T_score >= 60) ? "D" :
            (T_score >= 0)  ? "F" :
            "Invalid Score";

console.log(`Your grade is ${grade}`);

//For loops 

for (let i = 0; i<=10; i++)
   { console.log(i)}

let mixed=[1, 2, 3, 4, "hello", true, 2.5];
for (let i =0; i<mixed.length; i++){
    console.log(mixed[i]);
}

// while loop
let X= 0;
while(X<=15){
    console.log(X); X++
}

// do while loop
 i =0;

do{
    console.log("i is: " + i);
    console.log(mixed[i]);
    i++;
}
while(i<mixed.length);
console.log("i is: " + i);


//labs
let score = 88;
let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

console.log(`Score ${score} earns grade: ${grade}`);

//FOR LOOP 

let array = [10, 15, 20, 25, 30];

for( let D = 0; D<array.length; D++) {
    if (array[D] % 5 ===0) console.log(array[D]);
} 

//While loop 

let count = 10;

while (count>=1) {
    if (count === 5) {console.log("Stopped Early!"); break;}
}


// Mini-Project: Number Analyzer

let numbers = [12, -5, 20, 7, -3, 15, 8];

let analysis = {
  positiveCount: 0,
  evenSum: 0,
  maxNumber: numbers[0]
};

for (let num of numbers) {
  if (num > 0) {
    analysis.positiveCount++;
  }
  if (num % 2 === 0) {
    analysis.evenSum += num;
  }
  if (num > analysis.maxNumber) {
    analysis.maxNumber = num;
  }
}

console.log(`
Number Analysis:
- Positive Numbers: ${analysis.positiveCount}
- Sum of Even Numbers: ${analysis.evenSum}
- Maximum Number: ${analysis.maxNumber}
`);


