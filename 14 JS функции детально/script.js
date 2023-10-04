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

//1
/*
let sayHello = function () {
  console.log("Hello");
};

let print = function (myFunc) {
  myFunc();
  myFunc();
};

print(sayHello); // передаем функцию sayHello как значение
*/

// 1.1
/*
let print = function (myFunc) {
  myFunc();
  myFunc();
};

print(function () {
  console.log("Hello");
}); // передаем функцию sayHello как значение
*/

//2
/*
let myLogin = "Ivan";
let sayHello = function (login) {
  console.log(`Hello, ${login}`);
};

let print = function (myFunc, login) {
  myFunc(login);
};

print(sayHello, myLogin);
*/

//3
/*
let myLogin = "Ivan";
let sayHello = function (login) {
  console.log(`Hello, ${login}`);
};

let sayBye = function (login) {
  console.log(`Bye, ${login}`);
};

let print = function (myFunc, login) {
  myFunc(login);
};

print(sayHello, myLogin);
print(sayBye, myLogin);
*/

//4
/*
let head1 = document.querySelector("h1"); // получаем заголовок h1
let handler = function () {
  console.log("Hello");
};
// при клике на заголовок вывести строку в консоль
head1.addEventListener("click", handler);
*/

//4.1
/*
let head1 = document.querySelector("h1"); // получаем заголовок h1

// при клике на заголовок вывести строку в консоль
head1.addEventListener("click", function () {
  console.log("Hello");
});
*/

// возврат функции из другой функции
/*
function getCurrentYear(currentYear) {
  function calcAge(birthYear) {
    let age = currentYear - birthYear;
    console.log(age);
  }

  return calcAge;
}

let getUserAge = getCurrentYear(2023);
getUserAge(2002);
getUserAge(1952);
getUserAge(1985);
*/
