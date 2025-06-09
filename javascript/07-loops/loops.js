// write a do while loop that adds the numbrs from 1 to 3 and stores the result in varaible named total

let total = 0;
let arr = [1, 2, 3];
let i = 0;
do {
  total += arr[i];
  i++;
} while (i < arr.length);
console.log(total);

// take an array of num [2,4,6] and multiply them by 2 and store in a varaible

let multipliedNumber = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumber.push(numbers[i] * 2);
}
console.log(multipliedNumber);

// store the item from an array into another array using for loops

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
