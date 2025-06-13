function countVowels(str) {
  let lower = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const i of lower) {
    if (vowels.includes(i)) {
      count++;
    }
  }

  console.log(count);
}

// countVowels("ArjunVOA Uala");

//---------------------------------------------------------------------------

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  // console.log(count);
}

// countVowels("ArjunVOA Uala");

//------------------------------------------------------------------------

const squareNumbers = (arr) => {
  arr.map((item) => item ** 2);
};

//=============================================================================

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// console.log(filterEvenNumbers([2, 4, 3, 5]));

// [{ name: "Arjun" }, { name: "Varun" }, { name: "laxman" }, { name: "Gopal" }];
const getNames = (arr) => arr.name;

// console.log(
//   getNames([
//     { name: "Arjun" },
//     { name: "Varun" },
//     { name: "laxman" },
//     { name: "Gopal" },
//   ])
// );

const findLongestWord = (arr) =>
  arr.reduce((sum, num) => (sum.length >= num.length ? sum : num));

// console.log(findLongestWord(["cherry", "banana", "apple", "kiwi"]));

const person = {
  name: "arjun",
  age: 23,
  introduce: () => {
    return `my name is ${this.name}and I am ${this.age} years old `;
  },
};

function Animal() {
  Animal.prototype.speak = function () {
    return "Animal speaking";
  };
}

function Dog() {
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function () {
    return "Woof!";
  };
}

console.log(Dog.prototype);

let newanimal = new Dog();
console.log(newanimal.bark());
