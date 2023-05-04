// const test = typeof true;

// console.log(test);

// confirm //
// const message = 'Вам есть 18 лет?'
// const showInput = confirm(message)
// console.log(showInput)

// prompt //
// let showPrompt = prompt("Сколько Вам лет?");
// showPrompt = Number(showPrompt);
// console.log(showPrompt);
// console.log(typeof showPrompt);

// parseInt //
// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth:', elementWidth)

// parseFloat //
// let elementHeight = "30.432px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight)

// toFixed //
// let salary = 5800.1352;
// salary = Number(salary.toFixed(2));
// console.log(salary)

// let base = prompt("Введи число");
// base = Number(base);
// console.log(base);

// let power = prompt("Введи степень");
// power = Number(power);
// console.log(power);

// const result = base ** power
// console.log(result)

// Math //
// const max = 50;
// const min = 30;

// const result = Math.random(Math.random() * (max - min) + min);
// console.log(result);

// "use strict";
// console.log("JavaScript is awesome")
// console.log("JavaScript is awesome".length)
// console.log("JavaScript is awesome".toUpperCase())

// const numbertest = 35
// console.log(numbertest);
// let username = 2;
// username = 15
// console.log(username);

// const username = "Mango";
// const description = "JavaSript для начинающих";

// console.log(username.length)

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// let userName = "Евгений";
// console.log("user name -",userName);
// alert(userName);

// const age = confirm("Вам есть 18 лет?")
// console.log(age)

// const valueA = "20"
// console.log(Number(valueA));
// console.log(typeof Number(valueA))

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB));

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log((0.17 + 0.24).toFixed(2))

// console.log((Math.random() * (20 - 1) + 1).toFixed())

// const age = 18;
// const name = "Udjen";
// const raport =  "Возраст:" + age + "; " + "Имя:" + name;
// console.log(raport)
// console.log(raport.length)

// const age = 18;
// const name = "Udjen";
// const raport =  `Возраст: ${age};  Имя: ${name}`
// console.log(raport.toLowerCase())
// console.log(raport.toUpperCase())
// console.log("Количество знаков", raport.length)

// const BRAND_NAME = "SAMSUNG";
// const userInput  = "saMsuNg";
// const normalized = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalized); // 'SAMSUNG'
// console.log(normalized === BRAND_NAME); // true

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(2, 6)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3);
// console.log(!"Mango");
// console.log(!0);
// console.log(!"");

// const isOnline = true;
// const isNotOnline = !isOnline;

// console.log(location.host)

// console.log(Boolean(0))

// const sub = "vip";

// const access = sub === "pro" || sub === "vip" || sub === "free";

// console.log('Имеет ли доступ?', access);

// const sub = "vip";

// const access = sub === "pro" || sub === "vip" || sub === "free";

// console.log('Имеет ли доступ?', access);


// const x = 2;
// const y = 4;
// let result = x * y;

// const d = 8;

// if (result === d) {
//   console.log("Все верно!");
// } else {
//   console.log("Ответ не правильный!");
// }


// const balance = 5000

// const mes = balance > 1500 ? "Все хорошо" : "Все плохо"

// console.log(mes)