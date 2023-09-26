// let age = 22; // объвляю переменную и кладу в нее значение
// let login = "admin";

// let age = 23;
// let firstName = "Chimpoesh";
// let myName = "Alexander";
// console.log(age);
// console.log(firstName);
// console.log(myName);

// let boys = 15;
// let girls = 17;
// console.log(boys + girls);

// let a = 10;
// let b = 5;
// console.log(a * b);

// let login = "rabbit";
// let age = 2;
// let gender = "male";
// console.log(login);
// console.log(age);
// console.log(gender);

// let name = "Ira";
// let surname = "Ivanova";
// let job = "doctor";
// console.log(name);
// console.log(surname);
// console.log(job);

// let name = "anton";
// let passworld = "admin";

// console.log(name);
// console.log(passworld);
// console.log(5 + 5);

// let cats = 6;
// let dogs = 9;
// let animals = cats + dogs;

// console.log(animals);
// console.log(animals);

// let fruits = 77;
// let newFruits = fruits - 1; // 76
// console.log(newFruits);

// "-", "+" - приоритет 12
// "=" - приоритет 2
// let fruits = 77;
// fruits = fruits - 1;
// fruits = fruits + 10;
// console.log(fruits);

// const pi = 3.14;
// pi = pi + 1;

// let firstName = "Ivan";
// let lastName = "Ivanov";
// console.log(firstName, lastName);

// let postIndex = "456784";
// let phoneNumber = "34858737";
// let hobby = "Читать";

// let firstName = "Павел";
// let lastName = "Петров";
// let hobby = "Строить";

// Меня зовут Павел, моя фамилия Петров.
// let greet = "<h1>Меня зовут " + firstName + ", моя фамилия " + lastName + "</h1>";
// console.log(greet);
// document.write(greet);

// let greet = `<h1>Меня зовут ${firstName}, моя фамилия ${lastName}. Моё любимое занятие - ${hobby}</h1>`;
// console.log(greet);
// document.write(greet);

// let carModel = "2101";
// let carMaker = "Ваз";
// let power = 76;
// // сформируйте строку:
// // Автомобиль Ваз 2101 мощность 76 л.с
// let greet = `<h1 class="head">Автомобиль ${carMaker} ${carModel} мощность ${power} л.с.</h1>`;
// console.log(greet);
// document.write(greet);

// let carModel = "Chaser";
// let carMaker = "Toyota";
// let motor = 2.5;

// // let opinion = `Автомобиль ${carMaker} ${carModel}, объем двигателя ${motor + 1} литра`;
// let opinion = `Автомобиль ${carMaker + " " + carModel}, объем двигателя ${motor + 1} литра`;
// console.log(opinion);

// let item = "Помидоры";
// let price = 2.6;
// let qty = 6;

// let str = `Мы купили ${qty}кг ${item} общая сумма за покупку
//  $${price * qty}`;
// console.log(str);

// let login = "Ivan";
// let isAdmin = false; // true false

/*
let cats;
console.log(cats);
cats = 5;
console.log(cats);
*/

//1. Создайте переменную a. Запишите в нее сумму чисел 1, 2 и 3.
// С помощью функции alert выведите на экран содержимое переменной a.
// let a = 1 + 2 + 3;
// alert(a);

// 2. Выведите с помощью функции alert сумму чисел 1, 2 и 3.
// alert(1 + 2 + 3);

// 4. Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
// let num4 = parseFloat("5.5px"); // выводит дробное число
// let num5 = parseFloat("6.25px");
// console.log(num4 + num5); // выведет 11.75 Дробные числа числа
// document.write(num4 + num5);

/*
//5. Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.
let num4 = parseFloat("5.5px"); // выводит дробное число
let num5 = parseFloat("6.25px");
console.log(`${num4 + num5}px`); // выведет 11.75 Дробные числа числа
document.write(num4 + num5 + "px");
console.log("$" + (num4 + num5)); // $11.75
console.log(`$${num4 + num5}`); // $11.75
*/

// п.5 // Дана строка '12345'. Найдите сумму цифр этой строки:
// let myLine = "12345";
// let num1 = Number(myLine[0]);
// let num2 = Number(myLine[1]);
// let num3 = Number(myLine[2]);
// let num4 = Number(myLine[3]);
// let num5 = Number(myLine[4]);
// let mySumm = num1 + num2 + num3 + num4 + num5;
// alert("Сумма цифр этой строки: " + mySumm);

// п.6 // Дано число 12345. Найдите сумму цифр этого числа:
// let myLine = 12345;
// let mystr = String(myLine);
// let num1 = Number(mystr[0]);
// let num2 = Number(mystr[1]);
// let num3 = Number(mystr[2]);
// let num4 = Number(mystr[3]);
// let num5 = Number(mystr[4]);
// let mySumm = num1 + num2 + num3 + num4 + num5;
// alert("Сумма цифр этого числа: " + mySumm);

// При сложении в обоих случаях 15 получается

// let item = "Помидоры";
// console.log(item[0]);
// console.log(item[1]);
// console.log(item[2]);
// console.log(item[9]);
/*
let age = 18; // присваивание значения 18 переменной
console.log(age == 18); // сравниваю значение переменной age и 18
*/

let test = "f";

if (test) {
  console.log("Истина");
}
