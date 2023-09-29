// дз массивы и объекты
//3. Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3.
//Найдите сумму его элементов.

// let abc = {
//   "1a": 1,
//   "2b": 2,
//   "c-c": 3,
// };
// // console.log(abc["c-c"]);

// let sum = abc["1a"] + abc["2b"] + abc["c-c"];
// console.log(abc);
// console.log(sum);

//7*. Дан объект:
//let obj = { "1a": 1, b2: 2, "eee-": 3, d4: 4 };
//К каким элементам этого объекта допустимо обращение через точку, а к каким - нет?
//console.log(obj.b2, obj.d4);

// циклы

// вывеси в консоль числа от 0 до 5
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// console.log("Цикл завершен");

// вывести числа от 10 до 0
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// 1 задание
// выведите в консоль числа от 100 до 50 с шагом 10
// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

// for (let i = 100; i >= 50; i -= 10) {
//   console.log(i);
// }

// БЕСКОНЕЧНЫЙ ЦИКЛ
// for (let i = 100; i >= 50; i - 10) {
//   console.log(i);
// }

// перебор массива в цикле
// console.log(numbers);
// document.write(numbers);

// for (let i = 0; i <= 7; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i <= 7; i++) {
//   console.log(numbers[i] ** 2);
// }

//console.log(pets);
// for (let i = 0; i <= 8; i++) {
//   document.write(`<li>${pets[i]}</li>`);
// }

// for (let i = 8; i >= 0; i--) {
//   document.write(`<li>${pets[i]}</li>`);
// }

// 1
// let lastIndex = pets.length - 1; // получаем индекс последнего элемента массива
// console.log(lastIndex);
// for (let i = 0; i <= lastIndex; i++) {
//   document.write(`<li>${pets[i]}</li>`);
// }

//2
// let petLen = pets.length;
// for (let i = 0; i < petLen; i++) {
//   document.write(`<li>${pets[i]}</li>`);
// }

//3
// for (let i = 0, petLen = pets.length; i < petLen; i++) {
//   document.write(`<li>${pets[i]}</li>`);
// }

// 2 задание
// let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
// выведите элементы масива в документ в теге <p>

//1
//console.log(animals);
// for (let i = 0; i < animals.length; i++) {
//   document.write(`<p>${animals[i]}</p>`);
// }

//2
// console.log(animals);
// document.write(`<p>${animals}</p>`);

//3
// let aL = animals.length;
// for (let i = 0; i < aL; i++) {
//   document.write(`<p>${animals[i]}</p>`);
// }

//4
// for (let i = 0, animalsLen = animals.length; i < animalsLen; i++) {
//   document.write(`<p>${animals[i]}</p>`);
// }

// накопление результата в цикле

//console.log(numbers);

/*
// сумма элементов массива
let sum = 0; // переменная для накопления суммы
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // плюсуем значение каждого элемента массива в переменную sum
  console.log(sum, numbers[i]);
}
console.log(sum);*/

/*
// получаение произведения элементов массива
let mult = 1;
for (let i = 0; i < numbers.length; i++) {
  // mult *= numbers[i];
  mult = mult * numbers[i]; // 1 * 1
}
console.log(mult);*/

/*
// получить максимальное значение в массиве
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(max, numbers[i]);
  // если значение текущего элемента больше текущего максимума
  if (numbers[i] > max) {
    // записываем значение текущего элемента в максимум
    max = numbers[i];
  }
  //if (numbers[i] > max)max = numbers[i];
  //numbers[i] > max ? (max = numbers[i]) : "";
}
console.log(max);*/

// 3 задание
// let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
// соберите из массива строку из параграфов и значений элементов
// <p>Киви</p><p>Ананас</p><p>Кокос</p><p>Апельсин</p><p>Банан</p>....
//console.log(fruits);

//1
// let fL = fruits.length;
// for (let i = 0; i < fL; i++) {
//   console.log(`<p>${fruits[i]}</p>`);
// }

//2
// let str = "";
// for (let i = 0; i < fruits.length; i++) {
//   str += fruits[i];
// }
// document.write(`<p>${str}</p>`);

//3
// let str = "";
// for (let i = 0; i < fruits.length; i++) {
//   str += fruits[i] + "\n";
// }
// document.write(`<p>${str}</p>`);

/*
//4
let str = "";
for (let i = 0; i < fruits.length; i++) {
  str += `<p>${fruits[i]}</p>`;
}
console.log(typeof str);

console.log(`<div class="fruits">${str}</div>`);
document.write(`<div class="fruits">${str}</div>`);*/

// перебор двумерного массива
// let phones = [
//   [345, 678, 137, 789, 568, 236],
//   [542, 678, 345, 867],
//   [872, 589, 126, 875, 345],
// ];
/*
console.log(phones);

let phonesStr = "";
for (let i = 0; i < phones.length; i++) {
  for (let j = 0; j < phones[i].length; j++) {
    phonesStr += `<li>${phones[i][j]}</li>`;
  }
}
console.log(phonesStr);
console.log(phones[1][2]);*/

/**
 * WHILE
 */
// вывеси в консоль числа от 0 до 5
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// console.log("Цикл завершен");

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// сумма элементов массива
// let sum = 0; // переменная для накопления суммы
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // плюсуем значение каждого элемента массива в переменную sum
//   console.log(sum, numbers[i]);
// }
// console.log(sum);
/*
let sum = 0; // переменная для накопления суммы
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum);*/

// break - прерывает выполнение цикла
// если в массвие есть значение pig, сообщить об этом
/*
let searchEl = "pig";
let petLen = pets.length;
for (let i = 0; i < petLen; i++) {
  console.log(pets[i]);

  // сравниваем каждый элемент массива с искомым значением
  if (pets[i] === searchEl) {
    console.log("Искомый элемент найден!");
    break; // прерываем цикл
  }
}
*/

/*
// если искомый элемент в массиве есть, сообщить об этом
// если искомого элемента в массиве нет, тоже вывести сообщение
let searchEl = "pig";
let petLen = pets.length;
let flag = false; // предполагаем, что элемента в массиве нет

for (let i = 0; i < petLen; i++) {
  // сравниваем каждый элемент массива с искомым значением
  if (pets[i] === searchEl) {
    flag = true; // если элемент в массиве найден, меняем значение на противоположное
    break; // прерываем цикл
  }
}
// проверяем, есть ли в массиве значение
if (flag) {
  console.log("Элемент найден!");
} else {
  console.log("Элемент отсутствует");
}*/

// посчитать кол-во голосов за и против
// let votes = ["y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y","y", "n", "n", "y", "y"];

//1
/*
let yes = 0;
let no = 0;
for (let i = 0; i < votes.length; i++) {
  // если текущий элемент - "y"
  if (votes[i] === "y") {
    //yes = yes + 1; // добавляем один голос за
    yes++;
  } else {
    //no = no + 1; // иначе добавляем голос против
    no++;
  }
  //votes[i] === "y" ? yes++ : no++;
}
console.log("За: ", yes);
console.log("Против: ", no);*/

//2
/*
let result = {
  yes: 0,
  no: 0,
};

for (let i = 0; i < votes.length; i++) {
  // если текущий элемент - "y"
  if (votes[i] === "y") {
    //yes = yes + 1; // добавляем один голос за
    result.yes++;
  } else {
    //no = no + 1; // иначе добавляем голос против
    result.no++;
  }
  //votes[i] === "y" ? result.yes++ : result.no++;
}
console.log(result);*/

/*
// continue - переход к следующей итерации цикла
// let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
// вывести в консоль только четные элементы массива
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    // если остаток от деления равен 1, то число нечетное
    continue; // переходим к след. итерации
  }
  console.log(numbers[i]);
}
*/

/**
 * for...of
 */
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (let user of users) {
//   console.log(`<p>${user}</p>`);
// }

// получение суммы элементов массива
// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// console.log(sum);

// формирование строки из двумерного массива
/*
let str = "";
for (let row of phones) {
  for (let phone of row) {
    str += `<li>${phone}</li>`;
  }
}
console.log(str);*/

// перебор объекта
// for (let key in user) {
//   console.log(key, user[key]);
// }
