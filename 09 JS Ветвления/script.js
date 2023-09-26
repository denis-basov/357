// let login = "admin";

// if (login === "admin") {
//   console.log("Привет, админ");
// }

// let cats = 1;
// if (cats > 5) {
//   console.log("Котов очень много");
// }

//let login = "ivan55";
// если логин состоит из 5 символов и более, то он подходит
// если меньше, то не подходит
// console.log(login.length); // получаем количество символов в строке

// if (login.length >= 5) {
//   console.log("Логин подходит");
// } else {
//   console.log("Логин должен быть не короче пяти символов");
// }

// 1 задание
// let password = 'odfp38923';
// проверьте пароль на длину. Должно быть не менее 8 символов

// 1
// let password = "12er12T";
// if (password.length >= 8) {
//   console.log("Пароль подходит");
// } else {
//   console.log("Не верный пароль, необходимая минимальная длина 8 символов.");
// }

//2
// let password = "odfp38923";
// console.log(password.length);
// if (password.length >= 8) {
//   console.log("Пароль подходит");
// } else {
//   console.log("Пароль должен быть не короче 8 символов");
// }

//3
// let password = "odfp38";
// console.log(password.length);
// if (password.length < 8) {
//   console.log("Password false");
// } else {
//   console.log("Password correct");
// }

// 4
// let mePassword = "odfp3443";
// console.log(mePassword.length);

// if (mePassword.length < 8) {
//   console.log("Пароль должен быть не менее 8 символов");
// } else {
//   console.log("Пароль подходит");
// }

//5
// let password = "odfp389";
// console.log(password.length);
// if (password.length >= 8) {
//   console.log("Пароль подходит");
// } else {
//   console.log("Пароль должен быть не короче восьми символов");
// }

// let rating = 5;
// if (rating === 5) {
//   console.log("Отличный рейтинг");
// } else if (rating === 4) {
//   console.log("Хороший рейтинг");
// } else if (rating === 3) {
//   console.log("Удовлетворительный рейтинг");
// } else if (rating === 2) {
//   console.log("Плохой рейтинг");
// } else if (rating === 1) {
//   console.log("Ужасный рейтинг");
// } else {
//   console.log("Рейтинг указан некорректно");
// }

/*
let login = "admin";
let password = "123456";

// проверяем логин
if (login === "admin") {
  // если логин указан верно
  // проверяем пароль
  if (password === "123456") {
    // если пароль верен
    console.log("Добро пожаловать");
  } else {
    // если пароль неверен, выводим ошибку
    console.log("Пароль указан неверно");
  }
} else {
  // если логин указан неверно
  console.log("Логин введен неверно");
}
*/

/*
// логическое И (&&)
let login = "admin";
let password = "123456";

// если логин указан верно И пароль указан верно
if (login === "admin" && password === "123456") {
  console.log("Добро пожаловать");
} else {
  console.log("Логин или пароль указаны неверно");
}
*/

/*
// логическое ИЛИ (||)
let age = 40;

// если возраст менее 6 ИЛИ более или равен 65
if (age < 6 || age >= 65) {
  console.log("Проходите бесплатно");
} else {
  console.log("Заплатите 100 рублей");
}*/

/*
// логическте И (&&)
let age = 40;
// если возраст больше 6 И меньше 65
if (age >= 6 && age < 65) {
  console.log("Заплатите 100 рублей");
} else {
  console.log("Проходите бесплатно");
}*/

// тернарный оператор (?)
/*
let age = 10;
if (age >= 21) {
  console.log("Проходи");
} else {
  console.log("Уходи");
}

age >= 21 ? console.log("Проходи") : console.log("Уходи");*/

/*
let firstName = "Иван";
let lastName = "Иванов";
let isAdmin = false;
let isAdminStr;

if (isAdmin === true) {
  isAdminStr = "Да";
} else {
  isAdminStr = "Нет";
}

let userInfo = `Имя: ${firstName}. Фамилия: ${lastName}. Админ: ${isAdminStr}.`;

console.log(userInfo);
*/

/*
let firstName = "Иван";
let lastName = "Иванов";
let isAdmin = true;

if (isAdmin) {
  isAdmin = "Да";
} else {
  isAdmin = "Нет";
}

let userInfo = `Имя: ${firstName}. Фамилия: ${lastName}. Админ: ${isAdmin}.`;

console.log(userInfo);
*/

/*
let firstName = "Иван";
let lastName = "Иванов";
let isAdmin = false;

let userInfo = `Имя: ${firstName}. Фамилия: ${lastName}. Админ: ${isAdmin ? "Да" : "Нет"}.`;

console.log(userInfo);*/
