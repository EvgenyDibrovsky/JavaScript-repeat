// Модуль 2 - Массивы. Функции

// 1

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// 2

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

// 3

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }

  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
}

// 4

// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

// 5

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// 6

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[0] = "apple";
fruits[1] = "peach";
fruits[2] = "pear";
fruits[3] = "banana";

// 7

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength);

// 8

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
console.log(lastElementIndex);
const lastElement = fruits[lastElementIndex];
console.log(lastElement);

// 9

function getExtremeElements(array) {
  // Change code below this line

  return [array[0], array[array.length - 1]];

  // Change code above this line
}

// 10

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

// 11

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let total;

  total = message.split(" ").length * pricePerWord;

  return total;
  // Change code above this line
}

// 12

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join([delimeter]);
  // Change code above this line
  return string;
}

// 13

function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}

// 14

const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, -3);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(2);

// 15

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

// 16

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  return firstArray.concat(secondArray).slice(0, maxLength);
  // Change code above this line
}

// 17

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// 18

function calculateTotal(number) {
  // Change code below this line

  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;

  // Change code above this line
}

// 19

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// 20

function calculateTotalPrice(order) {
  let total = 0;

  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    console.log(order[i]);

    total += order[i];
  }
  // Change code above this line
  return total;
}

// 21

function findLongestWord(string) {
  let arrStr = string.split(" ");
  let wordLength = 0;
  let longestWord = "";

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }
  }
}

// 22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i++) numbers.push(i);

  // Change code above this line
  return numbers;
}

// 23

function filterArray(numbers, value) {
  const newArray = [];

  for (let i = 0; numbers.length > i; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  console.log(newArray);
  // [5, 10, 15, 21, 4]
  return newArray;
}

// 24

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

// 25

function getCommonElements(array1, array2) {
  let arr = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      arr.push(array1[i]);
    }
  }
  return arr;
}

// 26

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let newOrder of order) {
    total += newOrder;
  }

  // Change code above this line
  return total;
}

// 27

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}

// 28

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 29

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// 30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 31

function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Change code above this line
}

// 32

function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      console.log(array[i]);
      return true;
    }
  }
  return false;
}
