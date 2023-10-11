/**
 * стак вызовов
 */
//1
/*
// сложение
function getSum(num1, num2) {
  return num1 + num2;
}

// формирование строки для вывода
function outputStr(num) {
  let result = `<h3>Сумма: ${num}</h3>`;
  console.log(result);
}

outputStr(getSum(5, 7));
*/

/*
//2
// сложение
function getSum(num1, num2) {
  return num1 + num2;
}

// формирование строки для вывода
function outputStr(num1, num2) {
  let result = `<h3>Сумма: ${getSum(num1, num2)}</h3>`;
  console.log(result);
}
outputStr(8, 3);
*/
/**
 * Стек вызовов
 * -
 * outputStr
 * outputStr getSum
 * outputStr
 * outputStr log
 * outputStr
 * -
 */

/**
 * переполнение стека вызовов
 * рекурсия
 */
// function sayHello() {
//   console.log("Hello");

//   sayHello();
// }
// sayHello();
/**
 * Стек вызовов
 * -
 * sayHello
 * sayHello sayHello
 * sayHello sayHello sayHello
 * sayHello sayHello sayHello sayHello
 * sayHello sayHello sayHello sayHello sayHello
 * sayHello sayHello sayHello sayHello sayHello sayHello
 *
 * -
 */

/*
function getNum(num) {
  console.log(num);
  num++;
  if (num === 10) {
    return;
  }

  getNum(num);
}
getNum(1);*/

/**
 * setTimeout
 */
// console.log("Первая строка");
// setTimeout(function () {
//   console.log("Вторая строка");
// }, 1000);
// console.log("Третья строка");

// https://jsonplaceholder.typicode.com/guide/

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(function (response) {
//     return response.json();
//   })
//   .then((json) => console.log(json));

/**
 * https://jsonplaceholder.typicode.com/posts
 */
// получаем контейнер для вставки постов
let postsContainer = document.querySelector("#posts");

// отображение постов
function showPosts(data) {
  console.log(data);
  // получаем из массива объектов массив строк
  let result = data.map(function (post, i) {
    let output = `
        <div class="post post-${i + 1}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <a href="single_post.php?id=${post.id}">Подробнее...</a>
        </div>`;
    return output;
  });

  // объединяем массив строк в строку
  result = result.join("");

  // вставляем сформированную строку в полученный контейнер
  postsContainer.insertAdjacentHTML("beforeend", result);
}

// получение постов
async function getPosts() {
  // получаем данные
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // если сервер недоступен
  if (!response.ok) {
    console.log("Ответ не получен");
    return;
  }
  //console.log(response);

  // раскодируем данные
  let data = await response.json();

  // отображаем данные в документе
  showPosts(data);
}
getPosts();
