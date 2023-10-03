// push - добавление в конец массива
// let newArrLen = fruits.push("Абрикос", "Виноград");
// console.log(fruits);
// console.log(newArrLen);

// pop - удаляет последний элемент из массива
// let lastEl1 = animals.pop();
// let lastEl2 = animals.pop();

// console.log(animals);
// console.log(lastEl1);
// console.log(lastEl2);

// shift - удаляет первый элемент массива
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array1);

// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);

// unshift - добавляет элемент(ы) в начало массива
// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

/**
 * получить массив только массив с четными элементами
 */
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];

// 1 Объявляем пустой массив, в который будем складывать
// let newArr = [];
// // 2 Перебираем исходный массив
// for (let number of numbers) {
//   // 3 Если значение четное
//   if (number % 2 === 0) {
//     // 4 Добавляем его в новый массив
//     newArr.push(number);
//   }
// }
// console.log(newArr);

/**
 * получить юзеров у которых возраст больше 23 лет
 */
// let newUsers = [];
// for (let user of users) {
//   if (user.age > 23) {
//     newUsers.push(user);
//   }
// }
// console.log(newUsers);

/**
 * получить фамилии юзеров у которых возраст больше 23 лет
 */
// let newUsers = [];
// for (let user of users) {
//   if (user.age > 23) {
//     newUsers.push(user.lName);
//   }
// }
// console.log(newUsers);

/**
 * получить котов, которые живут в Москве
 */
// let newCats = [];
// for (let cat of cats) {
//   // если у владельца кота значение city == Москва
//   if (cat.owner.city === "Москва") {
//     newCats.push(cat);
//   }
// }
// console.log(newCats);

// concat - объединение массивов
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2, ["g", "h"], "i");

// console.log(array3);

// includes - проверяет, есть ли значение в массиве
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// console.log(animals.includes("camel"));
// console.log(animals.includes("mouse"));

// join - объединение массива
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// console.log(fruits.join());
// document.write(fruits.join());

// document.write(fruits.join(""));
// document.write(fruits.join(", "));/

/**
 * получить из массива HTML-список (ol, ul)
 * <ul><li>cat</li><li>dog</li><li>bat</li><li>mouse</li></ul>
 */
// let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];

// let petsStr = pets.join("</li><li>");
// document.write(`<ul><li>${petsStr}</li></ul>`);

// ссылочные типы данных
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

// копирование по ссылке
// let newAnimals = animals;
// newAnimals.pop(); // удаляет последний элемент

// console.log("Исходный массив: ", animals);
// console.log("Новый массив: ", newAnimals);

// копирование по значению
//1
// let newAnimals = animals.concat();
// newAnimals.pop(); // удаляет последний элемент

// console.log("Исходный массив: ", animals);
// console.log("Новый массив: ", newAnimals);

//2 slice - копирует часть массива
// let newAnimals = animals.slice();
// newAnimals.pop(); // удаляет последний элемент

// console.log("Исходный массив: ", animals);
// console.log("Новый массив: ", newAnimals);

// копируем массив начиная с элемента "duck" и до конца массива
// let newAnimals = animals.slice(3);
// console.log(newAnimals);

// получить массив ["camel", "duck", "elephant"]
// let newAnimals = animals.slice(2, 5);
// console.log(newAnimals);

// 1 задание
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// получите на основе исходного массива массивы:
// 1 - ["Киви", "Ананас", "Кокос"]
// 2 - ["Ананас", "Кокос", "Апельсин", "Банан"]

//1
/*
// 1 - ["Киви", "Ананас", "Кокос"]
let newFruits = fruits.slice(0, 3);
console.log(newFruits);
// 2 - ["Ананас", "Кокос", "Апельсин", "Банан"]
let neFruits = fruits.slice(1, 5);
console.log(neFruits);
*/

//2
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// 1 - ["Ананас"]
// let newFruits = fruits.slice(1, 2);
// console.log(newFruits);
// // 2 - ["Кокос"]
// let newFruits2 = fruits.slice(2, 3);
// console.log(newFruits2);

//3
// let megaFruits = fruits.slice(0, 3);
// console.log(megaFruits);

// let lovelyFruits = fruits.slice(1, 5);
// console.log(lovelyFruits);

/**
 * splice - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. работа идет с ИСХОДНЫМ массивом

let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken", "camel"];
 */
// console.log("Исходный массив:", pets);
// let delItems = pets.splice(4, 0, "Апельсин");

// console.log("Измененный массив:", pets);
// console.log("Удаленные элементы:", delItems);

// 2 задание
// let mixed = [true, 1, null, false, "hello", NaN, [1, 2, 3]];
// 1 - удалите null из массива
// 2 - замените последний элемент массива на "mouse"

//1
// let newMixed = mixed.splice(2, 1);
// console.log(mixed);
// let newMixed2 = mixed.splice(-1, 1, "mouse");
// console.log(mixed);

//2
// console.log(mixed);
// let newMixed = mixed.splice(2, 1);
// console.log(newMixed, mixed);

// let newMixed1 = mixed.splice(5, 1, "mouse");
// console.log(newMixed1, mixed);

//3
// let mouse = "Мышь";
// let delItems = mixed.splice(2, 1);
// console.log(delItems);
// let neItems = mixed.splice(5, 1, mouse);
// console.log(mixed);
// console.log(neItems);

//4
// mixed = mixed.filter(function (item) {
//   return item !== null;
// });
// console.log(mixed);

// mixed[mixed.length - 1] = "mouse";
// console.log(mixed);

// sort - сортирует массив

// let nums = [5, 6, -2, 4, 8, 9, 5, 3, 2, -5, 6, 7, 8, 9, -4, 2];
// nums.sort();
// console.log(nums);

// pets.sort();
// console.log(pets);

// let nums2 = [90, 108, 95, 55, 54, 60, 1, 11, 206, 15, 25, 308, 343, 37, 43];
// nums2.sort();
// console.log(nums2);
