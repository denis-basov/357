// функции

//console.log("hello".toUpperCase());

// 1 Объявление функции
// function printHello() {
//   console.log("Hello");
// }

// 2 Вызов функции
// printHello();
// printHello();

// 1 задание
// напишите функцию, которая считает сумму двух чисел, например 4 и 7
// и выводит результат в консоль

//1
// function sum() {
//   console.log(4 + 5);
// }

// sum();

//2
// function printSum() {
//   console.log(4 + 7);
// }
// printSum();

//3
// let a = 44;
// let b = 83;

// function summAb() {
//   console.log(a + b);
// }
// summAb();
// summAb();
// summAb();

//4
// function prSum() {
//   let sum = 4 + 7;
//   console.log(sum);
// }
// prSum();

// функция с параметрами и аргументами
// параметр (firstName) - переменная при объявлении функции
// аргумент ("Ivan") - значение, переданное функции при ее вызове

// function printHello(firstName) {
//   console.log(`Hello, ${firstName}!`);
// }

// printHello("Ivan");
// printHello("Inna");

// let fName = "Svetlana";
// printHello(fName);

// 2 задание
// напишите функцию, которая принимает на вход число и выводит в консоль квадрат этого числа

//1
// function squareNumber(num) {
//   console.log(num ** 2);
// }
// squareNumber(2);

//2
// function prQ(x) {
//   let q = x * x;
//   console.log(q);
// }
// prQ(5);

//3
// function printSquare(number) {
//   let square = number * number;
//   console.log(square);
// }

// printSquare(5);
// printSquare(8);

let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let users = ["Иван", "Алексей", "Светлана", "Петр", "Алиса", "Неизвестный"];

let devices = [
  {
    device: "Телевизор",
    type: "Ламповый",
    colour: "Цветной",
  },
  {
    device: "Монитор",
    type: "ЖК",
    colour: "Цветной",
  },
  {
    device: "Часы",
    type: "Механические",
    colour: "Серебристый",
  },
];
let numbers = [1, 4, 6, 3, 2, 8, 4, 3];

// перебор массива в функции
// function printArr(arr) {
//   for (let element of arr) {
//     console.log(element);
//   }
// }
// printArr(fruits);
// printArr(users);
// printArr(devices);
// printArr(numbers);
// printArr();

// return
// let result = console.log(123);
// console.log(result);

/*
// функция для подсчета суммы
function getSum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let bill1 = getSum(5000, 9000);
let bill2 = getSum(550, 1300);
console.log(bill1, bill2);

// функция для подсчета скидки 10%
function calcDiscount(bill) {
  console.log(bill * 0.1);
}
calcDiscount(bill1);
calcDiscount(bill2);*/

/*
// сформировать из данных объекта строку
let car1 = {
  maker: "ВАЗ",
  model: "2101",
};
let car2 = {
  maker: "ВАЗ",
  model: "2107",
};

function getCarInfo(carObj) {
  let carStr = `<h3>Производитель: ${carObj.maker}. Модель: ${carObj.model}.</h3>`;
  return carStr;
}
let car1Info = getCarInfo(car1);
document.write(car1Info);

let car2Info = getCarInfo(car2);
document.write(car2Info);*/

// локальная и глобальная область видимости
// 1 доступность глобальной переменной внутри функции
// let login = "Vasiliy";

// function sayHello() {
//   console.log(`Hello, ${login}`);
// }
// sayHello();

// 2 локальная переменная за пределами функции
// function sayHello() {
//   let login = "Anna";
//   let greet = `Hello, ${login}`;
//   console.log(greet);
// }
// sayHello();
// console.log(greet);

// 3 возврат значения из функции
// function sayHello() {
//   let greet = `Hello, Anna`;
//   return greet;
// }
// let myGreet = sayHello();
// console.log(myGreet);

// let fName = 'Василий';
// let lName = 'Иванов';
// 3 задание
// напишите функцию, которая принимает имя и фамилию
// и возвращает сформированный заголовок-приветствие с переданными данными

//1
// function sayHello() {
//   let greet = `Hello, Василий Иванов`;
//   return greet;
// }
// let myGreet = sayHello();
// document.write(myGreet);

//2
// let fName = "Василий";
// let lName = "Иванов";

// function fullName() {
//   let result = `<h2>Hello ${lName} ${fName}</h2>`;
//   return result;
// }

// let str = fullName();
// document.write(str);

//3
// function sayHello() {
//   let greet = `<h2>Привет, Василий Иванов!</h2> `;
//   return greet;
// }
// let myGreet = sayHello();
// console.log(myGreet);
// document.write(myGreet);

//4
// function generateGreeting(firstName, lastName) {
//   let greeting = "Привет, " + firstName + " " + lastName + "!";
//   return greeting;
// }

// let fName = "Василий";
// let lName = "Иванов";

// let greeting = generateGreeting(fName, lName);
// console.log(greeting);

//5
// let firstName = "Сергей";
// let lastName = "Петров";

// function hello(fName, lName) {
//   let greet = `Hello, ${fName} ${lName}!`;
//   return greet;
// }

// let myGreet = hello(firstName, lastName);
// console.log(myGreet);
// let myGreet2 = hello("Инна", "Сергеева");
// console.log(myGreet2);

// параметр со значением по умолчанию
// function sayHello(fName = "гость") {
//   console.log(`Привет, ${fName}`);
// }
// sayHello("Игорь");
// sayHello();

// методы - функции в контексте объекта
// function greet() {
//   console.log("Hello");
// }

// let car = {
//   maker: "ВАЗ",
//   model: "2101",
//   greet: function () {
//     // метод
//     console.log("Hello");
//   },
// };

// console.log(car);
// car.greet();
/*
let car = {
  maker: "ВАЗ",
  model: "2101",
  getCarInfo: function () {
    return `<h3>Производитель: ${this.maker}. Модель: ${this.model}.</h3>`;
  },
};

let carInfo = car.getCarInfo();
console.log(carInfo);
*/

// 4 задание
// let device = {
//   device: "Телевизор",
//   type: "Ламповый",
//   colour: "Цветной",
// };
// добавьте метод объекту, который будет возвращать строку
// с данными о девайсе

/*
let device = {
  device: "Телевизор",
  type: "Ламповый",
  colour: "Цветной",
  getDeviceInfo: function () {
    return `<h3>Наименование: ${this.device}. Тип: ${this.type}. Цвет: ${this.colour}.</h3>`;
  },
  // getDeviceInfo() {
  //   return `<h3>Наименование: ${this.device}. Тип: ${this.type}. Цвет: ${this.colour}.</h3>`;
  // },
};
let deviceInfo = device.getDeviceInfo();
console.log(deviceInfo);*/

