/**
 * foreach
 */
// for (let value of fruits) {
//   console.log(value);
// }

// fruits.forEach(function (value, index) {
//   console.log(index, value);
// });

// let sum = 0;
// numbers.forEach(function (number) {
//   sum += number;
// });
// console.log(sum);

// animals.forEach(function (animal, i) {
//   console.log(`<li class="animal animal-${i + 1}">${animal}</li>`);
// });

// 1 задание
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
// переберите массив с пом. foreach и выведите
// в консоль куб (3 степень) каждого значения

//1
// numbers.forEach(function (number) {
//   console.log(number ** 3);
// });

//2
// numbers.forEach(function (number) {
//   cub = number * number * number;
//   console.log(cub);
// });

//3
// нашел функцию Math.pow для возведения в 3-ю степень
// numbers.forEach(function (number) {
//   let cube = Math.pow(number, 3);
//   console.log(cube);
// });

/**
 * map
 */
// let cubeNumbers = [];
// for (let number of numbers) {
//   cubeNumbers.push(number ** 3);
// }
// console.log(cubeNumbers);

// let cubeNumbers = numbers.map(function (number) {
//   return number ** 3;
// });
// console.log(cubeNumbers);

// let cubeNumbers = numbers.map((number) => number ** 3);
// console.log(cubeNumbers);

// let nameDevices = devices.map(function (device) {
//   console.log(device.device);
//   return device.device;
// });
// console.log(nameDevices);

/*
// получаем из массива объектов массив строк
let nameDevices = devices.map(function (device) {
  return `<li>${device.device}</li>`;
});
// массив строк объединяем в одну строку
let nameDevicesStr = nameDevices.join("");
document.write(nameDevicesStr);*/

// let nameDevicesStr = devices
//   .map(function (device) {
//     return `<li>${device.device}</li>`;
//   })
//   .join("");
// document.write(nameDevicesStr);

// 2 задание
// получите из массива users массив хобби пользователей
// let users = [
//   {
//     fName: "Иван",
//     lName: "Иванов",
//     hobbies: ["Спать", "Гулять", "Читать"],
//   },
//   {
//     fName: "Анна",
//     lName: "Иванова",
//     hobbies: ["Спать", "Читать"],
//   },
//   {
//     fName: "Ирина",
//     lName: "Сидорова",
//     hobbies: ["Гулять", "Читать"],
//   },
// ];

//1
/*
let users = [
  {
  fName: "Иван",
  lName: "Иванов",
  hobbies: ["Спать", "Гулять", "Читать"],
  .map(function (device) {
  return `<li>${hobbies.hobbies}</li>`;
  })
  .join("hobbies");
  document.write(hobbies);
  fName: "Анна",
  lName: "Иванова",
  hobbies: ["Спать", "Читать"],
  return `<li>${hobbies.hobbies}</li>`;
  })
  .join("hobbies");
  document.write(hobbies);
  fName: "Ирина",
  lName: "Сидорова",
  hobbies: ["Гулять", "Читать"],
  return `<li>${hobbies.hobbies}</li>`;
  })
  .join("hobbies");
  document.write(hobbies);*/

//2
// let hobbyUsers = users.map(function (user) {
//   return user.hobbies;
// });
// console.log(hobbyUsers);

//3
// let usersHobbies = users.map(function (users) {
//   console.log(users.hobbies);
//   return users.hobbies;
// });
// console.log(usersHobbies);

//4
// let nameUsersStr = users.map(function (user) {
//   return `<p>Имя: ${user.fName}. Хобби: ${user.hobbies.join(", ")}</p>`;
// });
// document.write(nameUsersStr.join(""));

//5
// let myHobby = users.map((user) => user.hobbies);
// console.log(myHobby);

// let myHobby = users.map(function (user) {
//   return user.hobbies;
// });
// console.log(myHobby);

/**
 * стрелочные функции
 */
// let sayHello = function () {
//   console.log("Hello");
// };

// let sayHello = () => {
//   console.log("Hello");
// };

// let sayHello = (login) => {
//   console.log(`Hello, ${login}`);
// };
// sayHello("Ivan222");

// let sayHello = (login) => console.log(`Hello, ${login}`);
// sayHello("Ivan222");

// let sayHello = (login) => `Hello, ${login}`;
// let message = sayHello("Ivan222");
// console.log(message);

/**
 * find
 */
// ищем "mouse" в массиве
// let result = pets.find(function (pet) {
//   return pet === "mouse";
// });
// console.log(result);

// ищем белого кота
// let whiteCat = cats.find(function (cat) {
//   return cat.color === "Белый";
// });
// console.log(whiteCat);

// найти серого кота в Москве возрастом до 10 лет
// let grayMoscowCat = cats.find(function (cat) {
//   return cat.color === "Серый" && cat.owner.city === "Москва" && cat.age < 10;
// });
// console.log(grayMoscowCat);
// 3 задание
// найдите в массиве users певого пользователя с фамилией "Сидорова"

//1
// let firstSidorova = users.find(function (user) {
//   return user.lName === "Сидорова";
// });
// console.log(firstSidorova);

//2
// let myFunny = users.find((user) => user.lName === "Сидорова");
// console.log(myFunny);

/**
 * filter
 */
// получить животных, название которых более 3 букв
// let filtPets = pets.filter(function (pet) {
//   return pet.length > 3;
// });
// console.log(filtPets);

// получить ВСЕХ котов в Москве
// let moscowCats = cats.filter(function (cat) {
//   return cat.owner.city === "Москва";
// });
// console.log(moscowCats);

// найти всех серых котов в Москве
// let moscowCats = cats.filter(function (cat) {
//   return cat.owner.city === "Москва" && cat.color === "Серый";
// });
// console.log(moscowCats);

/**
 * reduce
 */
// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// console.log(sum);

/*
let sum = numbers.reduce(function (acc, number) {
  // console.log("----------------------");
  // console.log(`Аккумулятор: ${acc}. Элемент массива: ${number}`);
  return acc + number;
});
console.log(sum);*/

// let sum = numbers.reduce((acc, number) => acc + number);
// console.log(sum);

// 1 задание
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// объедините массив в строку с параграфами
// <p>Киви</p><p>Ананас</p>...

//1
// let str = fruits.reduce((acc, fruit) => acc + `<p>${fruit}</p>`);
// console.log(str);

//2
// let paragraphString = fruits.reduce(function (acc, fruit) {
//   return acc + "<p>" + fruit + "</p>";
// }, "");

// console.log(paragraphString);

//3
// let lovly = fruits.reduce((acc, fruit) => acc + `<p>${fruit}</p>`);
// console.log(`<p>${lovly}`);

//4
// console.log(`<p>${fruits.join("</p><p>")}</p>`);

//5
// let fruitsStr = fruits.reduce((acc, fruit) => "<p>" + acc + "</p>" + fruit);
// console.log(fruitsStr);

//6
// let sum = fruits.reduce((acc, fruit) => acc + ", " + fruit);
// console.log(sum);
// document.write(sum);

//7
// let lovly = fruits.reduce((acc, fruit) => acc + `</p><p>${fruit}`);
// console.log(`<p>${lovly}</p>`);

//8
// let fruitsStr = fruits.reduce(function (acc, fruit) {
//   return `${acc}<p>${fruit}</p>`;
// }, "");
// let fruitsStr = fruits.reduce((acc, fruit) => `${acc}<p>${fruit}</p>`, "");
// document.write(fruitsStr);
// console.log(fruitsStr);

//9
// let lovly = fruits.reduce((acc, fruit) => acc + `<p>${fruit}</p>`, "");
// console.log(lovly);

// начальное значение
// let sum = numbers.reduce(function (acc, number) {
//   return acc + number;
// }, 100);
// console.log(sum);

// список
// let lovly = fruits.reduce((acc, fruit) => acc + `<li>${fruit}</li>`, "<ul class='fruits'>") + "</ul>";
// console.log(lovly);
// document.write(lovly);

// максимальное значение
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
// let maxNumber = numbers.reduce(function (max, currVal) {
//   if (currVal > max) {
//     return currVal;
//   } else {
//     return max;
//   }
// });
// console.log(maxNumber);

// получить суммарный возраст всех котов
// let totalAges = cats.reduce(function (sum, cat) {
//   return sum + cat.age;
// }, 0);
// console.log(totalAges);

// получить строку с именами пользователей
// let userNames = users
//   .reduce(function (str, user) {
//     return str + " " + user.fName;
//   }, "")
//   .trim();
// console.log(userNames);

// посчитать кол-во y и n
// let result = votes.reduce(
//   function (resObj, currVal) {
//     // if (currVal === "y") {
//     //   resObj.yes++;
//     // } else {
//     //   resObj.no++;
//     // }
//     currVal === "y" ? resObj.yes++ : resObj.no++;
//     return resObj;
//   },
//   { yes: 0, no: 0 }
// );
// console.log(result);

/**
 * sort
 */
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
// 1. a = 1, b = 4; a-b = 1 - 4 = -3
// 2. a = 4, b = 6; a-b = 4 - 6 = -2
// 3. a = 6, b = 3; a-b = 6 - 3 = 3

// сортировка по возрастанию
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// сортировка по убыванию
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// сортировка котов по алфавиту
// cats.sort(function (a, b) {
//   if (a.name > b.name) {
//     return -1;
//   }
//   if (a.name < b.name) {
//     return 1;
//   }
//   return 0;
// });
// console.log(cats);
