function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(greet("Манго")); // Добро пожаловать Манго.

// Выводим функцию greet в консоль не вызывая её
console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }
