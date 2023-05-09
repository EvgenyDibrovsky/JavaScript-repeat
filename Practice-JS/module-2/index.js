// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// console.log(clients.length);

// clients[0] = "test1";
// clients[1] = "test2";
// clients[2] = "test3";

// console.log(clients);
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(numbersArray);

// for (let i = 0; i < numbersArray.length; i += 1) {
//   console.log(numbersArray[i]);
// }

// console.log(numbersArray);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax", "Po2ly"];
// const clientNameToFind = "Po2ly";
// let message = "Такого пользователя нет";

// for (const client of clients) {
//   console.log(client);

//   if (client === clientNameToFind) {
//     message = "Пользователь нашелся";
//     break;
//   }
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число  ${numbers[i]} больше чем ${threshold} `);
// }

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const name = "javascript это круто";
// console.log(name.split(" ").join(" "));

// const message = "JavaScript это интересно";
// console.log(message.split(" "));

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Mango"));

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const itemRedFruits = "cranberries";

// const result = redFruits.includes(itemRedFruits);
// console.log(result);

// let total = result ? "Cсвпадение найдено" : "Совпадение не найдено";

// console.log(total);

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// numbers.pop(5);
// console.log(numbers);

// numbers.pop(4);
// console.log(numbers);

// numbers.pop(3);
// console.log(numbers);

// numbers.pop(2);
// console.log(numbers);

// numbers.pop(1);
// console.log(numbers);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// const push = clients.push("test");
// console.log(clients);

// const pop = clients.pop("Test");
// console.log(clients);

// const unSgift = clients.unshift("test");
// console.log(clients);

// const shift = clients.shift("Test");
// console.log(clients);

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 4)); // ["Ajax", "Poly"]