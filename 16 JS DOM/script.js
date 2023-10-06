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
 * q u e r y S e l e c t o r
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
