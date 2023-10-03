/**
 * локальная область видимости
 */
//1
// let message = "Hello";

// function sayBye() {
//   let message = "Bye";
//   console.log(message);
// }
// sayBye();

// console.log(message);

//2
// function sayBye() {
//   let message = "Bye";
//   console.log(message);
// }
// sayBye();

// console.log(message);

//3
// function sayBye() {
//   let message = "Bye";

//   console.log(message);
//   return message;
// }
// let byeMessage = sayBye();

// console.log(byeMessage);

//4
// let message = "Hello";

// function sayBye() {
//   let message = "Bye";

//   console.log(message);
//   return message;
// }

// // переопределяем значение глобальной переменной
// message = sayBye();// "Hello" -> "Bye"

// console.log(message);

//5
// let message = "Hello";

// function sayBye() {
//   console.log(message);
// }
// sayBye();

// console.log(message);

//6
// let message = "Hello";

// function sayBye() {
//   let message;
//   console.log(message);
// }
// sayBye();

// console.log(message);

/**
 * блочная область видимости
 */
// let myAge = 44;

// function checkAge(age) {
//   let result;
//   if (age >= 21) {
//     result = "Заходи";
//   } else {
//     result = "Уходи";
//   }

//   return result;
// }

// let res = checkAge(myAge);
// console.log(res);

/**
 * ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
 */
// определение функции
// function sayBye() {
//   let message = "Bye";
//   console.log(message);
// }
// sayBye();

// функциональное выражение
// let sayBye = function () {
//   let message = "Bye";
//   console.log(message);
// };
// sayBye();

// функции высшего порядка
// let sayBye = function () {
//   let message = "Bye";
//   return message;
// };
// console.log(sayBye()); // вызов функции sayBye
// console.log(sayBye); // передача функции sayBye как значение

// передача функции как значения
// function greet() {
//   console.log("Hello");
// }

// let myGreet = greet; // передаем функцию greet как значение
// myGreet();
