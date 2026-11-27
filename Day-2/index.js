// Day 2 Lesson: Functions

/*
if statement Syntax

if (condition){
  // Code executes if condition is true
}
*/

let age1 = 25;

if (age1 >= 18){
  console.log("You are eligible to vote.");
}

age1 = 13; //reassigment

if (age1 < 18){
  console.log("You are not eligible to vote.");
}


let age2 = 15;

if (age2 >= 18){
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// C. The if...else if...else statement
// Sometimes, you need to evalute multiple conditions. For example, a grading system.

let score = 75;

if (score >= 70){
  console.log("Grade: A");
} else if (score >= 60){
  console.log("Grade: B");
} else if (score >= 50){
  console.log("Grade: C");
} else if (score >= 45){
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}



