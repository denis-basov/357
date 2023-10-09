// getElementById - получение элемента по ID
// let head1 = document.getElementById("head-1");
// console.log(head1);
// console.log(head1.textContent);
// head1.textContent = "Hello"; // меняем текст элемента на "Hello"

/*
// получаем кнопку
let pressBtn = document.getElementById("press-btn");

// добавляем обработчик события по клику на кнопку
// при клике на кнопку
pressBtn.addEventListener("click", function () {
  // меняем текст на кнопке
  pressBtn.textContent = "В корзине";
});*/

/*
// при клике на кнопку поменять надпись на 'В корзине'
// при повтороном клике вернуть обратно
let pressBtn = document.getElementById("press-btn");

pressBtn.addEventListener("click", function () {
  if (pressBtn.textContent === "В корзину") {
    pressBtn.textContent = "В корзине"; // меняем текст кнопки
    pressBtn.style.background = "gray"; // меняем цвет
  } else {
    pressBtn.textContent = "В корзину";
    pressBtn.style.background = "rgb(240, 240, 240)";
  }
});*/

// при нажатии на кнопку поменять текст заголовка
// let pressBtn = document.getElementById("press-btn");
// let head1 = document.getElementById("head-1");

// pressBtn.addEventListener("click", function () {
//   head1.textContent = "Пх’нглуи мглв’нафх Ктулху Р’льех вгах’нагл фхтагн";
// });

//2 задание
// при нажатии на кнопку id="press-btn" поменяйте текст и цвет текста у параграфа id="par-1"

//1
// let pressBtn = document.getElementById("press-btn");
// let par1 = document.getElementById("par-1");

// pressBtn.addEventListener("click", function () {
//   par1.textContent = "Текст";
//   par1.style.background = "rgb(315, 147, 310)";
// });

//2
// let pressBtn = document.getElementById("press-btn");
// let par1 = document.getElementById("par-1");

// pressBtn.addEventListener("click", function () {
//   par1.textContent = "Над седой равниной моря ветер тучи собирает";
//   pressBtn.style.background = "red";
//   par1.style.background = "red";
// });

//3
// let pressBtn = document.getElementById("press-btn");
// let par1 = document.getElementById("par-1");
// pressBtn.addEventListener("click", function () {
//   par1.textContent = "kglrgjer;ergj";
//   par1.style.color = "rgb(250,250,250)";
//   par1.style.backgroundColor = "rgb(50,50,50)";
// });

//4
// let btn = document.getElementById("press-btn");
// let par = document.getElementById("par-1");

// btn.addEventListener("click", function () {
//   par.textContent = "новый текст";
//   par.style.color = "rgb(315, 151, 412)";
// });

//5
// сохранение состояния и проверка состояния нажатия

// let button = document.getElementById("press-btn");
// let paragraph = document.getElementById("par-1");

// button.addEventListener("click", function () {
//   paragraph.textContent = "par-2";
//   paragraph.style.color = "red";

//   localStorage.setItem("buttonClicked", true);
// });

// window.addEventListener("load", function () {
//   if (localStorage.getItem("buttonClicked")) {
//     paragraph.textContent = "par-2";
//     paragraph.style.color = "red";
//   }
// });

//6
// let pressBtn = document.getElementById("press-btn");
// let par1 = document.getElementById("par-1");
// pressBtn.addEventListener("click", function () {
//   par1.textContent = "Падение курса рубля резко ускорилось по окончании налогового периода в конце сентября. За последние семь торговых сессий доллар подорожал более чем на три рубля.";
//   par1.style.color = "orange";
//   console.dir(par1);
// });

let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

/**
 * q u e r y S e l e c t o r - выборка ОДНОГО элемента
 */
// получение элемента по тегу
// let animalsEl = document.querySelector("div");
// console.log(animalsEl);

// let par = document.querySelector("p");
// console.log(par);

// получение по классу
// let animalsEl = document.querySelector(".animals");
// console.log(animalsEl);

// по ID
// let par1 = document.querySelector("#par-1");
// console.log(par1);

// выбор по комплексному селектору
// let firstAnimal = document.querySelector(".animals .animal");
// console.log(firstAnimal);

// 1 задание
// получите элемент <p>Фамилия: Иванов</p>

// 1
// console.log("<p>Фамилия: Иванов</p>");

//2
// let paragraph = document.querySelector("p:contains('Фамилия: Иванов')");
// console.log(paragraph.textContent);

//3+
// let workerEL = document.querySelector(".workers p");
// console.log(workerEL);

//4
// let firstWorker = document.querySelector(".workers .worker-1 p");
// console.log(firstWorker);

//5
// let lname = document.querySelector(".workers .worker-1 p");
// console.log(lname);
// let lname = document.querySelector(".worker.worker-1 p");
// console.log(lname);

//6
// let paragraph = document.querySelector("p");
// console.log(paragraph.textContent);

// let worker2lName = document.querySelector(".workers .worker-2 p");
// console.log(worker2lName);

// получаем картинку работника 3
// let worker3Avatar = document.querySelector(".workers .worker-3 img");
// console.log(worker3Avatar);

/**
 * q u e r y S e l e c t o r A l l - выборка ВСЕХ элементов по селектору
 */
// let workersLNames = document.querySelectorAll(".workers .worker-1 p");
// console.log(workersLNames);

// получить все картинки работников
// let workersAvatars = document.querySelectorAll(".workers .worker img");
// console.log(workersAvatars);

// получить всех животных
// let animalsList = document.querySelectorAll(".animals .animal");
// console.log(animalsList);
// console.log(animalsList[0].textContent);

// получить текст всех параграфов с животными
//1
// let animalsEl = document.querySelector(".animals");
// console.log(animalsEl);
// console.log(animalsEl.textContent);

//2 получаем список параграфов
//let animalsList = document.querySelectorAll(".animals .animal");

// перебираем список и получаем доступ к каждому параграфу
// animalsList.forEach(function (animalEl) {
//   console.log(animalEl.textContent);
// });

/*
// получаем список элементов
let animalsList = document.querySelectorAll(".animals .animal");

// переделываем из списка обычный массив
let animalsArr = [...animalsList];

let animalsTexts = animalsArr.map(function (animalEl) {
  return animalEl.textContent;
});
console.log(animalsTexts);*/

/**
 * innerHTML
 */
// let animalsContainer = document.querySelector(".animals");
// console.log(animalsContainer);
// console.log(animalsContainer.textContent);
// console.log(animalsContainer.innerHTML);

// копирование внутренней разметки элемента
// let animalsContainer = document.querySelector(".animals");
// let newAnimals = document.querySelector("#new-animals");

// let animalsHTML = animalsContainer.innerHTML;
// newAnimals.innerHTML = animalsHTML;

// вставка разметки в элемент из массива
// let newAnimals = document.querySelector("#new-animals");

// let animalsStr = `<p>${animals.join("</p><p>")}</p>`;
// newAnimals.innerHTML = animalsStr;

// 2 задание
// <div class="users"></div>
// вставьте внутрь элемента 3 параграфа с именами пользователей

/*
//1
let usersDiv = document.querySelector(".users");
let users = ["Иван", "Мария", "Алексей"];

usersDiv.innerHTML = "<p>" + users.join("</p><p>") + "</p>";*/

/*
//2
// получаем элемент для вставки данных
let usersEl = document.querySelector(".users");
let usersNames = "<p>Иван</p><p>Мария</p><p>Алексей</p>";
// вставляем строку в элемент в документе
usersEl.innerHTML = usersNames;
*/

/**
 * value
 */
// let animalsEl = document.querySelector(".animals");
// console.log(animalsEl.value);

// let regBtn = document.querySelector("#reg-btn");
// console.log(regBtn.value);

// let fNameEl = document.querySelector("#fName");
// console.dir(fNameEl);
// console.log(fNameEl.value);

// получение value имени после ввода клиентом
//let fNameEl = document.querySelector("#fName"); // получаем input

// событие активации поля ввода - focus
//fNameEl.addEventListener("focus", function () {
//   console.log("focus");
// });

// событие деактивации поля ввода - blur
// fNameEl.addEventListener("blur", function () {
//   let fNameValue = fNameEl.value;
//   console.log(fNameValue);
// });

// получение value фамилии после ввода клиентом
//let lNameEl = document.querySelector("#lName");

//lNameEl.addEventListener("blur", function () {
//console.log(lNameEl.value);
// если клиент ничего не ввел, то вывести в консоль
// инфу об этом
// если клиент ввел имя, то вывести его имя в консоль
//});

/**
 * parentElement - родительский элемент
 */
// let bizon = document.querySelector(".animals .animal");
// console.log(bizon.parentElement);

/**
 * children - дочерние элементЫ
 */
// let worker1 = document.querySelector(".workers .worker-1");
// console.dir(worker1);
// console.log(worker1.children[3]);

/**
 * nextElementSibling
 * previousElementSibling
 */
// let worker2 = document.querySelector(".workers .worker-2");
// console.log(worker2.nextElementSibling);

// let worker2 = document.querySelector(".workers .worker-2");
// console.log(worker2.previousElementSibling);

/**
 * style
 */
//let head1 = document.querySelector("#head-1");
// console.log(head1.style);

// head1.style.padding = "20px";
// head1.style.color = "orangered";
// head1.style.backgroundColor = "yellow";
// head1.style.border = "2px solid blue";
// head1.style.borderRadius = "10px";
// head1.style.display = "none";

// 3 задание
// задайте элементу class="animals" произвольные стили через JS

//1
// let animalStyle = document.querySelector(".animals");
// console.log(animalStyle.style);

// animalStyle.style.border = "2px dotted black";
// animalStyle.style.borderRadius = " 30px ";
// animalStyle.style.backgroundColor = "purple";
// animalStyle.style.color = "white";
// animalStyle.style.padding = "30px";

//2
// let animals1 = document.querySelector(".animals");
// animals1.style.padding = "20px";
// animals1.style.margin = "10px";
// animals1.style.backgroundColor = "red";

//3
// вывод в консоль я убрал
// let animalsElement = document.querySelector(".animals");
// animalsElement.style.color = "red";
// animalsElement.style.fontSize = "20px";
// animalsElement.style.backgroundColor = "yellow";
// animalsElement.style.padding = "10px";
// animalsElement.style.border = "1px solid black";
// animalsElement.style.borderRadius = "5px";
// animalsElement.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
// animalsElement.style.textAlign = "center";
// animalsElement.style.fontWeight = "bold";

//4
// let anim = document.querySelector(".animals .animal");

// anim.style.padding = "10px";
// anim.style.border = "1px solid gray";
// anim.style.borderRadius = "5px";
// anim.style.backgroundColor = "green";
// console.log(anim);

//4.1
// let anim = document.querySelectorAll(".animals .animal");
// console.log(anim);

// for (let animal of anim) {
//   animal.style.padding = "10px";
//   animal.style.border = "1px solid gray";
//   animal.style.borderRadius = "5px";
//   animal.style.backgroundColor = "green";
// }

//5
// let animal = document.querySelector(".animals");
// console.log(animal.style);
// animal.style.padding = "20px";
// animal.style.color = "orangered";
// animal.style.backgroundColor = "yellow";
// animal.style.border = "2px solid blue";

// скрыть элемент с животными при нажатии на кнопку
// let animalsBtn = document.querySelector(".animals-btn");
// let animalsEl = document.querySelector(".animals");

// animalsBtn.addEventListener("click", function () {
//   animalsEl.style.display = "none";
//   // animalsBtn.style.display = "none";
// });

/*
//Задание 1. Есть объект:
const account = {
  owner: "Silvestr Stallone",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 99,
  pin: 9999,
};
console.log(account);
// С помощью методов DOM создайте разметку, стили. Разместите в разметке данные из объекта
// и поместите на страницу.

// 1 создаем разметку
let accountStr = `<div class="account">
                    <h2>${account.owner}</h2>
                    <p>Движения по счету: ${account.movements.join(", ")}</p>
                    <p>Рейтинг: ${account.interestRate}</p>
                    <p>ПИН: ${account.pin}</p>
                  </div>`;
// 2 получаем элемент для вставки
let accountsEl = document.querySelector("#accounts");
// 3 вставка сформированной строки в полученный элемент
accountsEl.innerHTML = accountStr;

// 4 получаем только что вставленный элемент
let accountEl = accountsEl.children[0];
// 5 задаем стили
accountEl.style.color = "red";
accountEl.style.background = "blue";
accountEl.style.border = "3px dotted orange";

console.log(accountEl);
*/

/**
 * classList
 */
// let worker2 = document.querySelector(".workers .worker-2");
// console.log(worker2.classList);

// работа с классами элемента
let userEl = document.querySelector("#user"); // получаем элемент пользователя
let showUserBtn = document.querySelector("#show-user"); // получаем кнопку

// add() - добавление класса(ов) элементу
// userEl.classList.add("user", "user-1");
// console.log(userEl.classList);

// при нажатии на кнопку добавим класс user
// showUserBtn.addEventListener("click", function () {
//   userEl.classList.add("user");
// });

// remove() - удаление классов у элемента
// при нажатии на кнопку удалим класс user
// showUserBtn.addEventListener("click", function () {
//   userEl.classList.remove("user");
// });

// contains() - проверяет, есть ли класс у элемента
// console.log(userEl.classList.contains("user"));

/*
// 1
// при нажатии на кнопку
// если класс user у элемента есть, удалить его
// а если класса user у элемента нет, добавить
showUserBtn.addEventListener("click", function () {
  // проверяем, есть ли класс
  if (userEl.classList.contains("user")) {
    // если класс есть, удаляем его
    userEl.classList.remove("user");
  } else {
    // если класса нет, добавляем его
    userEl.classList.add("user");
  }
});
*/

/**
 * toggle() - добавляет класс, если он отсутствует, и удаляет, если он есть
 */
//2
// showUserBtn.addEventListener("click", function () {
//   userEl.classList.toggle("user");
// });

/**
 * скрытие/показ элемента при нажатии на кнопку
 */
// showUserBtn.addEventListener("click", function () {
//   userEl.classList.toggle("hidden");
// });

/**
 * getAttribute() - возвращает значение атрибута
 */
// let worker2Img = document.querySelector(".workers .worker-2 img");
// console.log(worker2Img.getAttribute("alt")); // получаем alt
// console.log(worker2Img.getAttribute("src"));

/**
 * setAttribute() - устанавливает значение атрибута
 */
// let worker2Img = document.querySelector(".workers .worker-2 img");
// worker2Img.setAttribute("alt", "Иван Иванов"); // меняем значение alt
// worker2Img.setAttribute("src", "images/user-1.jpg"); // меняем путь к картинке

/**
 * при клике на кнопку поменять картинки 1 и 2 работника местами
 */
/*
// 1 получаем элементы для работы
let changeImgBtn = document.querySelector("#change-img");
let worker1Img = document.querySelector(".workers .worker-1 img");
let worker2Img = document.querySelector(".workers .worker-2 img");
// console.log(changeImgBtn, worker1Img, worker2Img);

// 2 при клике на кнопку
changeImgBtn.addEventListener("click", function () {
  // 3 получаем ссылки на картинки
  let worker1Src = worker1Img.getAttribute("src");
  let worker2Src = worker2Img.getAttribute("src");
  console.log(worker1Src, worker2Src);

  // 4 задать значение атрибутов src
  worker1Img.setAttribute("src", worker2Src); // картинка для первого работника
  worker2Img.setAttribute("src", worker1Src); // картинка для второго работника
});
*/

// 1 задание
// допишите пример так, чтобы помимо картинок еще менялись и значения атрибутов alt

//1
/*
let changeImgBtn = document.querySelector("#change-img");
let worker1Img = document.querySelector(".workers .worker-1 img");
let worker2Img = document.querySelector(".workers .worker-2 img");

changeImgBtn.addEventListener("click", function () {
  // получаем значения атрибутов src
  let worker1Src = worker1Img.getAttribute("src");
  let worker2Src = worker2Img.getAttribute("src");

  // получаем значения атрибутов alt
  let worker1Alt = worker1Img.getAttribute("alt");
  let worker2Alt = worker2Img.getAttribute("alt");
  console.log(worker1Alt, worker2Alt);

  // меняем значения атрибутов src
  worker1Img.setAttribute("src", worker2Src); // картинка для первого работника
  worker2Img.setAttribute("src", worker1Src); // картинка для второго работника

  // меняем значения атрибутов alt
  worker1Img.setAttribute("alt", worker2Alt); // alt для первого работника
  worker2Img.setAttribute("alt", worker1Alt); // alt для второго работника
});
*/

//2
/*
// 1 получаем элементы для работы
let changeImgBtn = document.querySelector("#change-img");
let worker1Img = document.querySelector(".workers .worker-1 img");
let worker2Img = document.querySelector(".workers .worker-2 img");

// 2 при клике на кнопку
changeImgBtn.addEventListener("click", function () {
  // 3 получаем ссылки на картинки
  let worker1Src = worker1Img.getAttribute("src");
  let worker2Src = worker2Img.getAttribute("src");

  let worker1Alt = worker1Img.getAttribute("alt");
  let worker2Alt = worker2Img.getAttribute("alt");
  // console.log(worker1Src, worker2Src, worker1Alt, worker2Alt);

  // 4 задать значение атрибутов src
  worker1Img.setAttribute("src", worker2Src); // картинка для первого работника
  worker2Img.setAttribute("src", worker1Src); // картинка для второго работника

  worker1Img.setAttribute("alt", worker2Alt); // alt  для первого работника
  worker2Img.setAttribute("alt", worker1Alt);
});
*/

//3
/*
let changeImgBtn = document.querySelector("#change-img");
let worker1Img = document.querySelector(".workers .worker-1 img");
let worker2Img = document.querySelector(".workers .worker-2 img");

changeImgBtn.addEventListener("click", function () {
  let worker1Src = worker1Img.getAttribute("src");
  let worker2Src = worker2Img.getAttribute("src");
  let worker1Alt = worker1Img.getAttribute("alt");
  let worker2Alt = worker2Img.getAttribute("alt");

  worker1Img.setAttribute("src", worker2Src);
  worker2Img.setAttribute("src", worker1Src);
  worker1Img.setAttribute("alt", worker2Alt);
  worker2Img.setAttribute("alt", worker1Alt);
});
*/

/**
 * document.createElement - создание элемента
 */
/*
// создаем элемент
let newAnimalPar = document.createElement("p");
// console.dir(newAnimalPar);

// добавляем текст в параграф
newAnimalPar.textContent = "dog";

// добавляем класс
// newAnimalPar.setAttribute("class", "animal");
newAnimalPar.classList.add("animal");

// добавить элемент в документ последним потомком div class="animals"
let animalsContainer = document.querySelector(".animals"); // получаем контейнер для вставки
animalsContainer.appendChild(newAnimalPar); // вставляем элемент на страницу последним потомком в контейнере
*/

/**
 * element.insertAdjacentHTML() - добавляет HTML в указанное место
 */
/*
let myAnimal = "dog";
let animalsContainer = document.querySelector(".animals"); // получаем контейнер
let newAnimalPar = `<p class="animal"><span>${myAnimal}</span></p>`; // создаем параграф
animalsContainer.insertAdjacentHTML("beforeend", newAnimalPar); // добавляем параграф в контейнер последним потомком
*/

// 2 задание
//  в элемент <div id="accounts"></div> вставьте заголовок, в котором будет указна строка
// содержащая приветствие и произвольное имя и фамилию, а также класс
// должно получиться:
//<div id="accounts">
//  <h1 class="account">Привет, Иван Иванов</h1>
//</div>

//1
// let newContainer = document.querySelector("#accounts");
// let helloUsr = '<h1 class="account">Привет, Иван Иванов</h1>';
// newContainer.insertAdjacentHTML("afterbegin", helloUsr);
// console.log(newContainer);

//2
// let newContainer = document.querySelector("#accounts");
// let helloUsr = '<h1 class="accounts">Привет, Иван Иванов</h1>';
// newContainer.insertAdjacentHTML("afterbegin", helloUsr);
// console.log(newContainer);

//3
// let hi = "Привет, Иван Иванов";
// let textContainer = document.querySelector("#accounts");
// let newH1 = `<h1 class="account">${hi}</h1>`;
// textContainer.insertAdjacentHTML("afterbegin", newH1);

//4
// let privet = '<h1 class="accounts">Привет, Иван Иванов</h1>';
// let privetContainer = document.querySelector("#accounts");
// let newPrivet = `<div class="accounts">${privet}</div>`;
// privetContainer.insertAdjacentHTML("afterbegin", newPrivet);

//5
// let newContainer = document.querySelector("#accounts");
// let helloUsr = '<h1 class="accounts">Привет, Иван Иванов</h1>';
// newContainer.insertAdjacentHTML("afterbegin", helloUsr);
// console.log(newContainer);

//6
// let myHello = "Марина Крылова";
// let accountConteiner = document.querySelector("#accounts");
// let newHello = `<h1 class="account">Привет, ${myHello}!</h1>`;
// accountConteiner.insertAdjacentHTML("beforeend", newHello);

//7
// document.getElementById("accounts").innerHTML = '<h1 class="account">Привет, Иван Иванов</h1>';

//8
// document.getElementById("accounts").insertAdjacentHTML("beforeend", '<h1 class="account">Привет, Иван Иванов</h1>');

/**
 * обработка введенного значения
 */
let fNameEl = document.querySelector("#fName"); // инпут
let fNameError = document.querySelector("#fNameError"); // элемент для ошибки

fNameEl.addEventListener("blur", function () {
  let value = fNameEl.value;
  // если пользователь ничего не ввел
  if (value.length === 0) {
    // выводим сообщение об ошибке
    fNameError.textContent = "Это поле должно быть заполнено";
    fNameEl.style.background = "rgb(250, 199, 199)";
  } else {
    fNameError.textContent = "";
    fNameEl.style.background = "none";
  }
});

// дата
let start = document.querySelector("#start");

start.addEventListener("blur", function () {
  console.log(start.value);
});
