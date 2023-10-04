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
