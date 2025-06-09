// Check if num1 is greater than num2
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("nope num1 is not greater");
}

//check if two strings are same

let name = "chai";
let anothername = "chai";

if (name == anothername) {
  console.log("please pick name");
} else {
  console.log("You can keep this name");
}

//checking if a variable is a number

let score = 44;

let scoreStr = String(44);

if (typeof score === "Number") {
  console.log("Yes it is a number");
} else {
  console.log("No it is not a number");
}

//checking if a boolean value is true or false

let isteaready = true;

if (isteaready) {
  console.log("Tea is ready");
} else {
  console.log("no it is not ready");
}

//check if an array is empty or not

let names = ["arjun", "shridhar"];

if (names.length == 0) {
  console.log("Yes it is Empty");
} else {
  console.log("No the array is not Empty");
}

/*
Write a JavaScript program that takes a student's score and prints their grade using the following rules:

90 and above → Grade: A

80 to 89 → Grade: B

70 to 79 → Grade: C

60 to 69 → Grade: D

Below 60 → Grade: F
*/

score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else if (score >= 70 && score < 80) {
  console.log("Grade B");
} else if (score >= 60 && score < 70) {
  console.log("Grade B");
} else {
  console.log("Grade F");
}
