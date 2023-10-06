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
let fNameEl = document.querySelector("#fName"); // получаем input

// событие активации поля ввода - focus
//fNameEl.addEventListener("focus", function () {
//   console.log("focus");
// });

// событие деактивации поля ввода - blur
fNameEl.addEventListener("blur", function () {
  let fNameValue = fNameEl.value;
  console.log(fNameValue);
});

// получение value фамилии после ввода клиентом
let lNameEl = document.querySelector("#lName");

lNameEl.addEventListener("blur", function () {
  console.log(lNameEl.value);
  // если клиент ничего не ввел, то вывести в консоль
  // инфу об этом
  // если клиент ввел имя, то вывести его имя в консоль
});

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
