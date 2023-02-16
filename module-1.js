// Модуль 1 - Переменные. Типы. Ветвления. Циклы

// 1

// // Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// 2

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

// productName = "Repair droid";
// console.log(productName) ON CONFLICT DO NOTHING;

// pricePerItem = 3500;
// console.log(pricePerItem) ON CONFLICT DO NOTHING;

// 3

// // Change code below this line

// const topSpeed = 160;
// const distance = 617.54;

// const login = "mango935";

// const isOnline = true;
// const isAdmin = false;

// 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem* orderedQuantity;

// console.log(totalPrice) ON CONFLICT DO NOTHING;

// 5

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message) ON CONFLICT DO NOTHING;

// 6

// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message) ON CONFLICT DO NOTHING;

// 7

// // Change code below this line
// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// sayHi();//Hello, this is my first function!;

// 8

// // Change code below this line
// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// 9

// function add(a, b, c) {
//     // Change code below this line

//   return a + b + c;
//     // Change code above this line
//   }

//   add(2, 5, 8); // 15

//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// 10

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };

//   makeMessage('Radar', 6150);
//   makeMessage('Scanner', 3500);
//   makeMessage('Reactor', 8000);
//   makeMessage('Engine', 4070);

// 11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice;
//   };

//   calculateTotalPrice(5, 100);
//   calculateTotalPrice(8, 60);
//   calculateTotalPrice(3, 400);
//   calculateTotalPrice(1, 3500);
//   calculateTotalPrice(12, 70);

// 12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line

//   const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;

//   const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//     // Change code above this line
//     // return message;

//     console.log(message);
//     return(message);
//   }

//   makeOrderMessage(2, 100, 50);
//   makeOrderMessage(4, 300, 100);
//   makeOrderMessage(10, 70, 200);

// 13

// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18 ;

//     // Change code above this line
//     return passed;
//   }

//   isAdult(20);
//   isAdult(14);
//   isAdult(8);
//   isAdult(37);

// 14

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = SAVED_PASSWORD === password;

//     // Change code above this line
//     return isMatch;
//   }

//   isValidPassword("mangodab3st");
//   isValidPassword("kiwirul3z");
//   isValidPassword("jqueryismyjam");

// 15

// function checkAge(age) {
//     let message;

//     if (age >= 18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
//     console.log(message);
//     return message;
//   }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 16

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     if (ordered > available) { // Change this line
//         message = 'Not enough goods in stock!';
//       } else {
//         message = 'Order is processed, our manager will contact you.';
//       }
//       console.log(message);
//     // Change code above this line
//     return message;
//   }

//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);

// 17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//        // Change code below this line
//     if(totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//    }

//     else  {
//         const Credits = customerCredits - totalPrice;
//         message = `You ordered ${orderedQuantity} droids, you have ${Credits} credits left`;
//     }

//     // Change code above this line
//     console.log(message);
//     return message;
//   }

//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 5000);

// 19

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) {

//       message =  'Canceled by user!';
//     } else if (ADMIN_PASSWORD === password) {
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//   console.log(message)
//     return message;
//   }

//   checkPassword("mangohackzor");
//   checkPassword(null);
//   checkPassword("polyhax");
//   checkPassword("jqueryismyjam");

// 20

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   }
//     // Change code above this line
//     else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!";
//     }

//     else  {
//         message = "The order is accepted, our manager will contact you";
//     }

//     console.log(message);
//     return message;
//   }

//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(70, 0);
//   checkStorage(200, 20);
//   checkStorage(200, 250);
//   checkStorage(150, 0);

// 21

// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;

//     console.log(isInRange);
//     return isInRange;
//   }

//   isNumberInRange(10, 30, 17);
//   isNumberInRange(10, 30, 5);
//   isNumberInRange(20, 50, 24);
//   isNumberInRange(20, 50, 76);

// 22

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";

//     console.log(canAccessContent);
//     return canAccessContent;
//   }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// 23

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange ; // Change this line

//     return isNotInRange;
//   }

// 24

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else {
//         totalSpent >= 50000
//         discount = GOLD_DISCOUNT;
//     }

//     // Change code above this line
//     console.log(discount)
//     return discount;
//   }

// 25

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   console.log(message)
//     // Change code above this line
//     return message;
//   }

// 26

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//     // Change code below this line
//     message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     console.log(message);
//     return message;
//   }

// 27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line
//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   // Change code above this line
//   console.log(price);
//   return price;
// }

// 28

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//      switch (password) {

//         case "mangohackzor":
//         message = "Access denied, wrong password!";
//         break;

//         case null:
//         message = "Canceled by user!";
//         break;

//         case "polyhax":
//         message = "Access denied, wrong password!";
//         break;

//         case "jqueryismyjam":
//         message = "Welcome!";
//         break;

//         default:
//         message = "Access denied, wrong password!";
//         }

//   console.log(message);
//     // Change code above this line
//     return message;
//   }

// 29

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//        switch (country) {

//         case "China":
//         cost = 100;
//         message = `Shipping to ${country} will cost ${cost} credits`;
//         break;

//         case "Chile":
//         cost = 250;
//         message = `Shipping to ${country} will cost ${cost} credits`;
//         break;

//         case "Australia":
//         cost = 170;
//         message = `Shipping to ${country} will cost ${cost} credits`;
//         break;

//         case "Jamaica":
//         cost = 120;
//         message = `Shipping to ${country} will cost ${cost} credits`;
//         break;

//         default:
//         message = "Sorry, there is no delivery to your country";
//         }

//         console.log(message);
//     // Change code above this line
//     return message;
//   }

// 30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// 31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// 32

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line

//     console.log(substring);
//     return substring;
//   }

// 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   console.log(result);
//   return result;
// }

// 34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// 35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   console.log(result);
//   return result;
// }

// 36

// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   // Change code below this line

//   if (message.includes("spam") || message.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   console.log(result);
//   return result;
// }
